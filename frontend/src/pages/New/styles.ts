import styled from 'styled-components';

export const ThumbnailStyle = styled.label`
  margin-bottom: 20px;
  border: 1px dashed #ddd;
  background-size: cover;
  cursor: pointer;
  height: 160px;

  display: flex;
  justify-content: center;
  align-items: center;

  input {
    display: none;
  }
`;
