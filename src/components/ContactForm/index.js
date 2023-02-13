import { useState } from 'react';
import PropTypes from 'prop-types';

import { Form, ButtonContainer } from './styles';

import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

/*
  Formulários dentro do ReactJS:
  Adicionando event listeners.
  1° forma) Controlled components:
    São os campos do formulário onde a responsabilidade de controlar o valor desse componente
    no JS e na DOM são do React, então o React é o responsável por gerenciar os campos do form.
    React responsável por gerenciar o dado e a renderização.

  2° forma) Uncontrolled components:
    Responsabilidade de fazer gerenciamento não é mais do React, ele deixa com a DOM, o React
    não vai ter acesso aos componentes, não vai ter acesso ao que vai ser renderizado.
*/
export default function ContactForm({ buttonLabel }) {
  // Atualiza estado e remonta o componente inteiro (re-renderiza), a cada alteração no input vai
  // renderizar todo o compontente de novo!
  const [name, setName] = useState('');

  return (
    <Form>
      <FormGroup>
        <Input
          value={name}
          placeholder="Nome"
          onChange={(event) => setName(event.target.value)}
        />
      </FormGroup>

      <FormGroup
        error="O formato do e-mail é inválido."
      >
        <Input placeholder="E-mail" error />
      </FormGroup>

      <FormGroup>
        <Input placeholder="Telefone" />
      </FormGroup>

      <FormGroup>
        <Select>
          <option value="instagram">Instagram</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit">
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
