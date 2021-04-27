import styled, { createGlobalStyle } from 'styled-components'
import backgroud from '../image/background.svg'
export const GlobalStyle = createGlobalStyle`
:root {
    /* font-size: 60%; */
    --yellow: #ebae3c;
    --yellow-dark: #fea81b;
    --green: #99b876;
    --textGreen: #072f3f;
    --red: #d8252c;
    --backgroundElevation: #fafafa;
    --gray: #999999;
    --background: #f1f1f1ff;
    --borderDivision: #f0eeee;
    --borderRadius: 0.6rem;
    --container: min(1156px, 90vw);
    --boxShadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
    
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}

.container {
    width: var(--container);
}

#root {
    font-family: Raleway !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color:var(--background);
    /* background-image:url(${backgroud});
    background-position:center;
    background-attachment:fixed;
    background-size:100%;
    background-repeat:no-repeat; */
    color: var(--textGreen);
    
}

@media (min-width: 700px) {
    /* :root {
        font-size: 62.5%;
    } */
}

fieldset {
    border: 0;
}

button {
    cursor: pointer;
}
a{
    color: var(--textGreen);
    text-decoration: none;
}
input,
button,
select,
textarea {
    outline: none;
}
`
