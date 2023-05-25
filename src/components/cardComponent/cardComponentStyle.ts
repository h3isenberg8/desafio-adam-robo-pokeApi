import styled from 'styled-components'


export const PokemonCardContainer = styled.div`

background-color: pink;
width: 25%;
padding: 15px;
height: fit-content;
background: linear-gradient(to bottom, white, #b5e8e2);
border-radius: 5%;
position: sticky;
top: 30px;

.cardContainer {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.cardContainer > img {
    width: 50%;
}

.cardContainer > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
}

`