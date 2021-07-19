import styled from 'styled-components';

export const Container = styled.main`
  height: 100vh;
  display: grid;
  place-items: center;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 20px 10px 20px;
  border-radius: 8px;
  color: var(--color-primary-100);
  font-size: 14px;
  background-color: var(--color-primary-700);
  outline: 0;
  border: 0;
  max-width: 240px;
  border-end-end-radius: 0;
  border-start-end-radius: 0;
  height: calc(40px - (10px * 2));

  ::placeholder {
    color: var(--color-primary-300);
  }
`;

export const SwapButton = styled.button`
  border-radius: 8px;
  border-start-start-radius: 0;
  border-end-start-radius: 0;
  background-color: var(--color-primary-700);
`;
