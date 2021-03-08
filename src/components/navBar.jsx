import { Link } from "react-router-dom"

const NavBar = () => {
    return ( 
        <div className="navBar">
            <h3>HomePage</h3>
            <div className="right-side">
                <Link className="btn btn-danger" to="/home" >Home</Link>
                <Link className="btn btn-danger" to="/blogs" >Blogs</Link>
                <Link className="btn btn-danger" to="/newblog" >Create New Blog</Link>
            </div>
        </div>
     );
}
 
export default NavBar;