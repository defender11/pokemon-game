import {useState} from 'react';
import HomePage from "./routes/Home";
import GamePage from "./routes/Game";
import MenuHeader from "./components/MenuHeader";

const App = () => {
  const [page, setPage] = useState('home');

  const handleChangePage = (page) => {
    setPage && setPage(page);
  }

  switch (page) {
    case 'home':
      return (
        <>
          <MenuHeader getPageName={handleChangePage}/>
          <HomePage/>
        </>
      );
    case 'game':
      return (
        <>
          <MenuHeader getPageName={handleChangePage}/>
          <GamePage/>
        </>
      );
    default:
      return (
        <>
          <MenuHeader getPageName={handleChangePage}/>
          <HomePage/>
        </>
      );
  }
};

export default App;