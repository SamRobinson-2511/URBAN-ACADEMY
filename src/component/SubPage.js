import React, {useState, useEffect} from "react";
import NavBar from './NavBar'
import SubList from './SubList';
// import SubForm from “./SubForm”;
import SubSearch from './SubSearch';
import { Key } from './myKey'

function SubPage() {
  const[termData, setTermData] = useState ([])
  const[searchTerm, setSearchTerm] = useState('FatIron')
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': Key,
      'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
      }
    };
  const baseUrl = 'https://mashape-community-urban-dictionary.p.rapidapi.com/define?term='
  let searchPath = searchTerm
  let finalUrl = `${baseUrl} + ${searchPath}`
  // useEffect(()=>{
  //   fetch(finalUrl, options)
  //   .then(response => response.json())
  //   .then((data)=>setTermData(data.list))
  //   console.log(termData)
  //   },[])
  function changeSearch ( text ) {
    setSearchTerm(searchPath = text)
    console.log(searchPath)
  }
  function handleTermSubmit(e){
    e.preventDefault()
      fetch(finalUrl, options)
      .then(response => response.json())
      .then((data)=>setTermData(data.list))
      console.log(termData)
  }
  return (
      <div>
        <br />
        <SubSearch
              changeSearch={changeSearch}
              handleTermSubmit={handleTermSubmit}
            />
            <SubList termData={termData}/>
            {/* <SubForm
              termData={termData}
              setTermData={setTermData}
            /> */}
            
      </div>
    );
  }
export default SubPage;