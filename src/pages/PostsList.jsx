import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const PostsList = () => {
    const { id } = useParams()
    const [posts, setPosts] = useState([]);

    const loadPosts = async () => {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await res.json();
            console.log(data);
            
            setPosts(data);
        } catch (e) {
            console.log(e);
        }

    }

    useEffect(() => {
        loadPosts()
    }, [])

    console.log(posts);
    
    return ( <>
    {
        !!posts.length && posts.map((post) => (
            <div key={post.id}>
                <Link to={`${post.id}`}>
                <h2>{post.title}</h2>
                </Link>
                <p>{post.body}</p>
            </div>
        ))
    }
    </>);
}
 
export default PostsList;