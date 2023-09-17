import {Routes, Route} from 'react-router-dom'
import { Link } from 'react-router-dom';
import Home from '../../../pages/Home';

function Error404() {
  return (
    <>
        <h1>En mantenimiento</h1>
            <Link to="/">Go home</Link>
    
        <Routes>
            <Route path="/" element={<Home />}></Route>
        </Routes>
    </>
    
  );
}

export default Error404;