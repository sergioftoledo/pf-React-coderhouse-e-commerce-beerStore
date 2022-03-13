import { HashLink } from 'react-router-hash-link'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const onAdd = cantidad => {
    console.log(cantidad)
  }
const ItemDetail = ({producto}) => {
  return (
  <div className='fondo-producto-detalle'>
    <div className='contenedor-categoria-titulo'>
        <h3>categoría: {producto.category}</h3>
    </div>
        <div className='contenedor-detalle'>
            <div className='contenedor-producto-img'>
                <img className='producto-img' src={producto.pictureURL} alt="" />
            </div>
            <div className="producto-info-detalle">
                <div className="producto-titulo">
                    {producto.title}
                </div>
                <div className="producto-descripcion">
                    {producto.description}
                </div>
                <div className="producto-stock">
                    <span>stock disponible: </span>
                    <p>{producto.stock}</p>
                </div>
                <div>
                    <span className="producto-precio">precio: </span>
                    <span className="precio-final">${producto.price}</span>
                </div>
                {producto.stock > 0 ?
                <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />
                :
                <div>
                    <div>
                        <button className='sin-stock'> no disponible</button>
                    </div>
                    <HashLink to='/#home' className='contenedor-regresar-menu'>
                        <button className='regresar-menu'> seguir comprando</button>
                    </HashLink>
                </div>
                }
            </div>
        </div>
    </div>
    
  )
}

export default ItemDetail