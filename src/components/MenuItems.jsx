import React, { useState } from 'react';
import { Card } from 'antd';
import { useLocation } from 'react-router-dom';
import MenuItemsData from './Data/MenuItemsData';
import MenuCard from './MenuCard';

const MenuItems = () => {
    const location = useLocation(); // Get the current URL
    const queryParams = new URLSearchParams(location.search); // Parse query params
    const initialCategory = queryParams.get('key') || 'Pizza'; // Default to 'Pizza'

    const [activeTabKey2, setActiveTabKey2] = useState(initialCategory);
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