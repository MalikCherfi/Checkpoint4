import styled from 'styled-components';

const Global = styled.div`
    margin: ${(props) => props.margin || "auto"};
    padding: ${(props) => props.padding || "0"};
    box-sizing: ${(props) => props.boxSizing || "border-box" };
    overflow-x: ${(props) => props.overflowX || "hidden"};
    background: ${(props) => props.backgound || "white"};
    width: ${(props) => props.width || "100%" };

    a{
        text-decoration: ${(props) => props.textDecoration || "none"};
    }
`;

export default Global;