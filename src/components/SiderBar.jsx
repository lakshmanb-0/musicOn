import { LogoutOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Divider } from 'antd';
import React from 'react'
import { useDispatch } from 'react-redux';
import { logOut } from '../redux/reducers/reducers';
import { useNavigate } from 'react-router-dom';
import Sider from 'antd/es/layout/Sider';


export const SiderBar = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const backgroundColor = { backgroundColor: '#fff' }

    const handleClick = () => {
        dispatch(logOut());
        navigate('/register')
    }

    return (
        <Sider style={backgroundColor} className='h-[100vh]'>
            <h1 className='text-purple text-[38px] font-bold text-center pt-3'>LOGO</h1>
            <Divider className='px-6' />
            <div className='bg-[#E6F7FF] py-3 px-2 flex gap-3'>
                <MenuUnfoldOutlined />
                <h1 className='text-[#1890FF]'>Songs</h1>
            </div>
            <div className='mt-auto absolute bottom-0 w-full p-4 pl-8 cursor-pointer' onClick={handleClick}><LogoutOutlined /> Logout</div>
        </Sider>
    )
}
