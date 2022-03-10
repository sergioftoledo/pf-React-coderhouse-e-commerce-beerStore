import { useEffect, useState } from 'react'
import { getProduct } from '../helpers/getProducts'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
//! Llamada a la api
useEffect(() => {
  getProduct
  .then(resp => setProducto(resp.find(producto => producto.id === 7)))
  .catch(err => err)
  .finally( () => setLoading(false))
}, [])
console.log(producto)

  return (
    <>
        <div className="contenedor-items"></div>
        <div className="contenedor-cards">
        { loading ? <div className='spinner'></div>
        :
        <ItemDetail producto={ producto }/>
        }
        </div>
    </>
  )
}

export default ItemDetailContainer