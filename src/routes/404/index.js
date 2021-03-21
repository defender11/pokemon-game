import cn from "classnames";

import MenuHeader from "../../components/MenuHeader";
import Footer from "../../components/Footer";

import s from "../Contact/style.module.css";

const NotFoundPage = () => {
  return (
    <>
      <MenuHeader/>
      <div className={cn(s.wrap)}>
        <h1>404 Not Found ;(</h1>
      </div>
      <Footer/>
    </>
  );
};

export default NotFoundPage;