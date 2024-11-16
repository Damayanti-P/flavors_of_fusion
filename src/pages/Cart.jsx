import React from 'react';
import { Card, Button } from 'antd';
import { useAppContext } from '../features/AppProvider';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emptyCart from '../imgs/emptyCart.png'

const CartPage = () => {
  const { cartItems, setCartItems } = useAppContext();

  const Removefromcart = (id) => {
    if (cartItems[id]?.count > 0) {
      setCartItems((prevItems) => {
        const updatedItems = { ...prevItems };
        updatedItems[id].count -= 1;

        if (updatedItems[id].count === 0) {
          delete updatedItems[id];
        }

        return updatedItems;
      });
    } else {
      toast.info("Cart is Empty", {
        position: "bottom-left",
      });
    }
  };

  const Addtocart = (id) => {
    setCartItems((prevItems) => ({
      ...prevItems,
      [id]: {
        ...prevItems[id],
        count: (prevItems[id]?.count || 0) + 1,
      }
    }));
  };

  const handleCheckout = () => {
    // Implement checkout functionality here
    toast.success("Proceeding to checkout", {
      position: "bottom-left",
    });
  };

  return (
    <div className='cartPageMain'>
      <div className='cartPage' style={{ padding: '20px', marginTop: '88px' }}>
        <h1>Your Cart</h1>
        {Object.keys(cartItems).length === 0 ? (
          <div class="empty-cart">
          <div class="content">
            <img
              src= {emptyCart}
              alt="Empty Cart"
              class="empty-cart-image"
            />
            <h1>Your Cart is Empty</h1>
          </div>
        </div>
        ) : (
          Object.entries(cartItems).map(([id, item]) => (
            <Card key={id} style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <h5>{item.title}</h5>
                  <p>Rs {item.price}</p>
                </div>
                <div className='menu-card-img-container' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img
                    className='menuCardImg'
                    src={item.img}
                    style={{
                      width: '150px', height: '150px', borderRadius: '20px', objectFit: 'cover'
                    }}
                  />
                  <div className='menu-card-icons' style={{ marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
                    <RemoveIcon onClick={() => Removefromcart(id)} />
                    <span style={{ margin: '0 10px' }}>{item.count}</span>
                    <AddIcon onClick={() => Addtocart(id)} />
                  </div>
                </div>
              </div>
            </Card>
          ))
        )}
        {Object.keys(cartItems).length > 0 && (
          <Button type="primary" onClick={handleCheckout}>
            Checkout
          </Button>
        )}
      </div>
    </div>
  );
};

export default CartPage;
