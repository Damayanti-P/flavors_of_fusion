import { Card } from 'antd';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import MenuData from './Data/MenuData';
import { useAppContext } from '../features/AppProvider';

const MenuCard = ({ activeTabKey2 }) => {
    const {count,setCount}=useAppContext();
    const data = MenuData.filter(item => item.key === activeTabKey2);
    const Removefromcart=()=>{
        setCount((count)=>count-1);
    }
    const Addtocart=()=>{
        setCount((count)=>count+1);
    }
    console.log(count)
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
                                <RemoveIcon onClick={Removefromcart}/>  
                                <span style={{ margin: '0 10px' }}>{}</span>
                                <AddIcon  onClick={Addtocart}/>
                            </div>
                        </div>
                    </div>
                </Card>
            ))}
        </>
    );
}

export default MenuCard;
