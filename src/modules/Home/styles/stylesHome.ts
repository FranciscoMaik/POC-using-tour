import styled from 'styled-components';

export const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  button {
    cursor: pointer;
  }
`;

export const ButtonsContainer = styled.div`
  width: 1024px;
  display: flex;
  justify-content: space-between;

  > button {
    border: none;
    padding: 1rem 1rem;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: bold;
    text-transform: capitalize;
    background: #32cd32;
    color: #000000;
  }
`;

export const FormContainer = styled.div`
  width: 1024px;
  display: flex;
  gap: 0.875rem;

  > input {
    flex: 1;
    padding: 1.125rem;
    background: transparent;
    border-radius: 8px;
    color: #ffffff;
  }

  > button {
    border: none;
    padding: 1rem 1rem;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: bold;
    text-transform: capitalize;
    background: #32cd32;
    color: #000000;
  }
`;
