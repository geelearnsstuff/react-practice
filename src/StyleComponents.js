import React from 'react'
import styled from 'styled-components'

function StyleComponents() {
    const Title = styled.h1`
        font-size: 2.5em;
        text-align: center;
        color: red;
    `
    // Color interpolations-adapting based on its props
    const Button = styled.button`
        background: ${props => props.primary ? "red" : "white"};
        color: ${props => props.primary ? "white" : "red"};

        font-size: 1.5em;
        margin: 1em;
        padding:0.25em 1em;
        border: 2px solid red;
        border-radius: 5px;
        cursor: pointer;    
    `

    const NewButton = styled.button`
        background: pink;
        color: black;
        font-size: 1.5em;
        margin: 1em;
        padding:0.25em 1em;
        border: 2px solid red;
        border-radius: 5px;
        cursor: pointer;    
    `

    const TomatoButton = styled(NewButton)`
        background: yellow;
        color: violet;
        font-size: 1em;
    `


    return (
        <div>
            <Title>I'm learning React</Title>
            <Button>Normal</Button>
            <Button primary>Primary</Button>
            <NewButton>Gee New</NewButton>
            <TomatoButton>Gee Tomato</TomatoButton>

        </div>
    )
}

export default StyleComponents;
