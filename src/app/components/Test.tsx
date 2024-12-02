"use client";

import { useAtomValue } from "jotai";
import { counter } from "../../../store/exAtom";
import { useQuery } from "@tanstack/react-query";

const Test = () => {
  const counterValue = useAtomValue(counter);
  const { data, isLoading } = useQuery({
    queryKey: ["hellow"],
    queryFn: () =>
      fetch("https://api.github.com/repos/vercel/next.js").then((res) =>
        res.json()
      ),
  });

  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      <h1>{data?.stargazers_count}</h1>
      <h1>jotai test : {counterValue}</h1>
    </div>
  );
};

export default Test;
