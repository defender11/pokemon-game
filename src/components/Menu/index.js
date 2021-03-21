import cn from 'classnames';
import {Link} from 'react-router-dom';

import s from './style.module.css';

const menuList = [
  {
    title: 'HOME',
    to: 'home'
  },
  {
    title: 'GAME',
    to: 'game'
  },
  {
    title: 'ABOUT',
    to: 'about'
  },
  {
    title: 'CONTACT',
    to: 'contact'
  }
];

const Menu = ({swapButtonState, buttonState}) => {

  const handleClick = () => {
    swapButtonState && swapButtonState(!buttonState);
  }

  return (
    <div className={cn(s.menuContainer, {
      [s.active]: buttonState !== false,
      [s.deactive]: !buttonState === false
    })}>
      <div className={s.overlay}/>
      <div className={s.menuItems}>
        <ul>
          {
            menuList.map(
              ({title, to}, index) => (
              <li key={index}>
                <Link
                  to={to}
                  onClick={handleClick}
                >{title}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default Menu;