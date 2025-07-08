import './index.css'
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

function Home() {


  return (
    <div className='container'>
      <Link to="/Cads"><h1 className='titleHome'>Sistema de Cadastro <i className="bi bi-box-arrow-in-up-right iconCursor"></i></h1></Link>
    </div>
  );
}

export default Home