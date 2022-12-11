import React from 'react';

import './CategoriesNav.css'

const CategoriesNav = ({ categories }) => {
    return (
        <nav className="categories-nav">
            {categories.map(category => (
                <div className="category-widget">
                    {category.name}
                </div>
            ))}
        </nav>
    );
}

export default CategoriesNav;