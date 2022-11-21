import { useState } from "react";
import Fruit from "./models/Fruit";
import api from "./service/api";
import {FruitCard} from "./components/FruitCard/index";

import {
    Container,
    SearchDiv,
    SearchInput,
    SearchButton,
    NotFound,
  } from './styles';
import Header from "./components/Header";

  const App = () => {

    const [fruit, setFruit] = useState<string>('')
    const [fruits, setFruits] = useState<Fruit[]>([])
    const [notFound, setNotFound] = useState<string>('')
    
    
    const searchFruits = async () => {
      
        searchFruits([])
        setNotFound('')
        try {
            const response = await api.get('/fruits/' + fruit.trim().toLowerCase())
            let fruits = response.data
            
            setFruits(fruits)
            
        } catch(error) {    
            setNotFound(`Não encontramos a fruta:' ${fruit} '`)
        }
        
    }

    return (
        <Container>
            <Header></Header>
            <SearchDiv>
                <SearchInput 
                    placeholder='Busque uma fruta'
                    value={fruit.trim().toLowerCase()}
                    onChange={(event) => setFruit(event.target.value)} />        
                <SearchButton onClick={searchFruits}>
                    <span>Buscar</span>
                </SearchButton>
            </SearchDiv>
            <NotFound>{notFound}</NotFound>
        </Container>
        
    )
   
  }
 

  export default App

 //{fruits.map((fruit: Fruit, index) => <FruitCard key={index} fruit={fruit} />) }