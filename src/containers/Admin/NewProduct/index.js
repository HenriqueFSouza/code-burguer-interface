import { yupResolver } from '@hookform/resolvers/yup'
import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import ReactSelect from 'react-select'
import { toast } from 'react-toastify'
import * as yup from 'yup'

import Upload from '../../../assets/upload.svg'
import { ErrorMessage } from '../../../components'
import api from '../../../services/api'
import { Container, Label, Input, StyledButton, LabelUpload } from './styles'

function NewProduct() {
  const [categories, setCategories] = useState([])
  const [fileName, setFileName] = useState('')
  const navigate = useNavigate()

  const schema = yup.object().shape({
    name: yup.string().required('Digite o nome do produto'),
    price: yup.string().required('Digite o preço do produto'),
    category: yup.object().required('Escolha uma categoria'),
    file: yup
      .mixed()
      .test('fileSize', 'O Carregue arquivos de até 2mb', (value) => {
        return value && value[0]?.size <= 2000000
      })
      .test('required', 'Escolha uma imagem', (value) => {
        return value && value.length > 0
      })
  })

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      setCategories(data)
    }
    loadCategories()
  }, [])

  // console.log(fileName)
  const onSubmit = async (data) => {
    const productDataFormData = new FormData()

    productDataFormData.append('name', data.name)
    productDataFormData.append('price', data.price)
    productDataFormData.append('category_id', data.category.id)
    productDataFormData.append('file', data.file[0])

    await toast.promise(api.post('products', productDataFormData), {
      pending: 'Criando novo produto...',
      success: 'Produto criado com sucesso!',
      error: 'Erro ao criar produto!'
    })

    setTimeout(() => {
      navigate('/listar-produtos')
    }, 2000)
  }

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Nome</Label>
          <Input type="text" {...register('name')} />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>

        <div>
          <Label>Preço</Label>
          <Input type="number" {...register('price')} />
          <ErrorMessage>{errors.price?.message}</ErrorMessage>
        </div>

        <div>
          <LabelUpload>
            {fileName || (
              <>
                <img src={Upload} alt="Upload" />
                Carregue a imagem do produto
              </>
            )}
            <input
              type="file"
              id="image-input"
              accept="image/png, image/jpeg"
              onChangeCapture={(value) => {
                setFileName(value.target.files[0]?.name)
              }}
              {...register('file')}
            />
          </LabelUpload>
          <ErrorMessage>{errors.file?.message}</ErrorMessage>
        </div>

        <div>
          <Controller
            name="category"
            control={control}
            render={({ field }) => {
              return (
                <ReactSelect
                  {...field}
                  placeholder="Categorias"
                  options={categories}
                  getOptionLabel={(cat) => cat.name}
                />
              )
            }}
          />
          <ErrorMessage>{errors.category?.message}</ErrorMessage>
        </div>

        <StyledButton type="submit">Adicionar produto</StyledButton>
      </form>
    </Container>
  )
}

export default NewProduct
