import styled from 'styled-components'

import BacgroundImage from '../../assets/background.svg'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('${BacgroundImage}');
  display: flex;
  align-items: center;
  justify-content: center;
`
export const RegisterImage = styled.img`
  height: 70%;
`
export const ContainerItems = styled.div`
  border-radius: 0 10px 10px 0;
  background: #373737;
  padding: 25px 75px;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    color: #fff;
    font-size: 24px;
    font-weight: 500;
    text-align: center;
    margin-top: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
  }
`
export const Label = styled.label`
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  margin-top: ${(props) => (props.error ? '12px' : '28px')};
  margin-bottom: 5px;
`
export const Input = styled.input`
  width: 391.416px;
  height: 38.319px;
  border-radius: 5px;
  background: #fff;
  box-shadow: 3px 3px 10px 0px rgba(74, 144, 226, 0.19);
  border: ${(props) => (props.error ? '2px solid #cc1717' : 'none')};
  padding-left: 10px;
`
export const SignInLink = styled.p`
  color: #fff;
  font-size: 14px;
  font-weight: 300;

  a {
    text-decoration: underline;
    cursor: pointer;
  }
`
