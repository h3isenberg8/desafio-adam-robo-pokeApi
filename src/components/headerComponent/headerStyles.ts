import styled from 'styled-components'

export const HeaderStyles = styled.header`

display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
padding: 20px;
background: linear-gradient(to top, white, rgb(251, 202, 60));
max-height: fit-content;

>img {
    width: -webkit-fill-available;
}

.selections {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
}

select {
  outline: none;
  border: none;
  font-size: 1.3rem;
  background-color: transparent;
}


.selections > div {
    display: flex;
    flex-direction: row;
    align-items: center;
}


`