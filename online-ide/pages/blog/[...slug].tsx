import { useRouter } from "next/router";

// a route with [...] spreads all routes into an array of file name
const CatchAll = () => {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>The Blog Posts</h1>
    </div>
  );
};

export default CatchAll;
