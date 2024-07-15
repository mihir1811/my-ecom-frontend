import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./sidebar.css";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState(null); // State to track active menu

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleMenuItemClick = (menuTitle) => {
    setActiveMenu(activeMenu === menuTitle ? null : menuTitle);
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
      <div className="menu-btn" onClick={toggleSidebar}>
        <i className="ph-bold ph-caret-left"></i>
      </div>
      <div className="head">
        <div className="user-img">
          <img
            src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTUzMjAyMTh8&ixlib=rb-4.0.3&q=85"
            alt=""
          />
        </div>
        <div className="user-details">
          <p className="title">web developer</p>
          <p className="name">Kalvin Calimag</p>
        </div>
      </div>
      <div className="nav">
        <Menu
          title="Products"
          isActive={activeMenu === 'Products'}
          onMenuItemClick={() => handleMenuItemClick('Products')}
        >
          <MenuItem icon="ph-bold ph-house-simple" text="Dashboard" />
          <MenuItem icon="ph-bold ph-user" text="Viewers">
            <SubMenu>
              <MenuItem text="Users" />
              <MenuItem text="Subscribers" />
            </SubMenu>
          </MenuItem>
          <MenuItem icon="ph-bold ph-calendar-blank" text="Agenda" />
          <MenuItem icon="ph-bold ph-chart-bar" text="Revenue">
            <SubMenu>
              <MenuItem text="Earnings" />
              <MenuItem text="Funds" />
              <MenuItem text="Declines" />
              <MenuItem text="Payouts" />
            </SubMenu>
          </MenuItem>
          <MenuItem icon="ph-bold ph-file-text" text="Articles" />
        </Menu>
        {/* <Menu
          title="Settings"
          isActive={activeMenu === 'Settings'}
          onMenuItemClick={() => handleMenuItemClick('Settings')}
        >
          <MenuItem icon="ph-bold ph-gear" text="Settings" />
        </Menu>
        <Menu
          title="Account"
          isActive={activeMenu === 'Account'}
          onMenuItemClick={() => handleMenuItemClick('Account')}
        >
          <MenuItem icon="ph-bold ph-info" text="FAQ" />
          <MenuItem icon="ph-bold ph-sign-out" text="Logout" />
        </Menu> */}
      </div>
    </div>
  );
};

export default Sidebar;

// Helper components
const Menu = ({ title, isActive, onMenuItemClick, children }) => (
  <div className={`menu ${isActive ? 'active' : ''}`}>
       <Link to="#">
        <span className="text">{title}</span>
      </Link>
    <p className="title" onClick={onMenuItemClick}>
      {title}
    </p>
    {isActive && <ul>{children}</ul>}
  </div>
);

const MenuItem = ({ icon, text, children }) => {
  const hasChildren = children && children.length > 0;

  return (
    <li>
      <Link to="#">
        <i className={`icon ${icon}`}></i>
        <span className="text">{text}</span>
        {hasChildren && <i className="arrow ph-bold ph-caret-down"></i>}
      </Link>
      {hasChildren && <SubMenu>{children}</SubMenu>}
    </li>
  );
};

const SubMenu = ({ children }) => <ul className="sub-menu">{children}</ul>;
