import React from 'react';
import Home from './Home';

const Item = ({ addToCart }) => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-4'>
          <Home
            title="watch"
            description="A watch is a portable timepiece intended to be carried or worn by a person. It is designed to keep a consistent movement despite the motions caused by the ..."
            image={require("../image/items (1).jfif")}
            price={20}
            addToCart={addToCart}
            
          />
        </div>
        <div className='col-md-4'>
          <Home
            title="watch"
            description="A watch is a portable timepiece intended to be carried or worn by a person. It is designed to keep a consistent movement despite the motions caused by the ..."
            image={require("../image/items (2).jfif")}
            price={20}
            addToCart={addToCart}
          />
        </div>
        <div className='col-md-4'>
          <Home
            title="watch"
            description="A watch is a portable timepiece intended to be carried or worn by a person. It is designed to keep a consistent movement despite the motions caused by the ..."
            image={require("../image/items (3).jfif")}
            price={20}
            addToCart={addToCart}
          />
        </div>
        <div className='col-md-4'>
          <Home
            title="watch"
            description="A watch is a portable timepiece intended to be carried or worn by a person. It is designed to keep a consistent movement despite the motions caused by the ..."
            image={require("../image/items (4).jfif")}
            price={20}
            addToCart={addToCart}
          />
        </div>
        <div className='col-md-4'>
          <Home
            title="watch"
            description="A watch is a portable timepiece intended to be carried or worn by a person. It is designed to keep a consistent movement despite the motions caused by the ..."
            image={require("../image/items (5).jfif")}
            price={20}
            addToCart={addToCart}
          />
        </div>

        <div className='col-md-4'>
          <Home
            title="watch"
            description="A watch is a portable timepiece intended to be carried or worn by a person. It is designed to keep a consistent movement despite the motions caused by the ..."
            image={require("../image/items (6).jfif")}
            price={20}
            addToCart={addToCart}
          />
        </div>
      </div>
    </div>
  );
};

export default Item;
