import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const onAdd = cantidad => {
    console.log(cantidad)
  }
const ItemDetail = ({producto}) => {
  return (
      <div className='fondo-producto-detalle'>
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
                    <span>stock disponible: </span><p>{producto.stock}</p>
                </div>
                <div className="producto-precio">
                    ${producto.price}
                </div>
                <ItemCount stock={15} initial={1} onAdd={onAdd} />
            </div>
        </div>        
    </div>
    
  )
}

export default ItemDetail