import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { getProductos, getProductoPorCategoria } from '../../asyncmock'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);

  const { idCategoria } = useParams();


  useEffect(() => {

    const funcionProductos = idCategoria ? getProductoPorCategoria : getProductos;

    funcionProductos(idCategoria)
      .then(res => setProductos(res))
      .catch(error => console.log(error))
  }, [idCategoria])

  return (
    <>
      <h2> {greeting} </h2>
      <ItemList productos={productos} />
    </>
  )
}

export default ItemListContainer