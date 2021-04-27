import styled from 'styled-components';

export const BodyExperiences = styled.section`
  .form--experiencia {
    width: 100%;
  }
  > h2 {
    margin: 1.4rem 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    > button {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      border: 0;
      background: none;
      font: 500 1.2rem Raleway;
      color: var(--green);
      span {
        font: 500 2rem Raleway;
      }
    }
  }
  background: var(--background);
  padding: 2rem 4rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  border-radius: 0.8rem;
  box-shadow: var(--boxShadow);
  .experiencias {
    width: 100%;
    .experiencia-cadastrada {
      border-radius: 0.4rem;
      box-shadow: var(--boxShadow);
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin: 0.8rem 0;
      padding: 0.5rem;
      fieldset {
        margin-left: 1.2rem;
        legend {
          font: 500 1.4rem Raleway;
        }
        font: 400 1.2rem Raleway;

        .textos {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          p + p {
            border-left: solid 2px var(--green);
            margin-left: 3rem;
            padding: 0.8rem 0.3rem 0.8rem 2rem;
            word-break: break-all;
          }
        }
      }
      .icones {
        border-right: 2px solid var(--borderDivision);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 0.4rem;

        gap: 0.6rem;
      }
    }
  }

  .area-registro {
    display: grid;
    width: 100%;
    grid-template-columns: 2fr 1fr 2fr;
    grid-gap: 20px;
    .area-botoes {
      grid-column: 1/-1;
      display: flex;
      justify-content: space-evenly;
      margin: 0.4rem 0;
    }
    form {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      height: 100%;
    }
    > span {
      color: var(--yellow-dark);
    }

    aside {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin: 0;
      div + div {
        margin-left: 0.4rem;
      }
    }
    .bloco-um {
      grid-column: 1/-2;
    }
    .bloco-dois {
      grid-column: -2;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .bloco-tres {
      grid-column: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
    .bloco-quatro {
      grid-column: 2/-1;
    }
    .area-toggle {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      height: 100%;
    }
  }
`;
