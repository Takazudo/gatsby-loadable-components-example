import * as React from "react";
import StaticComponent from "../components/static-component";
import DynamicComponent from "../components/dynamic-component";

const IndexPage = () => {
  return (
    <main>
      <h1>Loadable components example</h1>
      <hr />
      <StaticComponent />
      <hr />
      <DynamicComponent />
    </main>
  );
};

export default IndexPage;
