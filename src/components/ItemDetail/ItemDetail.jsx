import './ItemDetail.css'

const ItemDetail = ({producto}) => {
  return (
    <div className='fondo-producto-detalle'>
        <div>
            <div className='contenedor-producto-img'>
                <img src={producto.pictureURL} alt="" />
            </div>
            <div className="producto-info-detalle">
                <div className="producto-titulo">
                    {producto.title}
                </div>
                <div className="producto-precio">
                    {producto.price}
                </div>
                <div className="producto-stock">
                <span>stock deisponible: </span>{producto.stock}
                </div>
                <div className="producto-descrpcion">
                    {producto.description}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail