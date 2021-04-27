import styled from 'styled-components';

export const BodyCard = styled.div`
  border-radius: var(--borderRadius);
  background: white;
  padding-top: 2rem;
  width: 100%;
  height: fit-content;
  box-shadow: var(--boxShadow);
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: center;
  justify-content: space-evenly;
  > img {
    border-radius: 50%;
    width: 4.4rem;
    height: 4.4rem;
    object-fit: cover;
    object-position: center;
  }
  > p {
    text-align: center;
    color: var(--gray);
  }
  h2 {
    color: var(--textGreen);
    padding: 1rem;
    text-align: center;
  }

  > aside {
    display: flex;
    gap: 1rem;
    > img {
      width: 2rem;
    }
  }
  > a {
    font-size: 1rem;
    text-align: center;
    width: 100%;
    align-self: flex-end;
    padding: 0.6rem;
    border-top: solid 1px var(--borderDivision);
    font-weight: 700;
    border-radius: 0 0 0.8rem 0.8rem;
  }
  strong {
    padding: 0 0.2rem 1.4rem;
    a {
      font-weight: 500;
    }
  }
`;
