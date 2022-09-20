import { Link } from "react-router-dom";
const Header = () => {
    return ( 
        <>
        <Link to={'/'} >Home</Link>
        <Link to={'/posts'} >Post</Link>
        <Link to={'/posts/newPost'} >NewPosts</Link>
        <Link to={'/login'} >Login</Link>
        </>
     );
}
 
export default Header;