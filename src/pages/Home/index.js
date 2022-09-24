/* useState para criar dentro do function */
import { useState } from 'react';
/* 'react-icons/fi' react-icons e o nome da biblioteca e o Fi tbm é o nome da biblioteca (aprendendo). */
import {FiLink} from 'react-icons/fi'
/* import '.home.css'; serve p eu estilizar a pagina home, dessa maneira estou importando as mudanças feita no home.css para o index.js */
import './home.css';

import Menu from '../../componentes/Menu'
import LinkItem from '../../componentes/LinkItem';

import api from '../../services/api';

export default function Home(){
    const[link, setLink] = useState('');
    const[data, setData] = useState({});
    const[showModal, setShowModal] = useState(false);
    

// para usar o await precisa usar o asyn, estudar depois.
    async function linkCurto() {
      try{
        const response = await api.post("/shorten",{
          long_url: link
        })

        setData(response.data);
        setShowModal(true);

        setLink('')

      }catch{
        alert("Ops, parece que algo deu errado!")
        setLink('')
      }
    }


    return(
      <div className="container-home">

        <div className="logo">
          <img src="/logo.png" alt="Logo Site"/>
          <h1>Encurtador de Link</h1>   
          <span>Cole seu Link para encurtar 👇</span>
        </div>  
        <div className="area-input">
          <div>
            <FiLink size={24} color="#FFF"/>
            <input placeholder='Cole seu Link Aqui...' value={link} onChange={(e) => setLink(e.target.value) }></input>
          </div>
            <button onClick={linkCurto}>Encurtar Link</button>
        </div>

         <Menu/>

         {showModal && (<LinkItem
          closeModal={ () => setShowModal(false)}
          content={data}
         
         />)}
      </div>
    )
  }
  
