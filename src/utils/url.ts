import { cleanObject } from "./index";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

export const useUrlQueryParam = <T extends string>(keys: T[]) => {
  const [searchParams, setSearchParams] = useSearchParams();
  return [
    useMemo(
      () =>
        keys.reduce((prev, key) => {
          return { ...prev, [key]: searchParams.get(key) || "" };
        }, {} as { [key in T]: string }),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [searchParams]
    ),
    (params: Partial<{ [key in T]: unknown }>) => {
      const o = cleanObject({ ...Object.entries(searchParams), ...params });
      return setSearchParams(o);
    },
  ] as const;
};
