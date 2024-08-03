import React, { useState } from 'react';
import { Card } from 'antd';
import MenuItemsData from './Data/MenuItemsData';
import MenuCard from './MenuCard';

const MenuItems = () => {
    const [activeTabKey2, setActiveTabKey2] = useState('Pizza');
   
    const onTab2Change = (key) => {
        setActiveTabKey2(key);
    };
    return (
        <>

            <Card
                tabList={MenuItemsData}
                activeTabKey={activeTabKey2}
                onTabChange={onTab2Change}
                tabProps={{
                    size: 'middle',
                }}
            >
            <MenuCard activeTabKey2={activeTabKey2}/>

            </Card>
        </>
    );
};
export default MenuItems;