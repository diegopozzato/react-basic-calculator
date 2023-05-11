import React, {useState, useEffect} from 'react'
import {ThemeProvider} from "styled-components";
import {Section, Container, ButtonContainer, Button, Sign, TransitionBox, SwitchThemeButton} from "./calculatorComponents";
import Screen from './screen';
import * as math from "mathjs"

function Calculator() {

/* Switch Theme Logic */
const [theme, setTheme] = useState({val: true});
    /* I defined theme as an object beacuse ThemeProvider takes an object as prop */
const switchTheme = () => {
  setTheme(prevState => ({val: !prevState.val}));
}

useEffect(() => {
  (!theme.val) ? document.body.style.backgroundColor = "rgb(30, 31, 32)" : document.body.style.backgroundColor = "rgb(154, 171, 185)";
},[theme]);

/* Calculator Logic */
  const [result, setResult] = useState("");
  const [operation, setOperation] = useState("");
  const [displayOperation, setDisplayOperation] = useState("");

  const addToOperation = (e) => {
    setOperation((operation) => [...operation, e.target.value]);
    if(e.target.value === "*"){
      setDisplayOperation((operation) => [...operation, "x"]);
    }else{
      setDisplayOperation((operation) => [...operation, e.target.value]);
    }
  }

  const removeFromOperation = (e) => {
    if(operation.length === 0){
      return;
    }else{
      setOperation((operation) => [...operation].slice(0, -1));
      setDisplayOperation((operation) => [...operation].slice(0, -1));
    }
  }

  const clearScreen = () => {
    setOperation("");
    setResult("");
    setDisplayOperation("");
  }

  const calculateResult = () => {

    /* checkParentheses is used to check if there are enough closing parentheses*/
    let checkParentheses = operation.toString();
    checkParentheses = (checkParentheses.split("(").length - 1) - (checkParentheses.split(")").length - 1);
    
    try {
      if(operation.length === 0 ){
        return;
      }else{
        if(checkParentheses === 0){
          setResult(math.evaluate(operation.join("")));
        }else{
            if(checkParentheses < 0 ){
              /* checkParentheses is used to check (and in case add) if there are enough opening parentheses*/
              checkParentheses = operation.toString();
              checkParentheses = (checkParentheses.split(")").length - 1) - (checkParentheses.split("(").length - 1);
              /* adding the opening parentheses */
              for(let i=0 ; i < checkParentheses ; i++){
                setOperation((operation) => ["(", ...operation]);
                setDisplayOperation((operation) => ["(", ...operation]);
              } 
            }else{
              /* adding the closing parentheses */
              for(let i=0 ; i < checkParentheses ; i++){
                setOperation((operation) => [...operation, ")"]);
                setDisplayOperation((operation) => [...operation, ")"]);
              } 
            }
        }
      }
    } catch (error) {
      setResult("Syntax Error");
    }


  }

  return (
    
    <Section>

        <ThemeProvider theme={theme}> 
        
            <TransitionBox> 

                <Container>

                    <SwitchThemeButton theme={theme} onClick={() => switchTheme(theme)}>Switch</SwitchThemeButton>

                    <a href='https://github.com/diegopozzato/react-basic-calculator'><Sign>Github Repository</Sign></a>

                    <Screen theme={theme} result={result.toString()} displayOperation={displayOperation}/>

                    <ButtonContainer className='ButtonContainer'>

                        <Button className='Button topFunctions' id='removeButton' onClick={clearScreen}>AC</Button>

                        <Button className='Button topFunctions' id='removeButton' onClick={removeFromOperation}>DEL</Button>
                        <Button className='Button topFunctions' onClick={addToOperation} value={'sqrt('}>sqrt</Button>
                        <Button className='Button topFunctions' onClick={addToOperation} value={'^'}>pow</Button>

                        <Button className='Button logicaOperators' onClick={addToOperation} value={'/'}>/</Button>

                        <Button className='Button' onClick={addToOperation} value={7}>7</Button>
                        <Button className='Button' onClick={addToOperation} value={8}>8</Button>
                        <Button className='Button' onClick={addToOperation} value={9}>9</Button>

                        <Button className='Button topFunctions' onClick={addToOperation} value={'('}>(</Button>
                        <Button className='Button logicaOperators' onClick={addToOperation} value={'*'}>x</Button>

                        <Button className='Button' onClick={addToOperation} value={4}>4</Button>
                        <Button className='Button' onClick={addToOperation} value={5}>5</Button>
                        <Button className='Button' onClick={addToOperation} value={6}>6</Button>

                        <Button className='Button topFunctions' onClick={addToOperation} value={')'}>)</Button>
                        <Button className='Button logicaOperators' onClick={addToOperation} value={'-'}>-</Button>

                        <Button className='Button' onClick={addToOperation} value={1}>1</Button>
                        <Button className='Button' onClick={addToOperation} value={2}>2</Button>
                        <Button className='Button' onClick={addToOperation} value={3}>3</Button>

                        <Button className='Button topFunctions' onClick={addToOperation} value={'%'}>%</Button>
                        <Button className='Button logicaOperators' onClick={addToOperation} value={'+'}>+</Button>

                        <Button className='Button' id='buttonZero' onClick={addToOperation} value={0}>0</Button>

                        <Button className='Button' onClick={addToOperation} value={'.'}>,</Button>
                        <Button className='Button topFunctions' onClick={addToOperation} value={'log('}>log</Button>
                        <Button className='Button logicaOperators' onClick={calculateResult}>=</Button>

                    </ButtonContainer>

                </Container>

            </TransitionBox>
        </ThemeProvider> 

    </Section>
  )
}

export default Calculator

/* rfce */