import React, {useState} from "react";

function CohortForm({addNewTerm}) {
  const [term, setTerm] = useState("");
  const [image, setImage] = useState("");
  const [definition, setDefinition] = useState("")
  const [example, setExample] = useState("");


function handleStateSubmit(e) {
e.preventDefault();

const newTermObj = {
  term: term, 
  image: image, 
  definition: definition,
  example: example
};


fetch("http://localhost:4000/cohort", {
  method:'POST',
  headers:{
      'Content-Type': 'application/json',
  },
  body:JSON.stringify(newTermObj),
})
  .then(res=> res.json())
  .then(termObj=> addNewTerm(termObj))

}
  return (
    <div className="cohort-form">
      <form onSubmit={handleStateSubmit}>
        <input 
            value={term} 
            onChange={(e)=> setTerm(e.target.value)} 
            type="text" 
            name="term" 
            placeholder="New Term" />
        <input 
            value={image} 
            onChange={(e)=>setImage(e.target.value)}
            type="text" 
            name="image" 
            placeholder="Image URL" />
        <input 
            value={definition} 
            onChange={(e)=>setDefinition(e.target.value)}          
            type="text" 
            name="definition" 
            placeholder="definition" />
        <input 
            value={example} 
            onChange={(e)=>setExample(e.target.value)}          
            type="text" 
            name="example" 
            placeholder="Provide Example" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CohortForm;