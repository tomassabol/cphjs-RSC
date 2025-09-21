import React from "react";

async function WaitFor({ ms }: { ms: number }) {
  await new Promise((resolve) => setTimeout(resolve, ms));
  return <div>Waited for {ms}ms</div>;
}

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10">
      <React.Suspense fallback={<div>Loading...</div>}>
        <WaitFor ms={6000} />
      </React.Suspense>

      <React.Suspense fallback={<div>Loading...</div>}>
        <WaitFor ms={2000} />
      </React.Suspense>

      <React.Suspense fallback={<div>Loading...</div>}>
        <WaitFor ms={4000} />
      </React.Suspense>
    </div>
  );
}
