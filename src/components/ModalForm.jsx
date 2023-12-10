import { Button, Divider, Form, Input, Modal } from 'antd';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addSong } from '../redux/reducers/reducers';

export const ModalForm = ({ isModalOpen, setIsModalOpen }) => {
    const dispatch = useDispatch()
    const { songList } = useSelector(state => state.data)
    const [form] = Form.useForm();

    console.log(songList);
    const handleOk = (values) => {
        dispatch(addSong({ ...values, date: new Date() }))
        form.resetFields();
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        form.resetFields();
        setIsModalOpen(false);
    };

    return (
        <Modal
            title="Add Song"
            open={isModalOpen}
            onCancel={handleCancel}
            footer={[
            ]}>
            <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={handleOk}
                autoComplete="off"
                form={form}
            >
                <Divider />
                <Form.Item
                    name="name"
                    label="Name"
                    rules={[{ required: true, message: 'Please input your Name!' }]}
                >
                    <Input placeholder="Song Name" />
                </Form.Item>
                <Form.Item
                    name="audioLink"
                    label="Audio Link"
                    rules={[{ required: true, message: 'Please input your song Link!' }]}
                >
                    <Input placeholder='Song link' />
                </Form.Item>

                <Form.Item
                    name="source"
                    label="Source"
                    rules={[{ required: true, message: 'Please input your Source!' }]}
                >
                    <Input placeholder='Source' />
                </Form.Item>

                <Form.Item
                    name="imageLink"
                    label="Image Link"
                    rules={[{ required: true, message: 'Please input your Image Link!' }]}
                >
                    <Input placeholder='Image Link' />
                </Form.Item>
                <Divider />

                <Form.Item   >
                    <Button key="back" onClick={handleCancel} className='mr-4'>
                        Cancel
                    </Button>
                    <Button htmlType="submit" type="primary" >
                        Add
                    </Button>
                </Form.Item>
            </Form>
        </Modal>

    )
}
