import React from 'react'
import Drawer from '@mui/material/Drawer';
import CategoryNavBar from '../CategoryNavBar/CategoryNavBar';

type Props = {
    open: boolean;
    toggleOpen: () => void
}

const NavDrawer = (props: Props) => {
  return (
    <Drawer
      anchor='left'
      open={props.open}
      onClose={props.toggleOpen}
      PaperProps={{
        sx: { width: "28%" },
      }}
    >
      <CategoryNavBar />
    </Drawer>
  )
}

export default NavDrawer