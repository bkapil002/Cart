import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreater } from '../state/index';

const Home = ({ image, title, description, price, addToCart }) => {
  const dispatch = useDispatch();
  const { add } = bindActionCreators(actionCreater, dispatch);
  const cartItems = useSelector(state => state.cartItem || []);
  
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const addToCartHandler = () => {
    const isInCart = cartItems.some(item => item.title === title);
    
    if (!isInCart && !isAddedToCart) {
      addToCart({ image, title, description, price });
      add(1);
      setIsAddedToCart(true); 
    }
  };

  return (
    <div>
      <div className='row'>
        <div className='col-md my-3'>
          <div className="card" style={{ width: '18rem' }}>
            <img src={image} className="card-img-top" alt="..." style={{width:'auto' , height:'300px', }}/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <h5 className="card-title"> ${price}</h5>
              <button
                type="button"
                className="btn btn-primary mx-2"
                onClick={addToCartHandler}
                disabled={isAddedToCart} 
              >
                {isAddedToCart ? 'Added to Cart' : 'Add to Cart'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
