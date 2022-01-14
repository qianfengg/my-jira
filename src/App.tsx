import AuthenticatedApp from "authenticated-app";
import ErrorBoundary from "components/error-boundary";
import { useAuth } from "context/auth-context";
import React from "react";
import UnauthenticatedApp from "unauthenticated-app";
import { FullPageError } from "components/lib";
import "./App.less";

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      <ErrorBoundary fallbackRender={FullPageError}>
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </ErrorBoundary>
    </div>
  );
}

export default App;
