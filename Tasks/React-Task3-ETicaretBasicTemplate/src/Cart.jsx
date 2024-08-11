import React from 'react';
import {DropdownToggle , DropdownMenu, UncontrolledDropdown, DropdownItem} from 'reactstrap';

export default function Cart(props) {
  return (
    <>
    <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Cart - {props.cart.length}
        </DropdownToggle>
        <DropdownMenu end>
            {props.cart.map((cartItem)=>(
                <DropdownItem key={cartItem.product.id}>
                    <span 
                        className="badge badge-danger"
                        style ={{marginLeft: "10px", backgroundColor: "red"}}
                        onClick={() => props.removetocart(cartItem.product)}>
                    X
                    </span>
                    {cartItem.product.productName}-{cartItem.quantity}
                </DropdownItem>
            ))}
        </DropdownMenu>
    </UncontrolledDropdown>
     
    
    
    
    </>
  )
}
