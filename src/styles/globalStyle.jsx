import { createGlobalStyle } from "styled-components";
import backgroundImg from "../assets/bg.jpg";

const globalStyle = createGlobalStyle`
* {
outline: none;
box-sizing:border-box;
}
:root {
  --primary-color: yellow;
  --primary-color-dark: gold;
  --secondary-color: #13d3ed;
  --secondary-color-dark: #0b94a7;
  --transparency-dark: rgba(0, 0, 0, 0.6);
  --transparency-light: rgba(255, 255, 255, 0.6);
}
body {
  line-height: normal;
  font-family: "Karla", sans-serif;
  background-color: black
}
html, body {
  width: 100%;
  min-height:100%;
  display: flex;
  padding: 0;
  margin: 0;
}
#root {
  background: url(${backgroundImg});
  height:100%;
  width:100%;
  background-position: center center;
}
h1 {
  font-size: 3rem;
}

h2 {
  font-size: 2rem;
}

h3 {
  font-size: 1.5rem;
}
`;

export default globalStyle;
