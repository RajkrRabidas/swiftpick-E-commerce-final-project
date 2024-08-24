import React from 'react';
import { NavLink } from 'react-router-dom';
// import { BsPlusSquare, BsCardList, BsPersonLinesFill } from 'react-icons/bs';

const Sidebar = () => {
  return (
    <div className="w-1/5 min-h-screen border-r border-slate-900/10">
      <div className="flex flex-col gap-10 pt-4 sm:pt-10 pl-[20%]">
        
        <NavLink to="/add" className={({ isActive }) => isActive ? "active-link" : ""}>
          <div className="flex items-center gap-x-2 cursor-pointer h-10 max-w-60 border border-slate-900/10 bg-transparent">
            {/* <BsPlusSquare /> */}
            <p className="hidden lg:flex">Add Items</p>
          </div>
        </NavLink>
        
        <NavLink to="/list" className={({ isActive }) => isActive ? "active-link" : ""}>
          <div className="flex items-center gap-x-2 cursor-pointer h-10 max-w-60 border border-slate-900/10 bg-transparent">
            {/* <BsCardList /> */}
            <p className="hidden lg:flex">Item List</p>
          </div>
        </NavLink>

        <NavLink to="/users" className={({ isActive }) => isActive ? "active-link" : ""}>
          <div className="flex items-center gap-x-2 cursor-pointer h-10 max-w-60 border border-slate-900/10 bg-transparent">
            {/* <BsPersonLinesFill /> */}
            <p className="hidden lg:flex">Order</p>
          </div>
        </NavLink>

        {/* Add more links here for other sections like Orders, Analytics, etc. */}
        
      </div>
    </div>
  );
};

export default Sidebar;
