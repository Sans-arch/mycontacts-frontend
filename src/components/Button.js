import styled from 'styled-components';

export default styled.button`
  height: 52px;
  border: none;
  padding: 0 16px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.primary.main};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  transition: background 0.2s ease-in;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  &[disabled] {
    background: #CCCCCC;
    cursor: default;
  }
`;
