import { Button, ButtonGroup } from '@chakra-ui/react';
import React from 'react'
import { useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../Redux/cart/action';
import { DeleteProduct } from '../Redux/product/action';

const ProductCard = ({product}) => {

 const dispatch=useDispatch();

  return (
    <div style={{textAlign:"center"}}>
      <Link to={`/products/${product.id}`}> <img src={product.image} alt="pic" style={{height:"300px"}}/></Link>
       <p>{product.gender}</p>
       <p>{product.brand}</p>
       <p>{product.description}</p>
       <p>{product.price}</p>
       <ButtonGroup flexDirection="column" gap="1rem">
       <Button colorScheme="red" onClick={()=> dispatch(DeleteProduct(product.id))}>Delete</Button>
       <Button colorScheme="blue" onClick={()=> dispatch(addToCart(product))}>Add To Cart</Button>
      <Link to={`/products/${product.id}/edit`}><Button colorScheme="teal" >Edit</Button></Link>
       </ButtonGroup>
    </div>
  )
}

export default ProductCard;
