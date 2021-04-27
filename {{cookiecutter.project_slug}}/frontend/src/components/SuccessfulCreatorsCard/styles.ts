import styled from 'styled-components'
import { Link } from 'react-router-dom'
export const ProfileLink = styled(Link)`
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  justify-content: center;
  gap: 0.6rem;
  > img {
    border-radius: 50%;
    border: solid 1px var(--borderDivision);
    width: 2.4rem;
    height: 2.4rem;
    object-fit: cover;
    object-position: center;
  }
  > aside {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    > h2 {
      font-size: 1rem;
    }
    > p {
      text-align: center;
      color: var(--gray);
      font-size: 0.8rem;
    }
  }
`
export const BodyCard = styled.div`
  border-radius: var(--borderRadius);
  background: white;
  padding-top: 0.8rem;
  width: 100%;
  height: fit-content;
  box-shadow: var(--boxShadow);
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: space-evenly;
  > h2 {
    font-size: 1rem;

    align-self: flex-start;
    margin-left: 1rem;
  }
  > button {
    width: 100%;
    border: 0;
    background: white;
    align-self: flex-end;
    padding: 0.6rem 0.8rem;
    border-top: solid 1px var(--borderDivision);
    font-weight: 700;
    border-radius: 0 0 0.8rem 0.8rem;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    img {
      width: 1.8rem;
    }
  }
`
