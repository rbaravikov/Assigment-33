import styled from "styled-components";

export const NavStyle = styled.nav`

height: 40px;
display: flex;
background: white;
align-items: center;
justify-content: space-between;
padding: 5px 15px;
box-shadow: 0px 3px 3px lightgrey;
position: fixed;
width: 100vw;
z-index: 100;

  
a {
    text-decoration: none;
    color: #394C77;
    transition: .3s;
    margin: 5px;
    &:hover {
      color: #3E95D7;
      cursor: pointer;
}}
`

export const ButtonStyle = styled.button`

background: #2188CE;
border: none;
color: white;
padding: 5px 10px;
border-radius: 4px;
max-width: fit-content;
align-self: center;
`