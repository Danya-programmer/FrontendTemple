import * as React from 'react';
import classes from './DropDownMenu.module.css'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';


export const DropDownMenu = (props) => {
  console.log(props.title)
  const items = props.menuItems
  console.log(items)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <button
        style={{textDecorations: 'none',background: 'white', border:'none', height: 'min-content', width: 'max-content'}}
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
      <p className={classes.menuItem}>{props.title} <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.82662 16.9345L0.431541 0.57201H17.2217L8.82662 16.9345Z" fill="black"/>
</svg></p>
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      > {items.map((item) => <MenuItem  onClick={handleClose}><NavLink to={item.to} className={navData => navData.isActive ? classes.active : classes.inActive}>{item.title}</NavLink></MenuItem>)}
        
    
        
      </Menu>
    </div>
  );
}