import React from 'react';
import { FaTh, FaUserAlt, FaRegChartBar, FaCommentAlt, FaShoppingBag, FaThList, FaBars } from 'react-icons/fa'; // ✅ Correct icon source
import { Link } from 'react-router-dom'; // For navigation
import { NavLink } from 'react-router-dom';
import '../App.css';
import { useState } from 'react';
const SideBar = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = ()=> setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />
    },
    {
      path: "/about",
      name: "About",
      icon: <FaUserAlt />
    },
    {
      path: "/analytics",
      name: "Analytics",
      icon: <FaRegChartBar />
    },
    {
      path: "/comments",
      name: "Comments",
      icon: <FaCommentAlt />
    },
    {
      path: "/product",
      name: "Product",
      icon: <FaShoppingBag />
    },
    {
      path: "/productList",
      name: "ProductList",
      icon: <FaThList />
    }
  ];

  return (
    <div className="Container">
        <div className="sidebar" style={{ width: isOpen ? "250px" : "50px"}}>
          <div className="top_section">
                <h1 className="logo" style={{ display: isOpen ? "block" : "none"}}>Logo</h1>
                <div className="bars" style={{ marginLeft: isOpen ? "50px" : "0px"}}><FaBars onClick={toggle}/></div>
          </div>
          <div>
          {
            menuItem.map((item, index)=>(
                <NavLink to={item.path} key={index} className="link">
                    <div className="icon">{item.icon}</div>
                    <div className="link_text" style={{ display: isOpen ? "block" : "none"}}>{item.name}</div>
                </NavLink>
            ))
          }
          </div>
        </div>
        <main>{children}</main>
    </div>
  );
};

export default SideBar;
