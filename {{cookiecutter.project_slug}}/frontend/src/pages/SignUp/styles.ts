import styled from 'styled-components'
import background from '../../assets/image/background.svg'

export const BodySignUp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #d9d9d9;
  background-image: url(${background});
  background-position: center;
  background-attachment: fixed;
  background-size: 50%;
  background-repeat: repeat-x;
  form.area-central {
    background: var(--background);
    padding: 2.4rem;
    border-radius: 0.8rem;
    box-shadow: var(--boxShadow);
    img {
      width: 40%;
    }
    h1 {
      margin-top: 1.4rem;
    }
    .primeira-etapa {
      display: grid;

      > img {
        grid-column: 2;
        width: calc(100% - 1.8rem);
      }

      grid-template-columns: 0.6fr 0.4fr;
      align-items: center;
      grid-gap: 1.8rem;
      section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        div + div {
          margin-left: 0.8rem;
        }
      }
      .area-form {
        grid-column: 1;
        grid-row: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 0.6rem;
        .google-button,
        .facebook-button {
          display: flex;
          align-items: center;
          position: relative;
          cursor: pointer;
          font: 400 0.9rem Raleway;
          height: 2.2rem;
          width: 15rem;
          border-radius: 8rem;
          padding: 0.4rem;

          > svg {
            color: #3b5998;
            padding: 0 0.4rem;
            border-right: 1px solid var(--textGreen);
            width: 2rem;
            height: 1.2rem;
            margin-right: 0.4rem;
          }
        }
        .google-button {
          border: 1px solid var(--textGreen);
          background-color: transparent;
          margin: 0.5rem 0 0.5rem 0.2rem;
        }
        .facebook-button {
          border: 1px solid var(--textGreen);
          background-color: var(--blue);
          margin: 0.5rem 0.2rem 0.5rem 0;
        }
        section {
          display: flex;
          align-items: center;
          > a {
            font: 400 1.2rem Raleway;
            text-decoration: none;
            color: var(--yellow);
          }
          & + section {
            margin-top: 0.6rem;
          }
        }
        p {
          margin: 1rem 0;
          font: 400 1rem Raleway;
          > a {
            text-decoration: underline;
          }
        }
      }
    }
    .segunda-etapa {
      display: flex;
      gap: 2rem;
      flex-direction: column;
      justify-content: space-between;
      > section {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        > div + div {
          margin-left: 0.8rem;
          width: auto;
        }
      }
    }
  }
`
