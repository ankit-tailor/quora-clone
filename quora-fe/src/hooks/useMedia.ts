import { useState, useEffect } from "react";

type Params = {
  queries: string;
  values: string;
  defaultValue: string;
};

const useMedia = (queries: any, values: any, defaultValue: any) => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    const mediaQueryLists = queries.map((q: any) => window.matchMedia(q));

    const getValue = () => {
      const index = mediaQueryLists.findIndex((mql: any) => mql.matches);
      return typeof values[index] !== "undefined"
        ? values[index]
        : defaultValue;
    };

    setValue(getValue);
    const handler = () => setValue(getValue);
    mediaQueryLists.forEach((mql: any) => mql.addListener(handler));
    return () =>
      mediaQueryLists.forEach((mql: any) => mql.removeListener(handler));
  }, []);

  return value;
};

export default useMedia;
