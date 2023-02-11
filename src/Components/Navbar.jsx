import {Link} from "react-router-dom";
import Styles from "../styles/navbar.module.css";
import {AiOutlineShoppingCart} from "react-icons/ai"
import { useSelector } from "react-redux";
const Navbar = () => {
  const cartItem=useSelector((store)=> {
   return store.cart.cart
  });


  return (

      <div className={Styles.nav}>
        <div style={{marginLeft:"5rem"}}>
         <Link to="/" style={{fontSize:"2rem",fontWeight:"bold"}}>Logo</Link>
          <Link to="/" style={{marginLeft:"2rem",fontWeight:"bold"}}>Home</Link>
          <Link to="/admin" style={{marginLeft:"2rem",fontWeight:"bold"}}>Admin</Link>
          <Link to="/login" style={{marginLeft:"2rem",fontWeight:"bold"}}>Login</Link>
        </div>
        <div style={{marginRight:"5rem",width:"3%",display:"flex",position:"relative"}}>
        <span style={{fontSize:"2rem"}}> <Link to="/cart"><AiOutlineShoppingCart /></Link></span>
         <span style={{fontSize:"1.5rem",position:"absolute",right:0,marginLeft:"5px"}}>{cartItem.length}</span>
        </div>
          
     </div>
 
  )
}

export default Navbar;