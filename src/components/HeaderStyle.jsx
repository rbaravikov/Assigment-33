import styled from "styled-components";

export const HeaderStyle = styled.header`
background: #eee;
display: flex;
flex-direction: column;
align-items: center;
justify-content: start;
gap: 50px;
padding-top: 100px;
height: 100vh;
position: absolute;
width: 100vw;

@media (max-width: 768px) {
        padding-top: 200px;
    }

`
export const ContainerStyle = styled.div`
    
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 20px;
    max-width: 100vw;

    div{
        background: white;
        padding: 25px;
        border-radius: 4px;
        max-width: 300px;
        line-height: 35px;
        transition: .3s;
     
        &:hover {
            transform: scale(1.02);
            color: ${(props) => (props.color ? props.color : "red")};
    }
    }

    h2 {
        padding: 20px 0;
    }

    svg {
        color: #2188CE;
    }

    @media (max-width: 768px) {
        div {max-width: 95%;}
    }

`