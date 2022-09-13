import styled from '@emotion/styled';
import {useState,useEffect} from 'react'
import Frases from './components/Frases'

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: --webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #255 0 255;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
`;

function App() {

  const [frase, setFrase] = useState({})

  const consultarAPI = async () => {

    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')

    const frase = await api.json()

    setFrase(frase[0]);
  }

  useEffect(() => {
    consultarAPI();
  },[])

  return (
    <Contenedor>
      <Frases
      frase={frase}
      >
      </Frases>

      <Boton
        onClick={consultarAPI}
      >
        Obtener Frase
      </Boton>
    </Contenedor>
  );
}

export default App;
