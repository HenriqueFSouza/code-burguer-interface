import { yupResolver } from '@hookform/resolvers/yup'
import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'
import ReactSelect from 'react-select'
import { toast } from 'react-toastify'
import * as yup from 'yup'

import Upload from '../../../assets/upload.svg'
import { ErrorMessage } from '../../../components'
import api from '../../../services/api'
import {
  Container,
  ContainerInput,
  Label,
  Input,
  StyledButton,
  LabelUpload
} from './styles'

function EditProduct() {
  const [categories, setCategories] = useState([])
  const [fileName, setFileName] = useState('')
  const navigate = useNavigate()
  const { state: product } = useLocation()

  const schema = yup.object().shape({
    name: yup.string(),
    price: yup.string(),
    category: yup.object(),
    offer: yup.boolean()
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

  console.log(product)

  const onSubmit = async (data) => {
    const productDataFormData = new FormData()

    productDataFormData.append('name', data.name)
    productDataFormData.append('price', data.price)
    productDataFormData.append('category_id', data.category.id)
    productDataFormData.append('file', data.file[0])
    productDataFormData.append('offer', data.offer)

    await toast.promise(
      api.put(`products/${product.id}`, productDataFormData),
      {
        pending: 'Editando novo produto...',
        success: 'Produto editado com sucesso!',
        error: 'Erro ao editar produto!'
      }
    )
    setTimeout(() => {
      navigate('/listar-produtos')
    }, 2000)
  }

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Nome</Label>
          <Input
            type="text"
            {...register('name')}
            defaultValue={product.name}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>

        <div>
          <Label>Preço</Label>
          <Input
            type="number"
            {...register('price')}
            defaultValue={product.price}
          />
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
            defaultValue={product.category}
            render={({ field }) => {
              return (
                <ReactSelect
                  {...field}
                  placeholder="Categorias"
                  options={categories}
                  getOptionLabel={(cat) => cat.name}
                  defaultValue={product.category}
                />
              )
            }}
          />
          <ErrorMessage>{errors.category?.message}</ErrorMessage>
        </div>
        <ContainerInput>
          <input
            type="checkbox"
            defaultChecked={product.offer}
            {...register('offer')}
          />
          <Label>Produto em oferta ?</Label>
        </ContainerInput>

        <StyledButton type="submit">Editar produto</StyledButton>
      </form>
    </Container>
  )
}

export default EditProduct
