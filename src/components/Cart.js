import { useSelector } from 'react-redux';
import ItemList from "./ItemList"
import { useDispatch } from 'react-redux';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
   const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
      dispatch(clearCart());
    }

  return (
    <div className='text-center m-4 p-4'>
      <h1 className='text-2xl font-bold'> Cart</h1>
      <div className='w-6/12 m-auto'>
      <button className='m-2 p-2 bg-slate-500 text-white'
      onClick={handleClearCart}
      >Clear Cart
      </button>
      {cartItems.length === 0 && (
         <h1>Hey User, your Cart is empty: add items to the card and enjoy the food😍 </h1>
      )}
       <ItemList items={cartItems} />
       </div>
      </div>
   
  );
};

export default Cart;