import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreater } from '../state/index'
const Cart = ({ selectedItems }) => {
  const dispatch = useDispatch()
  const{sub } = bindActionCreators(actionCreater , dispatch)
  const [itemsWithQuantity, setItemsWithQuantity] = useState(selectedItems.map(item => ({ ...item, quantity: 1 })));

  const calculateTotalPrice = () => {
    return itemsWithQuantity.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const increaseQuantity = (index) => {
    const newItemsWithQuantity = [...itemsWithQuantity];
    newItemsWithQuantity[index].quantity += 1;
    setItemsWithQuantity(newItemsWithQuantity);
  };

  const decreaseQuantity = (index) => {
    const newItemsWithQuantity = [...itemsWithQuantity];
    if (newItemsWithQuantity[index].quantity > 1) {
      newItemsWithQuantity[index].quantity -= 1;
      setItemsWithQuantity(newItemsWithQuantity);
    }
  };

  const handleRemoveItem = (index)=>{
    sub(1)
    const newItemsWithQuantity = [...itemsWithQuantity];
    newItemsWithQuantity.splice(index, 1);
    setItemsWithQuantity(newItemsWithQuantity)
  } 

  return (
    <div style={{}}>
      <h2 style={{fontSize:'50px' , alignItems : 'center' , textAlign:'center', marginTop:'5px' }}>Cart</h2>
      <p style={{fontSize:"30px", marginRight:'20px' ,  textAlign: 'right'}}>Total Price: ${calculateTotalPrice()}</p>
      {itemsWithQuantity.length === 0 ? (
        <p style={{textAlign:'center' , alignItems:'center' ,fontSize:"25px" , marginTop:'30%'  }}>Your cart is empty</p>
      ) : (
        <div className='Boder'  >
          <div>
            {itemsWithQuantity.map((item, index) => (
              <div key={index} style={{ backgroundColor: index === 0 ? '#F1F1E7' : '#F1F1E7' ,borderRadius:'5%', border: '1px solid #A4A394', marginTop:'10px'  , height : '260px' , marginTop:'15px'}}>
              <div style={{display : 'flex' , justifyContent: "space-between", marginTop:'18px' ,maxWidth:'100%'}}>
                <img src={item.image} alt={item.title} style={{ maxWidth: '125px', height:'155px', marginLeft:'10px' , borderRadius:'10%'}} />

                <div style={{marginRight:'200px', marginTop:'20px', }}>
                    <div style={{fontSize:'2rem', fontWeight:'50px' ,marginLeft: '30px'}} >{item.title}</div>
                    <div style={{fontSize: '1rem', marginTop: '10px', marginLeft: '30px'}}>{item.description}</div>
                </div>


                 <div  style={{fontSize:'1.5rem', marginTop:'60px', marginRight:"25px" ,}} >${item.price}</div>
                 
                </div>


                 <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '80px', marginTop:'5px' ,marginLeft:'140px' }}>
                   <button onClick={() => decreaseQuantity(index)} style={{ width: '25px', height: '25px', background: 'blue', color: 'white', border: 'none', borderRadius: '20%', textAlign: 'center', cursor: 'pointer' }}>-</button>
                   <div style={{ background: 'white', width: '40px', textAlign: 'center' }}>{item.quantity}</div>
                      <button onClick={() => increaseQuantity(index)} style={{ width: '25px', height: '25px', background: 'blue', color: 'white', border: 'none',borderRadius: '20%', textAlign: 'center', cursor: 'pointer' }}>+</button>
                  </div>
               
                <div style={{ alignItems : 'canter', textAlign:'center'  }}>
                <button style={{width:'95%', marginTop:'5px'}}  className="btn btn-secondary" onClick={()=>handleRemoveItem(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      )}
    </div>
  );
};

export default Cart;
