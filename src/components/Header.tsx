import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Store, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartBadge from './CartBadge';

export default function Header() {
  const location = useLocation();
  const { itemCount } = useCart();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/home" 
            className="flex items-center space-x-2 text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
          >
            <Store className="w-8 h-8 text-blue-600" />
            <span>ShopHub</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/home"
              className={`font-medium transition-colors hover:text-blue-600 ${
                isActive('/home') ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              Products
            </Link>
            <Link
              to="/cart"
              className={`font-medium transition-colors hover:text-blue-600 flex items-center space-x-1 ${
                isActive('/cart') ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Cart</span>
              <CartBadge count={itemCount} />
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link
              to="/cart"
              className="md:hidden relative p-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              <CartBadge count={itemCount} />
            </Link>
            <Link
              to="/login"
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <User className="w-5 h-5" />
              <span className="hidden sm:inline">Account</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}