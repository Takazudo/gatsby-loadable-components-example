import * as React from "react";
import loadable from "@loadable/component";
import StaticComponent from "../components/static-component";

const DynamicComponent = loadable(() =>
  import("../components/dynamic-component")
);

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
