import styled from "styled-components/native";
import theme from '../styles/theme';
//estruturscao do container
export const Container = styled.View`
    flex: 1;
    flex-direction: ${(props) => props.row ? 'row' : 'column'};
    background: ${(props) => props.color ? theme.colors[props.color] : 'transparent'};
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

export const Button = styled.TouchableOpacity`
    width: 100%;
    padding:${(props) => props.compact ? 5 : 15}px;
    opacity: ${(props) => props.disabled ? 0.5 : 1};
    background: ${(props) => props.type ? theme.colors[props.type] : theme.colors.primary };
    border-radius: 86px;
`;

export const ButtonText = styled.Text`
    color: ${(props) => props.color ? theme.colors[props.color] : '#000'};
    font-size: 16px;
    text-align: center;
`;