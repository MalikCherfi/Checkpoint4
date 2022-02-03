import { createGlobalStyle } from "styled-components";
import FontName400 from "./Rowdies-Light.ttf";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Rowdies-Light';
        src: local('Rowdies-Light'), local('Rowdies-Light'),
        url(${FontName400}) format('ttf'),
        font-weight: 300;
        font-style: normal;
    }
`;

export default GlobalStyle;