import React, { useEffect } from 'react';
import { useCategory } from '../context/CategoryContext'

import './CategoriesNav.css'

const CategoriesNav = ({ categories }) => {
    const { category, setCategory } = useCategory();

    return (
        <nav className="categories-nav">
            {categories.map((category, i) => (
                <button
                    key={i}
                    className="category-widget"
                    onClick={() => {
                        console.log(category.id);
                        setCategory(category.id);
                    }}>
                    {category.name}
                </button>
            ))}
        </nav>
    );
}

export default CategoriesNav;