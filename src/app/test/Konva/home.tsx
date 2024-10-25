import dynamic from "next/dynamic";

export default function Home() {
  const NoSSRComponent = dynamic(() => import("./page"), {
    ssr: false,
  });

  return (
    <>
      <NoSSRComponent />
    </>
  );
}
