/* 'react-icons/fi' react-icons e o nome da biblioteca e o Fi tbm é o nome da biblioteca (aprendendo). */
import {FiLink} from 'react-icons/fi'
/* import '.home.css'; serve p eu estilizar a pagina home, dessa maneira estou importando as mudanças feita no home.css para o index.js */
import './home.css';

import Menu from '../../componentes/Menu'


export default function Home(){
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
            <input placeholder='Cole seu Link Aqui...'></input>
          </div>
            <button>Encurtar Link</button>
        </div>

         <Menu/>

      </div>
    )
  }
  
/*Linha 16 Filink é o nome do simbolo dentro da biblioteca. size={24} é o tamanho da letra, color="FFF" é a cor dele. */