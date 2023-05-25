import styled from "styled-components"

export const DivOfPokemonsCards = styled.div`

display: flex;
flex-direction: row;
position: relative;

ul {
    display: flex;
flex-wrap: wrap;
max-width: 70%;
gap: 50px;
padding: 50px;
}

ul > li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease;
    background: linear-gradient(to bottom, white, #b5e8e2);
    border-radius: 5%;
    padding: 20px;
    max-width: 136px;
    
    
}

ul >li:hover {
    transform: scale(1.4)
}


`