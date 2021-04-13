import styled from 'styled-components';

export const CarList = styled.ul`
  width: 100%;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin-bottom: 30px;

  li {
    display: flex;
    flex-direction: column;
  }

  li header {
    width: 100%;
    height: 120px;
    background-size: cover;
    align-items: center;
    border-radius: 4px;
  }

  li strong {
    margin-top: 10px;
    font-size: 24px;
    color: #444;
  }

  li span {
    font-size: 15px;
    color: #999;
  }
`;
