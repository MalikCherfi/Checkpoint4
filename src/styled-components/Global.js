import styled from 'styled-components';

const Global = styled.div`
    display: ${(props) => props.display || "flex"};
    flex-direction: ${(props) => props.flexDirection || "column"};
    width: ${(props) => props.width || "90%" };
    margin: ${(props) => props.margin || "auto"};
    font-family: ${(props) => props.fontFamily || "Trebuchet MS"};
    text-align: ${(props) => props.textAlign || "justify"};

    a{
        text-decoration: ${(props) => props.textDecoration || "none"};
    }
`;

export default Global;