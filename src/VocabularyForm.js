import React from 'react';

function VocabularyForm(){
    return(
        <div>
            <form>
                <input
                    type="text"
                    placeholder="add new term"
                /> 
                <input
                    type="text"
                    placeholder="what's it mean though"
                />
                <input 
                    type="text"
                    placeholder='who are you'
                />
                <button>Submit</button>
            </form>
        </div>

    )
}

export default VocabularyForm;