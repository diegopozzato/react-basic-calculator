import styled from "styled-components";

export const Section= styled.div`
    margin-top: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
/* box-shadow: ${props => (props.theme.val === true) ? "-1px 9px 36px 11px rgba(0,0,0,0.54)" : "-1px 9px 36px 11px rgba(216, 216, 216, 0.228)"}; */
/* border-radius: 20px;  */
export const Container = styled.div`
    width: fit-content;
    height: fit-content;
    background-color: ${props => (props.theme.val === true) ? "#141414" : "#ECF2FF"};
    transition: 0.3s;
    padding: 6px 13px 13px 13px;
    border-radius: 13.5px;
    max-width: 300px;
    box-shadow: ${props => (props.theme.val === true) ? "-1px 20px 35px 11px rgba(0, 0, 0, 0.523)" : "-1px 9px 36px 1px rgba(216, 216, 216, 0.483)"};
`;

export const ButtonContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 60px);
    grid-template-rows: repeat(5, 60px);
`;

export const Button = styled.button`
    margin: 3px;
    border: none;
    border-radius: 20px;
    font-size: 20px;
    cursor: pointer;

    &.Button{
        color: ${props => (props.theme.val === true) ? "#ECF2FF" : "#141414"};
        background-color: ${props => (props.theme.val === true) ? "#3b3b3b" : "#00000011"};
        transition: 0.1s;  
    }

    &.Button:hover{
        background-color: ${props => (props.theme.val === true) ? "#414141" : "#00000017"};
        transition: 0.1s;  
    }

    &.topFunctions{
        background-color: ${props => (props.theme.val === true) ? "rgb(123, 123, 123)" : "#00000035"};
        transition: 0.1s;  
    }

    &.topFunctions:hover{
        background-color: ${props => (props.theme.val === true) ? "rgb(129, 129, 129)" : "#00000040"};
        transition: 0.1s; 
    }

    &.logicaOperators{
        background-color: ${props => (props.theme.val === true) ? "rgb(234, 160, 0)" : "#ffb30069"};
    }

    &.logicaOperators:hover{
        background-color: ${props => (props.theme.val === true) ? "rgb(242, 169, 12)" : "#ffb30080"};
        transition: 0.1s; 
    }

    &#buttonZero{
        grid-column: span 2;
    }

    &#removeButton{
        background-color: ${props => (props.theme.val === true) ? "#118098" : "#0044ff2c"};
        transition: 0.1s; 
    }

    &#removeButton:hover{
        background-color: ${props => (props.theme.val === true) ? "#1288a2" : "#0044ff37"};
        transition: 0.1s; 
    }

`;

export const SwitchThemeButton = styled.button`
    font-weight: bolder;
    color: ${props => (props.theme.val === true) ? "#ECF2FF" : "#111010"};
    background-color: ${props => (props.theme.val === true) ? "#141414" : "#ECF2FF"};
    border: ${props => (props.theme.val === true) ? "2px solid #00A86B" : "2px solid #141414"};
    margin: 10px 0px 0px 6px; /* top right bottom left */
    padding: 5px;
    border-radius: 10px;
    transition: 0.5s;
    cursor: pointer;
    
    &:hover{
        background-color: ${props => (props.theme.val === true) ? "#05b373" : "#141414e4"};
        color: ${props => (props.theme.val === true) ? "#141414" : "#ECF2FF"};
        transition: 0.3s;
    }
`;

/* margin-left: 83px; */
export const Sign = styled.h1`
        color: ${props => (props.theme.val === true) ? "#03da8b" : "#000000"};
        font-size: 15px;
        transition: 0.3s;
        margin: 0;
        display: inline;
`;

export const TransitionBox = styled.div`
  transform:
    perspective(850px)
    translate3d(0px, 0px, -200px)
    rotateX(27deg)
    scale(0.9, 0.9);
  border-radius: 20px;
  border: ${props => (props.theme.val === true) ? "5px solid #e6e6e6" : "5px solid #7c7c7c"};

  transition: 0.4s ease-in-out transform;
  /* transition-delay:0.5s; */ 

  &:hover {
    transform: translate3d(0px, 0px, -250px);
    /* transition-delay:0s; */
  }
`;