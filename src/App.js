import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";

import bg1 from './assets/bg1.jpg';
import bg2 from './assets/bg3.jpg';

const App = () => {
    return (
      <>
          <Header title='This is title' descr='This is Description!' />
          <Layout title='Top title' urlBg={bg1}/>
          <Layout title='Middle title' colorBg='#e2e2e2'/>
          <Layout title='Bottom title' urlBg={bg2}/>
          <Footer/>
      </>
    );
}

export default App;
