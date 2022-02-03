import { createGlobalStyle } from "styled-components";
import FontName400 from "../public/fonts/Rowdies-Light.ttf";

createGlobalStyle`
    @font-face {
        font-family: 'Font Name';
        src: local('Font Name'), local('FontName'),
        url(${FontName400}) format('ttf'),
        font-weight: 300;
        font-style: normal;
    }
`;

export default createGlobalStyle;
