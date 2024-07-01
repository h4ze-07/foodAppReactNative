import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useContext } from 'react'
import { appStore } from '.';
import { TStoreContext } from '../types';

export const storeContext = createContext<TStoreContext | null>(null);

const store = new appStore();

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <storeContext.Provider value={{ store }}>
            {children}
        </storeContext.Provider>
    )
}

export const useStore = () => {
    const context = useContext(storeContext);

    if (!context) {
        throw new Error('No data provided')
    }

    return context;
}

export default StoreProvider
