import React from "react";
import { mount } from "marketing/MarketingApp";

export const Marketing = () => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    mount(ref.current);
  });
  return <div ref={ref} />;
};
