import cn from 'classnames';

import s from './style.module.css'

const GamePage = () => {
  return (
    <>
      <div className={cn(s.root)}>
        <h3>This is Game Page!</h3>
      </div>
    </>
  );
};

export default GamePage;