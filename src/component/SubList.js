import React from 'react';
import SubCard from './SubCard'
function SubList({termData}){
  // const tdv = Object.keys(termData)
  // console.log(tdv[0])
  // const tDv = tdv[0]
  // console.log(tDv)
const termsList = termData.map((term)=> {
  return (
    <SubCard
      key={term.defid}
      id={term.defid}
      definition={term.definition}
      example={term.example}
      word={term.word}
    />)
  })
console.log('from VL:', termData)
return (
  <div>
    {termsList}
  </div>
  );
}
export default SubList;


