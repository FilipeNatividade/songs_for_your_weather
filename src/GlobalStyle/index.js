import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html{
        color: #FFE3F0;
    }
    button, input{
        border: none;
        outline: none;
    }
    button{
        cursor: pointer;
    }
    .App{
        align-items: center;
        background-image: linear-gradient(#e61d75, #fabfd9);
        display: flex;
        flex-direction:column ;
        justify-content: center;
        min-height: 100vh;
        padding: 25px;
        width: 100%;
    }
`;
