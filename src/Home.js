import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Link, HashRouter, Routes, Route } from 'react-router-dom';
import Products from './Components/Products';
import Orders from './Components/Orders';
import Cart from './Components/Cart';
import Login from './Components/Login';
import NavBar from './Components/Header';
import api from './api';

const Home = ({ auth , setAuth }) => {

    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useState([]);
    const [lineItems, setLineItems] = useState([]);

    useEffect(()=> {
        const fetchData = async()=> {
          await api.fetchProducts(setProducts);
        };
        fetchData();
      }, []);
    
      useEffect(()=> {
        if(auth.id){
          const fetchData = async()=> {
            await api.fetchOrders(setOrders);
          };
          fetchData();
        }
      }, [auth]);
    
      useEffect(()=> {
        if(auth.id){
          const fetchData = async()=> {
            await api.fetchLineItems(setLineItems);
          };
          fetchData();
        }
      }, [auth]);
    
    
      const createLineItem = async(product)=> {
        await api.createLineItem({ product, cart, lineItems, setLineItems});
      };
    
      const updateLineItem = async(lineItem)=> {
        await api.updateLineItem({ lineItem, cart, lineItems, setLineItems });
      };
    
      const updateOrder = async(order)=> {
        await api.updateOrder({ order, setOrders });
      };
    
      const updateProduct = async(product) => {
        await api.updateProduct({product, products, setProducts})
      }
    
      const removeFromCart = async(lineItem)=> {
        await api.removeFromCart({ lineItem, lineItems, setLineItems });
      };
    
      const login = async (credentials) => {
        await api.login({ credentials, setAuth });
        navigate("/");
      };
    
      const cart = orders.find(order => order.is_cart) || {};
    
      const cartItems = lineItems.filter(lineItem => lineItem.order_id === cart.id);
    
      const cartCount = cartItems.reduce((acc, item)=> {
        return acc += item.quantity;
      }, 0);

      return (
        <div>
          {
            auth.id ? (
              <>
                <nav>
                  <Link to='/products'>Products ({ products.length })</Link>
                  <Link to='/orders'>Orders ({ orders.filter(order => !order.is_cart).length })</Link>
                  <Link to='/cart'>Cart ({ cartCount })</Link>
                  <span>
                    Welcome { auth.username }!
                    <button onClick={ logout }>Logout</button>
                  </span>
                </nav>
                <main>
                  <Routes>
                  
                    <Route path='/products' element={
                      <Products
                        auth = { auth }
                        products={ products }
                        cartItems = { cartItems }
                        createLineItem = { createLineItem }
                        updateLineItem = { updateLineItem }
                        updateProduct = {updateProduct}
                      />
                    }/>
                    <Route path='/cart' element={
                      <Cart
                        cart = { cart }
                        lineItems = { lineItems }
                        products = { products }
                        updateOrder = { updateOrder }
                        removeFromCart = { removeFromCart }
                      />
                    }/>
                    <Route path='/orders' element={
                      <Orders
                        orders = { orders }
                        products = { products }
                        lineItems = { lineItems }
                      />
                    }/>
    
                  </Routes>
                </main>
                </>
            ):(
              <div>
                {/* <Login login={ login }/> */}
                <Routes>
                  <Route path='/products' element={
                    <Products
                      products={ products }
                      cartItems = { cartItems }
                      createLineItem = { createLineItem }
                      updateLineItem = { updateLineItem }
                      auth = { auth }
                    />
                  }/>
                  <Route path='/' element={
                    <Products
                    products={ products }
                    cartItems = { cartItems }
                    createLineItem = { createLineItem }
                    updateLineItem = { updateLineItem }
                    auth = { auth }
                  />
                  }/>
                </Routes>
              </div>
            )
          }
        </div>
      );
}
export default Home; 
