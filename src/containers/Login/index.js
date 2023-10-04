import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as yup from 'yup'

import LoginImg from '../../assets/login-image.svg'
import Logo from '../../assets/logo.svg'
import { Button } from '../../components'
import { ErrorMessage } from '../../components/ErrorMessage'
import { useUser } from '../../hooks/UserContext'
import api from '../../services/api'
import {
  Container,
  ContainerItems,
  LoginImage,
  Label,
  Input,
  SignInLink
} from './styles'

export function Login() {
  const { putUserData } = useUser()
  const navigate = useNavigate()

  const schema = yup.object().shape({
    email: yup
      .string()
      .email('Digite um email válido')
      .required('O email é obrigatório'),
    password: yup
      .string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve ter no mínimo 6 digitos')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (clientData) => {
    const { data } = await toast.promise(api.post('sessions', clientData), {
      pending: 'Verificando seus dados...',
      success: 'Seja bem vindo(a)!',
      error: 'Verifique seu email e senha!'
    })

    putUserData(data)
    setTimeout(() => {
      if (data.admin) {
        navigate('/pedidos')
      } else {
        navigate('/')
      }
    }, 1500)
  }

  return (
    <Container>
      <LoginImage src={LoginImg} />
      <ContainerItems>
        <img src={Logo} alt="logo-code-burguer" />
        <h1>Login</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input
            type="email"
            {...register('email')}
            error={errors.email?.message}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label>Senha</Label>
          <Input
            type="password"
            {...register('password')}
            error={errors.password?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Button type="submit" style={{ marginTop: 75, marginBottom: 25 }}>
            Sign In
          </Button>
        </form>
        <SignInLink>
          Não possui conta ?{' '}
          <Link style={{ color: 'white' }} to="/cadastro">
            Sign Up
          </Link>
        </SignInLink>
      </ContainerItems>
    </Container>
  )
}
