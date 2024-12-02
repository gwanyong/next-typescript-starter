"use client";

import { useQuery } from "@tanstack/react-query";

export default function TestQuery() {
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
    </div>
  );
}
