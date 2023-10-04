import styled from 'styled-components'

export const Container = styled.div`
  background: #efefef;
  min-height: calc(100vh - 72px);
`

export const ProductImage = styled.img`
  width: 100%;
`

export const CategoriesMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 20px;
`

export const CategoryButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  border-bottom: ${(props) => props.isActive && '2px solid #9758A6'};
  color: ${(props) => (props.isActive ? '#9758A6' : '#9a9a9a')};
  font-size: 17px;
  line-height: 20px;
  font-weight: 400;
  padding-bottom: 5px;
  transition: 0.3s ease-in-out;
`

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  padding: 40px;
  justify-items: center;
  margin-top: 20px;
`
