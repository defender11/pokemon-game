import {useState} from 'react';

import Menu from "../Menu";
import NavBar from "../NavBar";


const MenuHeader = ({getPageName}) => {
  const [isActiveNavButton, setActiveNavButton] = useState(false);

  const handleClickButtonNavBar = () => {
    setActiveNavButton(!isActiveNavButton);
  }

  const onChangePage = (page) => {
    getPageName && getPageName(page);
    handleClickButtonNavBar();
  }

  return (
    <>
      <Menu
        buttonState={isActiveNavButton}
        onClickButton={onChangePage}
      />
      <NavBar
        onClickButton={handleClickButtonNavBar}
        buttonState={isActiveNavButton}
      />
    </>
  );
};

export default MenuHeader;