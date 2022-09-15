import { createContext, useState, useContext } from "react"
import { useNavigate  } from 'react-router-dom'
import postShoppingCart from '../helpers/postShoppingCart'
import postProductShoppingCart  from '../helpers/postProductShoppingCart'
import deleteShoppingCart from '../helpers/deleteShoppingCart'
import deleteProductShoppingCart from '../helpers/deleteProductShoppingCart'
import postLogin from "../helpers/postLogin"
import postLogout from "../helpers/postLogout"
import postSignup from "../helpers/postSignup"

const CartContext = createContext([]);

export function useCartContext() { return useContext(CartContext)};

export function CartContextProvider({children}) {

    const [cartList, setCartList] = useState ({});
    const [user, setUser] = useState ({});
    
    const navigate = useNavigate ();  

    function addToCart(item) {

        if(typeof cartList.id === 'undefined'){
            postShoppingCart().then( (cart) => {

                postProductShoppingCart(cart.id,item).then( (cart) => {
                    setCartList(cart)
                })
            })
        }else{
            if (isInCart(item.id)) {
                const prod = cartList.products.find((p) => p.id === item.id);
                const idx = cartList.products.findIndex((p) => p.id === item.id);
                const { quantity } = prod;
                prod.quantity = item.quantity + quantity;

                deleteProductShoppingCart(cartList.id,item.id).then( (cart) =>{
                    postProductShoppingCart(cart.id,prod).then( (cart) => {
                        setCartList(cart)
                    })
                })
            } else {
                postProductShoppingCart(cartList.id,item).then( (cart) => {
                    setCartList(cart)
                })
            }
        }
    }

    function emptyCart() {
        
        deleteShoppingCart(cartList.id).then( (res) => {
            setCartList({})
        })
    }

    const isInCart = (id) => {
        return cartList.products.some( prod => prod.id === id)
    }

    const removeOne = (id,idProduct) => {
        deleteProductShoppingCart(id,idProduct).then( (cart) =>{
            setCartList(cart)
        })
    }

    const totalAmount = () => {
        return cartList.products.reduce((acum, item) => acum = acum + (item.precio * item.quantity), 0);
    }

    const quantity = () => {
        return cartList.products.reduce((acum, item) => acum += item.quantity, 0);
    }

    const login = (register) =>{
        postLogin(register).then( (response) => {
            setUser({username: register.username})
            navigate("/");  
        })
    }

    const logout = () =>{
        postLogout().then( (response) => {
            setUser({})
        })
    }

    const signup = (register) =>{
        postSignup(register).then( (response) => {
            setUser({username: register.username})
            navigate("/");  
        })
    }

    return <CartContext.Provider value={{
        cartList,
        user,
        addToCart,
        emptyCart,
        removeOne,
        totalAmount,
        quantity,
        login,
        logout,
        signup
    }}>
        {children}
        </CartContext.Provider>
}