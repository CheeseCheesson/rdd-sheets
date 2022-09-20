import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css'
import Form from './../components/form/index';

const NewPost = () => {
    // const [newPosts, setNewPosts] = useState([]);
    // const [value, setValue] = useState({title: '', body: ''});
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const {title, body} = value;
    //     if ((title || body) === '') return
    //     setNewPosts([...newPosts, {title, body}])
    // }
    const navigate = useNavigate();

    const handleBack = () => navigate(-1)
    const handleBackToMain = () => navigate('/', {replace: true})
    // console.log(value);
    return ( <>
    <button onClick={handleBack}>Back</button>
    <button onClick={handleBackToMain}>Вернуться на главную</button>
        <h1>New Posts</h1>
        <Form labelTitle={'Title'} labelBody={"Text"} />
    </> );
}
 
export default NewPost;