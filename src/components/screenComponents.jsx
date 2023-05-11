import styled from "styled-components";

export const Value = styled.h1` 
    font-size: 35px;
    padding-right: 5px;
    color: ${props => (props.theme.val === true) ? "#ffffff" : "#000000"};
    transition: 0.3s;
    margin: 0;
    overflow: scroll;
    white-space: nowrap;
    /* Hide scrollbar for WebKit-based browsers (such as Chrome, Safari, and Opera)*/
    &::-webkit-scrollbar {
        display: none;
    }
    /* Hide scrollbar for Firefox */
    &::-moz-scrollbar {
        display: none;
    }
    /* Hide scrollbar for Internet Explorer and Microsoft Edge (before EdgeHTML 18) */
    &::-ms-scrollbar {
        display: none;
    }
    /* Hide scrollbar for Opera */
    &::-o-scrollbar {
        display: none;
    }
`;

export const ValueContaier = styled.div`
    padding: 0;
    margin: 0;
    text-align: right;
    margin: 15px 5px 15px;  /* top right bottom left */
    background-color: ${props => (props.theme.val === true) ? "#1a1a1abe" : "#ffffffc4"};
    transition: 0.3s;
    border-radius: 10px;
`;

export const Preview = styled.h1`
    font-size: 15px;
    padding-right: 5px;
    color: ${props => (props.theme.val === true) ? "#ffffff" : "#000000"};
    transition: 0.3s;
    margin: 0;
    overflow: scroll;
    white-space: nowrap;
    &::-webkit-scrollbar {
        display: none;
    }
    &::-moz-scrollbar {
        display: none;
    }
    &::-ms-scrollbar {
        display: none;
    }
    &::-o-scrollbar {
        display: none;
    }
`;

export const PreviewContaier = styled.div`
    padding: 0;
    margin: 0;
    text-align: right;
    margin: 0px 5px 15px;  /* top right bottom left */
    background-color: ${props => (props.theme.val === true) ? "#1a1a1abe" : "#ffffffc4"};
    transition: 0.3s;
    border-radius: 10px;
`;

export const Section = styled.div`
    font-family: Trebuchet MS;
`;