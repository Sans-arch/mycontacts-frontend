import styled from 'styled-components';

export const Container = styled.div`
  // Se o dispositivo tiver menos de 500px, o Container ocupará 100% do espaço.
  width: 100%;

  // Se a tela tiver mais de 500px, quero que o Container ocupe apenas 500px
  max-width: 500px;
  margin: 0 auto;
`;
