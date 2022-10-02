import React from 'react';
import Cart from './Components/Cart';
import Main from './Components/Main';
import SideMenu from './Components/SideMenu';
import CartContextProvider  from './Components/CartContext';

const App = () => {
    return (
            <CartContextProvider>
        <div>
                <div className="flex">
                    {/* <div className="grid grid-cols-9"> */}
                    <div className="col-span-1 p-2 md:p-3">
                        <SideMenu />
                    </div>
                    <div className="col-span-8">
                        <Main />
                    </div>
                    {/* <div className="col-span-2"> */}
                    {/* <Cart/> */}
                    {/* </div> */}
                </div>
        </div>
            </CartContextProvider>
    );
};

export default App;