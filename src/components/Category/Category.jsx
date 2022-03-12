import todos from '../../assets/images/categorias/todos.png'
import pilsener from '../../assets/images/categorias/pilsener.png'
import stout from '../../assets/images/categorias/stout.png'
import ipa from '../../assets/images/categorias/ipa.png'
import { Link } from 'react-router-dom'
import './Category.css'

const Category = () => {
  return (
    <div className='contenedor-categoria'>
        <div>
            <Link to='category/caca'>
                <img src={todos} alt="" />
                <h2>todos</h2>
            </Link>            
        </div>
        <div>
            <Link to='category/pilsener'>
                <img src={pilsener} alt="" />
                <h2>pilsener</h2>
            </Link>
        </div>
        <div>
            <Link to='category/stout'>
                <img src={stout} alt="" />
                <h2 className='stout'>stout</h2>
            </Link>
        </div>
        <div>
            <Link to='category/ipa'>
                <img src={ipa} alt="" />
                <h2>ipa</h2>
            </Link>
        </div>
    </div>
  )
}

export default Category