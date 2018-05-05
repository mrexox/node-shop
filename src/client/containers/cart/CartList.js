import React from 'react';
import PropTypes from 'prop-types';

const CartList = ({ items }) => (
    <div className="cart">
        {items.length ? items.map((item, index) => (
            <div key={index} >
                ID = {item.id} COUNT = {item.count}
            </div>
	    ))
       : (<p>Cart is empty</p>)
	    }
    </div>
);

export default CartList;