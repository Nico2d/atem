import styled from "styled-components"

export const Button: React.FC <{text: string}> = ({text}) => {
    return(
        <StyledButtoon>{text}</StyledButtoon>
    )
}

const StyledButtoon = styled.button`
    color: white;
    background-color: #1378FF;
    padding: 1rem 4rem;
    border: none;
    border-radius: 2rem;
    cursor: pointer;
`