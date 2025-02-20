import { useState } from "react";
import { Equal, Expect } from "../.helpers/total-typescript-helpers";

const useCounter = () => {
  const [count, setCount] = useState(0);

  return {
    returnValue: {
      count,
      increment: () => setCount((c) => c + 1),
      decrement: () => setCount((c) => c - 1),
    },
  };
};

type InferHookValue<T> = T extends () => { returnValue: infer ReturnValue }
  ? ReturnValue
  : never;

type HookTests = Expect<
  Equal<
    InferHookValue<typeof useCounter>,
    {
      count: number;
      increment: () => void;
      decrement: () => void;
    }
  >
>;
