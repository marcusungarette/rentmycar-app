import styled from 'styled-components';

export const Container = styled.div`
  margin: 80px auto;
  max-width: 450px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  background: #fff;
  margin-top: 50px;
  border-radius: 4px;
  padding: 30px;

  > p {
    text-align: center;
    font-size: 22px;
    line-height: 30px;
    margin-bottom: 30px;
  }
  form {
    display: flex;
    flex-direction: column;
  }

  form label {
    font-size: 14px;
    color: #444;
    font-weight: bold;
    margin-bottom: 8px;
  }

  form input {
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 2px;
    height: 45px;
    padding: 0 15px;
    font-size: 16px;
  }

  button {
    border: 0;
    border-radius: 2px;
    width: 100%;
    height: 42px;
    padding: 0 20px;
    font-size: 16px;
    font-weight: bold;
    color: var(--background);
    background: var(--red);
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }
`;
