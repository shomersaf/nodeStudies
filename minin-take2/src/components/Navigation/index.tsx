import {Link} from 'react-router-dom'
export default function Navigation(){
    return(
          <div className="nav">
            <h1>Github Search ...</h1>
            <nav> <span><Link to='/'>Home</Link></span>
            <span className='mr-2'><Link to='/favs'>Favourites</Link></span></nav>
           
          </div>
    )
}