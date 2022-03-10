import React, { useEffect, useState } from 'react'
import { getProduct } from '../helpers/getProducts'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from './ItemList'
import './ItemListContainer.css'

const ItemListContainer = () => {
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
    .catch( err =>console.log(err))
    .finally(() => setLoading(false))
  }, [])

  //! Asincronia con async (promesa)
  // try {
    // const consulta = async () => {
    //   let respuestaPoke = await fetch('/DATA.json')
    //   let respuestaPokeParseada = await respuestaPoke.json()
    //   console.log(respuestaPokeParseada.results)
    // }
  // } catch (error) {
  //   console.log(error)
  // }

   //! Promesa
  // useEffect(() => {
  //   let url = '/DATA.json'
  //   fetch(url)
  //   .then(resp => resp.json())
  //   .catch(err => console.log(err))
  //   .then(resp => console.log(resp.results))
  //   //* consulta ()
  // }, [])
  

  return (
    <>
        <div className="contenedor-items"></div>
        <ItemCount stock={15} initial={1} onAdd={onAdd} />
        <div className="contenedor-cards">
        { loading ? <div className='spinner'></div>
        :
        <ItemList productos= { productos }/>
        }
        </div>
    </>
  )
}

export default ItemListContainer