import {Link} from 'react-router-dom'

export default function Navigation(){
    return(
        <div>
          <nav className='flex justify-between items-center shadow-md px-10 h-[50px] bg-gray-200'>
          <Link to="/"><h1>Airports</h1></Link>
      <Link to="/auth"><h3>Auth</h3></Link>
          </nav>
        </div>
    )
}