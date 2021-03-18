import {useState} from 'react';
import cn from 'classnames';

import s from './style.module.css';

const NavBar = ({buttonState = false, onClickButton}) => {
  const [isActive, setActive] = useState(buttonState);

  const handleClick = () => {
    setActive(!buttonState);
    onClickButton && onClickButton(buttonState);
  }

  return (
    <nav className={cn(s.root)}>
      <div className={cn(s.navWrapper)}>
        <p className={cn(s.brand)}>
          LOGO
        </p>
        <button className={cn(s.menuButton, {[s.active]: isActive})} onClick={handleClick}>
          <span/>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;