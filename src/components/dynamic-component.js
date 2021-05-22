import * as React from "react";

const StaticComponent = () => {
  return (
    <div>
      This is dynamic component! <br />I need JavaScript!
      <button onClick={() => alert('boom')}>click me!</button>
    </div>
  );
};

export default StaticComponent;
