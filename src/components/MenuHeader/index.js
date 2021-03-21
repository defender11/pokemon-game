import {useState} from 'react';

import Menu from "../Menu";
import NavBar from "../NavBar";


const MenuHeader = ({bgActive}) => {
  const [isActiveNavButton, setActiveNavButton] = useState(false);

  const handleClickButtonNavBar = () => {
    setActiveNavButton(!isActiveNavButton);
  }

  return (
    <>
      <Menu
        buttonState={isActiveNavButton}
        swapButtonState={handleClickButtonNavBar}
      />
      <NavBar
        onClickButton={handleClickButtonNavBar}
        bgActive={bgActive}
        buttonState={isActiveNavButton}
      />
    </>
  );
};

export default MenuHeader;