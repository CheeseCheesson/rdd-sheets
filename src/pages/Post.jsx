import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const Post = () => {
    const [post, setPost] = useState(null)  // object
    const { id } = useParams()


    useEffect(() => { 
        const loadSinglePost = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
                const json = await response.json()
                setPost(json)
            } catch (e) {
                console.log(e);
            }
        }
        loadSinglePost()
        }, [id])
    return (
        <>
        {
            post && (
                <>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                </>
            )
        }
        <Link to={`/posts/${id}/edit`}> Edit</Link>
        </>
    );

}

export default Post;