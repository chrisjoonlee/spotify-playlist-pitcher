import React from 'react';
import { createContext, useContext, useState } from 'react';

export const CategoryContext = createContext();

export const useCategory = () => useContext(CategoryContext);

export default function CategoryProvider({ children }) {
    const [category, setCategory] = useState("toplists");

    return (
        <CategoryContext.Provider
            value={{
                category,
                setCategory
            }}
        >
            {children}
        </CategoryContext.Provider>
    );
}