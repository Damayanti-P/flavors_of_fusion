import { Card } from 'antd';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import MenuData from './Data/MenuData';
import { useAppContext } from '../features/AppProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// toast.configure();

const MenuCard = ({ activeTabKey2 }) => {
    const { cartItems, setCartItems} = useAppContext();

    const data = MenuData.filter(item => item.key === activeTabKey2);

    const Removefromcart = (id) => {
        if (cartItems[id]?.count > 0) {
            setCartItems((prevItems) => {
                const updatedItems = { ...prevItems };
                updatedItems[id].count -= 1;
                if (updatedItems[id].count <= 0) {
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

    const Addtocart = (id, title, price, des, img) => {
        setCartItems((prevItems) => ({
            ...prevItems,
            [id]: {
                count: (prevItems[id]?.count || 0) + 1,
                title,
                price,
                des,
                img,
            }
        }) );
    };

    console.log(cartItems);

    return (
        <>
            {data.map((ele) => (
                <Card key={ele.id} style={{ marginBottom: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div className='menu-card-content'>
                            <h5>{ele.title}</h5>
                            <p>Rs {ele.price}</p>
                            <p>{ele.des}</p>
                        </div>
                        <div className='menu-card-img-container' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img
                                className='menuCardImg'
                                src={ele.img}
                                style={{
                                    width: '150px', height: '150px', borderRadius: '20px', objectFit: 'cover'
                                }}
                            />
                            <div className='menu-card-icons' style={{ marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
                                <RemoveIcon onClick={() => Removefromcart(ele.id)} />
                                <span style={{ margin: '0 10px' }}>{cartItems[ele.id]?.count || 0}</span>
                                <AddIcon onClick={() => Addtocart(ele.id, ele.title, ele.price, ele.des, ele.img)} />
                            </div>
                        </div>
                    </div>
                </Card>
            ))}
        </>
    );
};

export default MenuCard;
