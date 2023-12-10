import { Divider, Image, Layout, Table } from 'antd'
import { Content, Footer } from 'antd/es/layout/layout'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { PlayCircleFilled, DeleteOutlined, LogoutOutlined, PauseCircleFilled } from '@ant-design/icons'
import moment from 'moment'
import { SongPlayer } from '../components/SongPlayer'
import { deleteSong, setCurrentSong } from '../redux/reducers/reducers'
import { SiderBar } from '../components/SiderBar'
import { Head } from '../components/Head'

export const Home = () => {
    const { user } = useSelector(state => state.data)
    const navigate = useNavigate()
    const { songList, currentSong } = useSelector(state => state.data)
    const [dataSource, setDataSource] = useState()
    const dispatch = useDispatch()



    useEffect(() => {
        if (!user?.token) {
            return navigate('/register')
        }
    }, [])

    const backgroundColor = {
        backgroundColor: '#fff'
    }

    const columns = [
        {
            title: 'Song Name',
            dataIndex: 'songName',
            key: 'songName',
        },
        {
            title: 'Source',
            dataIndex: 'source',
            key: 'source',
        },
        {
            title: 'ADDED ON',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: '',
            dataIndex: 'play',
            key: 'play',
        },
        {
            title: '',
            dataIndex: 'delete',
            key: 'delete',
        },
    ]

    useEffect(() => {
        let postArr = [];
        songList?.map((el, index) => {
            let newPost = {
                key: index,
                songName: <div className='flex items-center gap-3'>
                    <Image
                        width={40}
                        height={40}
                        src={el?.imageLink}
                    />
                    <p>{el?.name}</p>
                </div>,
                source: el?.source,
                date: moment(el?.date).format('DD-MM-YYYY'),
                play: < PlayCircleFilled className='text-3xl fill-white text-yellow cursor-pointer' onClick={() => dispatch(setCurrentSong(el))
                } />,
                delete: <DeleteOutlined className='cursor-pointer' onClick={() => dispatch(deleteSong(el?.imageLink))} />
            }
            postArr.push(newPost)
        })
        setDataSource(postArr)
    }, [songList])


    return (
        <Layout >
            <SiderBar />

            <Layout className='p-4 h-[100vh]' style={backgroundColor} >
                <Head />
                <Divider />

                <Content style={backgroundColor}>
                    <Table dataSource={dataSource} columns={columns} pagination={{
                        pageSize: 4,
                        showTotal(total, range) {
                            return `Showing ${range.join('-')} of ${total} total`
                        },
                        onChange: (page) => console.log(page),
                    }} />
                </Content>
                <Divider />

                <Footer style={backgroundColor} className='z-10 ' >
                    <SongPlayer />
                </Footer>
            </Layout>
        </Layout>
    )
}
