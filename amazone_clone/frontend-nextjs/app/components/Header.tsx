import React from 'react'
import Search from './Search';

const Header = () => {
  return (
    <div className="bg-blue-200 h-[40px] p-1">
      <ul className="flex flex-row align-center justify-around">
        <li className="cursor-pointer">LOGO</li>
        <li>
            <Search/>
        </li>
        <li className="flex flex-row align-center justify-around gap-[50px] cursor-pointer">
          <p>Home</p>
          <p>Products</p>
          <p>Ordered</p>
          <p>Contact</p>
          <p>Logout</p>
        </li>
      </ul>
    </div>
  );
}

export default Header