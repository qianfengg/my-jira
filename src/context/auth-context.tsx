import React from "react";
import { User } from "screens/project-list/search-panel";
import * as auth from "auth-provider";
import { getToken } from "auth-provider";
import { http } from "utils/http";
import { useAsync } from "utils/use-async";
import { useMount } from "utils";
import { FullPageError, FullPageLoading } from "components/lib";

interface AuthForm {
  username: string;
  password: string;
}

const AuthContext = React.createContext<
  | {
      user: User | null;
      login: (form: AuthForm) => Promise<void>;
      register: (form: AuthForm) => Promise<void>;
      logout: () => Promise<void>;
    }
  | undefined
>(undefined);
AuthContext.displayName = "AuthContext";

const bootstrapUser = async () => {
  let user = null;
  const token = getToken() || "";
  const data = await http("me", { token });
  if (data) {
    user = data.user;
  }
  return user;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const {
    data: user,
    setData: setUser,
    run,
    isIdle,
    isLoading,
    isError,
    error,
  } = useAsync<User | null>();

  const login = (form: AuthForm) => auth.login(form).then(setUser);
  const register = (form: AuthForm) => auth.register(form).then(setUser);
  const logout = () => auth.logout().then(() => setUser(null));

  useMount(() => {
    run(bootstrapUser());
  });

  if (isIdle || isLoading) {
    return <FullPageLoading />;
  }

  if (isError) {
    return <FullPageError error={error} />;
  }

  return (
    <AuthContext.Provider
      value={{ user, login, register, logout }}
      children={children}
    />
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("use Auth should in Auth Provider");
  }
  return context;
};
