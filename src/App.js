import React,{useState,useEffect} from 'react';
import './App.css';
import Foodrecipe from './components/Foodrecipe';
import Header from './components/Header';
import axios from 'axios';

function App() {
  const [search,setSearch]=useState("");
  const[recipes,setRecipes]=useState([]);
  
  const onInputchng =(e)=>{
    setSearch(e.target.value);
    console.log(setSearch);
  }
  
  // useEffect(()=>{
  //   getRecipes();
  // },[])

  const getRecipes=()=>{
    axios.get(`https://api.edamam.com/search?q=${search}&app_id=85f78096&app_key=1fe0682b197716f11dd9c75e4ffde3ea`) 
        .then((res)=>{
            console.log(res.data);
            setRecipes(res.data.hits)
        })
  };
  const onSearchclick=()=>{
    getRecipes();
  }

  return (
    <div className="App">
     <Header search={search} onInputchng={onInputchng}
      onSearchclick={onSearchclick}/>
     <div className='container'>
     <Foodrecipe recipes={recipes}/>
    </div>
    </div>
  );
}

export default App;
