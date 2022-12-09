import React, {useState} from "react";

function CohortCard({id, term, image, definition, example, moreInfo, handleDeleteCard}){
  const [favorite, setFavorite]= useState(true)

  function handleHeart(){
    setFavorite((prev)=> !prev)
  }

  function handleMoreInfoError(){
     if(!moreInfo){
      return alert('no link')
     }
    
  }

  function deleteCard(){
    fetch(`http://localhost:4000/cohort/${id}`,
    {method: 'DELETE'} 
    )
    handleDeleteCard(id)
  }
  

return (
    <li className="card">
           <div className="term-font"><strong>{term}</strong></div>   
           <img src={image} alt={"cohort"} />
            <div className="definition"><strong>Definition: </strong> {definition}</div>
            <em><strong>Example:</strong> {example}</em>  

      <div className="details">
        {favorite ? (
          <button onClick={handleHeart} className="emoji-button favorite active">♥</button>
        ) : (
          <button onClick={handleHeart} className="emoji-button favorite">♡</button>
        )}
        { moreInfo === undefined ? null : (<a href={moreInfo} target="_blank" rel="noreferrer">
          <button onClick={handleMoreInfoError}>More Info</button>
        </a>) }
        
        <button onClick={deleteCard} className="emoji-button delete">🗑</button>
      </div>

    </li>
);
}

export default CohortCard;