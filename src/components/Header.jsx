import { Button, Typography, Menu, MenuItem, IconButton, styled, Box } from "@mui/material";
import { Menu as MenuIcon, Home, Users, Search } from "lucide-react";
import React, { useState } from 'react';
import { ChevronRight } from "lucide-react";  // Importing the chevron icon

const field = [
  {
    label: "Home",
    icon: <Home style={{ height: '16px', width: '16px', marginRight: '8px' }} />,
    subMenu: []
  },
  {
    label: "Employees",
    icon: <Users style={{ height: '16px', width: '16px', marginRight: '8px' }} />,
    subMenu: [
      { label: "Employee 1", action: "/employee1" },
      { label: "Employee 2", action: "/employee2" }
    ]
  },
  {
    label: "Search",
    icon: <Search style={{ height: '16px', width: '16px', marginRight: '8px' }} />,
    subMenu: []
  }
];

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null); // Track which menu has its sub-menu open
  
  const handleMenuClick = (event) => setAnchorEl(event.currentTarget);
  const handleCloseMenu = () => setAnchorEl(null);
  
  const toggleSubMenu = (label) => {
    setOpenSubMenu(openSubMenu === label ? null : label); // Toggle visibility of the submenu
  };

  return (
    <HeaderStylePage>
      <header className="headerStyle">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton onClick={handleMenuClick} style={{ marginRight: '16px', color: '#e2e8f0' }}>
            <MenuIcon style={{ height: '24px', width: '24px' }} />
          </IconButton>
          <Typography variant="h5" style={{ fontWeight: 'bold' }}>Employee Management</Typography>
        </div>
        <nav>
          <ul className="navBarStyle">
            {field.map((item, index) => (
              <li key={index}>
                <Button variant="text" className="navBarButton" onClick={() => toggleSubMenu(item.label)}>
                  {item.icon} {item.label}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        style={{ marginTop: '16px' }}
      >
        {field.map((item, index) => (
          <div key={index}>
            <MenuItem onClick={() => toggleSubMenu(item.label)} style={{ display: 'flex', alignItems: 'center' }}>
              {item.icon} {item.label} 
              {item.subMenu.length > 0 && <ChevronRight className="chevronRight"/>}
            </MenuItem>
            {item.subMenu.length > 0 && openSubMenu === item.label && (
              <div style={{ paddingLeft: '24px' }}>
                {item.subMenu.map((subItem, subIndex) => (
                  <MenuItem key={subIndex} onClick={handleCloseMenu} className="subMenuItem">
                    {subItem.label}
                  </MenuItem>
                ))}
              </div>
            )}
          </div>
        ))}
      </Menu>
    </HeaderStylePage>
  );
}

export default Header;

const HeaderStylePage = styled(Box)({
  "& .headerStyle": {
    backgroundColor: '#334155', color: '#e2e8f0', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'
  },
  "& .navBarStyle": {
    display: 'flex', gap: '16px', listStyle: 'none', padding: 0, margin: 0
  },
  "& .navBarButton": {
    color: '#e2e8f0', display: 'flex', alignItems: 'center'
  },
  "& .navBarText": {
    height: '16px', width: '16px', marginRight: '8px'
  },
  "& .subMenuItem":{
    display: 'flex', alignItems: 'center' 
  },
  "& .chevronRight":{
     marginLeft: '8px', height: '16px', width: '16px' 
  }
});
