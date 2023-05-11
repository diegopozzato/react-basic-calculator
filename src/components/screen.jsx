import React from 'react'
import {ThemeProvider} from "styled-components";
import {Value, ValueContaier, Preview, PreviewContaier, Section } from "./screenComponents";

function Screen(props) {

  return (
    <>
        <Section>
            <ThemeProvider theme={props.theme}>
                <ValueContaier>
                        <Value>‎{props.result}</Value>
                </ValueContaier>

                <PreviewContaier>
                    <Preview>‎{props.displayOperation}</Preview>
                </PreviewContaier>
            </ThemeProvider>
        </Section>
        
    </>
  )
}

export default Screen