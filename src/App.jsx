import Header from './components/layout/header';
import Footer from './components/layout/footer';
import Background from './components/layout/background';
import { Outlet } from 'react-router-dom';

const App = () => {

  return (
    <>
      <Header />
      <Background />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
