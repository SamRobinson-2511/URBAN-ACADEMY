import React, {useState} from "react";

function VocabularyCard({term, definition, example, moreInfo}){
  const [favorite, setFavorite]= useState(true)

  function handleStar(){
    setFavorite((prev)=> !prev)
  }

  function deleteCard(){
    fetch(`http://localhost:4000/terms/${id}`, 
    {method:'DELETE'}
    )
   handleDeleteCard(id)
  }

return (
<Card>
    <div>
        <div className="front content">
           <div className="header">{term}</div>   
        </div>

        <div className="back content">
            <div className="definition">{definition}</div>
            <e>{example}</e>  
        </div>

      <div className="details">
        {favorite ? (
          <button onClick={handleStar} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleStar} className="emoji-button favorite">☆</button>
        )}

        {/* Anchor List*/}
        <a href={moreInfo} target="_blank" rel="noreferrer">
          <button>More Info</button>
        </a>
        <button onClick={deleteCard} className="emoji-button delete">🗑</button>
      </div>

    </div>
</Card> 
);
}

export default VocabularyCard;