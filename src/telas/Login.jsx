import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import icon from '../telas/img/icon-login.png';

import './styles/Login.css'

export default function Login() {
  return (
    <div className='Tela-login'>
      <Form>
        <Form.Group>
        <img src={icon} className="img" />
        <br/>
        <p>Fazer Login</p>
          <Form.Control className='input' type="email" placeholder="Email" />
          <br/>
        </Form.Group>
        <Form.Group>
          <Form.Control type="password" placeholder="Senha" />
        </Form.Group>
        <Button  className='btn-login' variant="primary" type="submit">
          Entrar
        </Button>
        <a href='#' className='criar-conta' >Criar sua conta</a>
      </Form>
    </div>
  )
}
