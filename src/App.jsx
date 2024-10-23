import Header from './components/layout/header';
import Footer from './components/layout/footer';
import Background from './components/layout/background';
import { Outlet } from 'react-router-dom';
import { getAccountAPI } from './services/api.services';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from './components/context/auth.context';
import { Spin } from 'antd';

const App = () => {

  const { setUserLogin, isAppLoading, setIsAppLoading } = useContext(AuthContext);

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const fetchUserInfo = async () => {
    const res = await getAccountAPI();
    if (res.data) {
      setUserLogin(res.data.user);
    }
    setIsAppLoading(false);
  }

  return (
    <>
      {isAppLoading === true ?
        <Spin style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
        :
        <>
          <Header />
          <Background />
          <Outlet />
          <Footer />
        </>
      }
    </>
  )
}

export default App;
