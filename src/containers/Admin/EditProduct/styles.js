import styled from 'styled-components'

import { Button } from '../../../components'

export const Container = styled.div`
  background: #efefef;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    background-color: #565656;
    border-radius: 10px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
`
export const Label = styled.p`
  font-size: 14px;
  color: #fff;
  margin-bottom: 5px;
`
export const Input = styled.input`
  height: 40px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.1);
  border: none;
  width: 100%;
  min-width: 280px;
  padding-left: 8px;
`

export const StyledButton = styled(Button)`
  width: 100%;
  margin-top: 25px;
`

export const LabelUpload = styled.label`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px dashed #fff;
  border-radius: 5px;
  padding: 10px;
  color: #fff;
  gap: 10px;

  input {
    display: none;
  }
`

export const ContainerInput = styled.div`
  display: flex;
  gap: 10px;
  align-items: baseline;

  input {
    width: 15px;
    height: 15px;
    cursor: pointer;
  }
`
