import { useState } from 'react';

const Form = ({labelTitle, labelBody, type}) => {
    const [newPosts, setNewPosts] = useState([]);
    const [value, setValue] = useState({title: '', body: ''});
    const handleSubmit = (e) => {
        e.preventDefault();
        const {title, body} = value;
        if ((title || body) === '') return
        setNewPosts([...newPosts, {title, body}])
    }

    console.log(value);
    
    return ( 
        <form onSubmit={handleSubmit}>

        <label htmlFor='text'> 
        {labelTitle}       
        </label>
        <input type="text" id='text' onChange={({target}) => setValue({...value, title: target.value})} value={value.title} />
        <label htmlFor='body'> {labelBody}   </label>
        <input id='body' type={type}  onChange={({target}) => setValue({...value, body: target.value})}  value={value.body}/>
        <button>Create post</button>
    </form>
     );
}
 
export default Form;