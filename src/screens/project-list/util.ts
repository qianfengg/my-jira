import { useMemo } from "react";
import { useUrlQueryParam } from "utils/url";

export const useProjectSearchParam = () => {
  const [param, setParam] = useUrlQueryParam(["name", "personId"]);
  return [
    useMemo(() => ({ ...param, personId: Number(param.personId) }), [param]),
    setParam,
  ] as const;
};
