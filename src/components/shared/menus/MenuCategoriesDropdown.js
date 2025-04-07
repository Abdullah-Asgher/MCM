import React from 'react';
import menuData from '~/public/static/data/menu.json';
import DefaultMenu from '~/components/elements/menu/DefaultMenu';

const MenuCategoriesDropdown = () => {
    return (
        <div className="menu--product-categories">
            <div className="menu__toggle" style={{color: "#fff"}}>
                <i className="icon-menu" />
                <span style={{color: "#fff"}}>Shop by Department</span>
            </div>
            <div className="menu__content" >
                <DefaultMenu
                    source={menuData.product_categories}
                    className="menu--dropdown"
                />
            </div>
        </div>
    );
};

export default MenuCategoriesDropdown;
