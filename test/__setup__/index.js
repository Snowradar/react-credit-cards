import Enzyme from "enzyme";
// unofficial enzyme adapter supporting React 17 - this will be deprecated once the official adapter is released (https://github.com/enzymejs/enzyme/issues/2429)
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

const react = document.createElement("div");
react.id = "react";
react.style.height = "100vh";
document.body.appendChild(react);

window.matchMedia = () => ({
  matches: false,
  addListener: () => {},
  removeListener: () => {},
});
