import React, { createContext, useState } from 'react';
import { Groceries } from '../groceryApp/utils';

export const GroceryContext = createContext();

function MyContextProvider({ children }) {
    const [selectedGroceryList, setSelectedGroceryList] = useState(Groceries?.map((x)=>{return{...x,total_amount:x?.price*x?.item_count}}))

    return (
        <GroceryContext.Provider value={{ selectedGroceryList, setSelectedGroceryList }}>
            {children}
        </GroceryContext.Provider>
    );
}



export default MyContextProvider;