import cn from 'classnames';

import s from './style.module.css';

const NavBar = ({buttonState = false, bgActive, onClickButton}) => {
  const handleClick = () => {
    onClickButton && onClickButton(!buttonState);
  }

  return (
    <nav id={s.navbar} className={cn(s.root, {[s.bgActive]: bgActive})}>
      <div className={cn(s.navWrapper)}>
        <p className={cn(s.brand)}>
          LOGO
        </p>
        <div
          className={cn(s.menuButton, {[s.active]: buttonState})}
          onClick={handleClick}
        >
          <span/>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;