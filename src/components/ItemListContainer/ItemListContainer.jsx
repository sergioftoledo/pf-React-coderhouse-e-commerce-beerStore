import React, { useEffect, useState } from 'react'
import { getProduct } from '../helpers/getProducts'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from './ItemList'
import './ItemListContainer.css'

function ItemListContainer() {
const [productos, setProductos] = useState([])
const [loading, setLoading] = useState(true)

  const onAdd = cantidad => {
    console.log(cantidad)
  }
  useEffect(() => {
  
    getProduct.then( res => {
      return res
    })
    .then( (res) => setProductos(res))
    // .catch( err =>console.log(err))
    .finally( () => setLoading(false))
  }, [])

  return (
    <>
        <div className="contenedor-items"></div>
        <ItemCount stock={15} initial={1} onAdd={onAdd} />
        <div className="contenedor-cards">
        { loading ? <div className='spineer'></div>
        :
        <ItemList productos= { productos }/>
        }
        </div>
    </>
  )
}

export default ItemListContainer