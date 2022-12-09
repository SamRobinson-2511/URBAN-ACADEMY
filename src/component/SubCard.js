import React from 'react';
function SubCard({id, definition, example, word}){
  console.log(example, definition)

  return (
    <div className='card'>
      <div>
         <div className='term'>{word}</div>
          <p className='definition'><br/>
            defined: {definition.replace(/[\[\]']+/g,'')}  
          </p>
          <p className='example'>
            example: {example.replace(/[\[\]']+/g,'')}
          </p>
      </div>
    </div>
  );
}
export default SubCard;