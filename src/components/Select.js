import styled from 'styled-components';

export default styled.select`
  width: 100%;
  height: 52px;
  background: #fff;
  border-radius: 4px;
  border: 2px solid #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 0 16px;
  outline: none;
  font-size: 16px;
  transition: border-color 0.2s ease-in;

  &::placeholder {
    color: #BCBCBC;
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

  & + & {
    margin-top: 16px;
  }
`;
