import Button from "../../components/Button";
import Input from "../../components/Input";
import { IFormLogin, defaultValues } from './types'


import { Container, LoginContainer, Column, Spacing, Title } from "./styles";

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().email("Digite um E-mail válido.").required('Este campo é obrigatório.'),
  password: yup.string().min(6, 'No minímo 6 caracteres').required('Este campo é obrigatório.'),
}).required();



const Login = () => {
  const {
    control,
    formState: { errors, isValid }
  } = useForm<IFormLogin>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    reValidateMode: 'onChange', 
    defaultValues
  })




  return (
    <Container>
      <LoginContainer>
        <Column>
          <Title>Login</Title>
          <Spacing />
          <Input
            placeholder="Email"
            name="email"
            control={control}
            errorMessage={errors?.email?.message} />
          <Spacing />
          <Input
            placeholder="Senha"
            name="password"
            control={control}
            errorMessage={errors?.password?.message} />
          <Spacing />
          <Button title="Entrar" isDisable={isValid}/>
        </Column>
      </LoginContainer>
    </Container>
  );
};

export default Login;
