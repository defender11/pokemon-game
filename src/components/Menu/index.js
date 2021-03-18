import cn from 'classnames';

import s from './style.module.css';

const Menu = ({buttonState, onClickButton}) => {

  const handleClick = function (e) {
    const page = e.target.text.toLowerCase();
    onClickButton && onClickButton(page);
  }

  return (
    <div className={cn(s.menuContainer, {
      [s.active]: buttonState,
      [s.deactive]: !buttonState
    })}>
      <div className={s.overlay}/>
      <div className={s.menuItems}>
        <ul>
          <li><a onClick={handleClick} href={s.welcome}>HOME</a></li>
          <li><a onClick={handleClick} href={s.game}>GAME</a></li>
          <li><a onClick={handleClick} href={s.about}>ABOUT</a></li>
          <li><a onClick={handleClick} href={s.contact}>CONTACT</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;