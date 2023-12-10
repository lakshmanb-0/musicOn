import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Register } from './pages/Register';
import { Home } from './pages/Home';
import { useEffect } from 'react';
import { message } from 'antd';
import { tokenCookie } from './redux/reducers/reducers';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch()

  useEffect(() => {
    if (localStorage.getItem('user')) {
      dispatch(tokenCookie(JSON.parse(localStorage.getItem('user') ?? '')))
    }
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {contextHolder}
    </>
  );
}

export default App;
