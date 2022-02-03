import styled from "styled-components";

const DivContainer = styled.div`
width: ${(props) =>  props.width || "50%"};
height: ${(props) =>  props.height || "300px"};
display: ${(props) =>  props.display || "flex"};
margin-top: ${(props) =>  props.marginTop || "1rem"};
flex-direction: ${(props) =>  props.flexDirection || "column"};

`

export default DivContainer