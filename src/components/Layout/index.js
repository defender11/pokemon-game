import s from './style.module.css';

const Layout = ({title, urlBg = '', colorBg = '', children}, ) => {
  let bg = {};

  if (urlBg !== '') {
    bg = {backgroundImage: `url(${urlBg})`};
  }

  if (colorBg !== '') {
    bg = {backgroundColor: colorBg, ...bg};
  }

  return (
    <section
      className={s.root}
      style={{...bg}}
    >
      <div className={s.wrapper}>
        <article>
          <div className="title">
            {title && <h3>{title}</h3>}
            <span className="separator"/>
          </div>
          <div className="desc full">
            {children}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Layout;