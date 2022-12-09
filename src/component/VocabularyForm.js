import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function VocabularyForm({addNewTerm}){
    const [word, setWord] = useState('');
    const [define, setDefine] = useState('');
    const [example, setExample] = useState(''); 
   
 

const navigate = useNavigate();

    function handleWordSubmit(e){
        e.preventDefault();
        const formData ={ 
            term: word, 
            definition: define,
            example: example,
            
     
    }
    // console.log(formData)
     fetch("http://localhost:4000/terms", {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
        .then(r => r.json())
        .then(data => {

            navigate(`/library`)
        })
}

return (
    <section className="vocab-form">
        <form onSubmit={handleWordSubmit}>
            
            <label htmlFor="word">Term:</label>
            <input 
                type="text" 
                id="termbox" 
                value={word} 
                onChange={e => setWord(e.target.value)} 
            />
            
            <label htmlFor="definition">Definition:</label>
                <textarea 
                    id="definition" 
                    value={define} 
                    onChange={e => setDefine(e.target.value)} 
                />
            
            <label htmlFor="example">Example:</label>
                <textarea 
                    id="example" 
                    value={example} 
                    onChange={e => setExample(e.target.value)} 
                 />
            
            <button type="submit">Submit</button>
        </form>
    </section>
)
}

export default VocabularyForm;