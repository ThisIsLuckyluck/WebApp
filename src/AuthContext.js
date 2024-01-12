"use client"
import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Create an initial state for authentication
const initialState = {
    isAuthenticated: false,
    cartCount: 0, // New state property for cart count
};

// Define actions for authentication and cart
const AuthActionTypes = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
    UPDATE_CART_COUNT: 'UPDATE_CART_COUNT', // New action type for updating cart count
};

// Create a reducer function to handle authentication actions
const authReducer = (state, action) => {
    switch (action.type) {
        case AuthActionTypes.LOGIN:
            return {
                ...state,
                isAuthenticated: true,
            };
        case AuthActionTypes.LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
            };
        case AuthActionTypes.UPDATE_CART_COUNT:
            return {
                ...state,
                cartCount: action.payload.cartCount,
            };
        default:
            return state;
    }
};

// Create the authentication context
const AuthContext = createContext();

// Create an AuthProvider component to wrap your app with the authentication context
export const AuthProvider = ({ children }) => {
    const [authState, dispatch] = useReducer(authReducer, initialState);

    // Load authentication and cart state from localStorage on component mount
    useEffect(() => {
        const storedAuthState = localStorage.getItem('authState');
        if (storedAuthState) {
            dispatch({
                type: AuthActionTypes.LOGIN,
            });
        }

        const storedCart = localStorage.getItem('Cart');
        if (storedCart) {
            const cartArray = storedCart.split(',');
            const filteredCartArray = cartArray.filter((item) => item.trim() !== '');
            dispatch({
                type: AuthActionTypes.UPDATE_CART_COUNT,
                payload: {
                    cartCount: filteredCartArray.length,
                },
            });
        }
    }, []);

    // Define login and logout functions to dispatch actions
    const login = (user) => {
        dispatch({ type: AuthActionTypes.LOGIN, payload: { user } });
        // Save authentication state to localStorage
        localStorage.setItem('authState', JSON.stringify({ isAuthenticated: true }));
    };

    const logout = () => {
        dispatch({ type: AuthActionTypes.LOGOUT });
        // Remove authentication state from localStorage
        localStorage.removeItem('authState');
    };

    // Define update cart count function
    const updateCartCount = (cart) => {
        const cartArray = cart.split(',');
        const filteredCartArray = cartArray.filter((item) => item.trim() !== '');
        dispatch({
            type: AuthActionTypes.UPDATE_CART_COUNT,
            payload: {
                cartCount: filteredCartArray.length,
            },
        });
    };

    // Provide the authentication state and actions to the context
    const contextValue = {
        ...authState,
        login,
        logout,
        updateCartCount,
    };

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

// Create a custom hook to access the authentication context
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
