import { useState } from "react";
interface State<D> {
  data: D | null;
  error: Error | null;
  stat: "idle" | "loading" | "error" | "success";
}

const defaultState: State<null> = {
  data: null,
  error: null,
  stat: "idle",
};

export const useAsync = <D>(initialState?: State<D>) => {
  const [state, setState] = useState<State<D>>({
    ...defaultState,
    ...initialState,
  });

  const setData = (data: D) =>
    setState({
      data,
      error: null,
      stat: "success",
    });

  const setError = (error: Error) =>
    setState({
      data: null,
      error,
      stat: "error",
    });

  const run = (promise: Promise<D>) => {
    if (!promise || !promise.then) {
      throw new Error('run function param should use promise')
    }
    setState({
      ...state,
      stat: 'loading',
    })
    return promise
      .then((data) => {
        setData(data);
        return data
      })
      .catch((error) => {
        setError(error);
        return error
      });
  };

  return {
    isIdle: state.stat === "idle",
    isLoading: state.stat === "loading",
    isSuccess: state.stat === "success",
    isError: state.stat === "error",
    setData,
    setError,
    run,
    ...state,
  };
};
