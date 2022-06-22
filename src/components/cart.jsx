import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

const Cart = props => {
  const style = !props.product.isInCart? {color: '#EEEE', cursor: 'pointer'}: {cursor: 'pointer'}
  return(
    <FontAwesomeIcon 
      style={style}  
      onClick={() => props.onclick(props.product)}
      icon={faCartArrowDown} />
  )
}
export default Cart;