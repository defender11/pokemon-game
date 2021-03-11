import s from './style.module.css';

const HeaderBlock = ({title, descr, hideBackground = false}) => {
  const styleRoot = hideBackground ? {backgroundImage: 'none'} : {};
  return (
    <div
      className={s.root}
      style={styleRoot}
    >
      <div className={s.container}>
        {
          title && (<h1 className={s.header}>{title}</h1>)
        }
        {
          descr && (<p>{descr}</p>)
        }
      </div>
    </div>
  );
}

export default HeaderBlock;