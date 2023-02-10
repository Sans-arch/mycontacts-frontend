import styled from 'styled-components';

// Overlay vai ser o fundo "escurinho" de quando abrimos uma modal
export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  // Se eu tiver numa tela menor < que 450px, ele vai ocupar 100% da tela (width: 100%), agora se eu tiver numa tela que tiver pelo menos 450px ou mais
  // ele irá ocupar 450px fixos (width: 450px).
  width: 100%;
  max-width: 450px;
  background: #fff;
  border-radius: 4px;
  padding: 24px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  h1 {
    font-size: 22px;
  }

  p {
    margin-top: 8px;
  }
`;

export const Footer = styled.footer`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .cancel-button {
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.gray[200]};
    margin-right: 8px;
    font-size: 16px;
  }
`;
