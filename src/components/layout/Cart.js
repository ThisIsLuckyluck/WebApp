import React from 'react';
import {useAuth} from "@/AuthContext";

const CartIcon = () => {
    const { cartCount } = useAuth();


    return (
        <div className="relative">
            {cartCount > 0 && (
                <span className="bg-red-500 text-white rounded-full absolute -top-1 -right-2 px-1 text-sm">
                    {cartCount}
                </span>
            )}
        </div>
    );
};

export { CartIcon };
