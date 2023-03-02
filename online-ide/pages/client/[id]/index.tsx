import React from "react";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();

  function loadProjectHandler() {
    router.push("/client/daboo/5");
  }
  return (
    <div>
      Individual client
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};

export default Index;
