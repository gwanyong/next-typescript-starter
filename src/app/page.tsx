import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import getQueryClient from "./utils/getQueryClient";
import Test from "./components/Test";

export default async function Home() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["hello"],
    queryFn: () =>
      fetch("https://api.github.com/repos/vercel/next.js").then((res) =>
        res.json()
      ),
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <div>
      <HydrationBoundary state={dehydratedState}>
        <Test />
      </HydrationBoundary>
    </div>
  );
}
