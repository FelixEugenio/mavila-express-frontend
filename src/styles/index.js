import styled from "styled-components/native";

//estruturscao do container
export const Container = styled.View`
    flex: 1;
    flex-direction: ${(props) => props.row ? 'row' : 'column'};
    background-color: #fff;
    align-items: center;
    justify-content: ${(props) => props.justify ? props.justify : 'center'};
    width:100%;
    padding: ${(props) => props.padding ? props.padding : '0px'};
    align-items: ${(props) => props.align ? props.align : 'center'};
    max-width: ${(props) => props.width ? props.width : '100%'};
    max-height: ${(props) => props.height ? props.height + 'px' : 'auto'};
    position: ${(props) => props.absolute ? 'absolute' : 'relative'};
    top: ${(props) => props.top ? props.top : '0px'};
    z-index: ${(props) => props.zIndex ? props.zIndex : '1'};
`;