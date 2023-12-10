import React, { useState } from 'react'
import { ModalForm } from './ModalForm';
import { Button } from 'antd';
import { Header } from 'antd/es/layout/layout'


export const Head = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const backgroundColor = { backgroundColor: '#fff' }


    return (
        <Header style={backgroundColor} className='max-h-[40px] flex justify-between items-center'>
            <h1>Songs</h1>
            <Button className='px-4 py-1 bg-yellow rounded' onClick={() => setIsModalOpen(true)}>Add Songs</Button>
            <ModalForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </Header>
    )
}
