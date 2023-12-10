import React, { useEffect, useRef, useState } from 'react'
import { Image, Slider } from 'antd'
import { StepBackwardOutlined, StepForwardOutlined, PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'

export const SongPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false)
    const audioRef = useRef(null)
    const [currentTime, setCurrentTime] = useState(audioRef?.current?.currentTime)
    const { currentSong } = useSelector(state => state.data)

    const handlePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(audioRef?.current?.currentTime)
            if (audioRef?.current?.currentTime == audioRef?.current?.duration) {
                setIsPlaying(false)
            }
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const formatTime = (time) => {
        if (time && !isNaN(time)) {
            const minutes = Math.floor(time / 60);
            const formatMinutes =
                minutes < 10 ? `0${minutes}` : `${minutes}`;
            const seconds = Math.floor(time % 60);
            const formatSeconds =
                seconds < 10 ? `0${seconds}` : `${seconds}`;
            return `${formatMinutes}:${formatSeconds}`;
        }
        return '00:00';
    };

    const handleSliderChange = (value) => {
        audioRef.current.currentTime = value;
        setCurrentTime(value);
    };

    return Object.keys(currentSong).length ? (
        <>
            <audio src={currentSong?.audioLink} controls ref={audioRef} hidden />
            <div className='flex justify-between w-full px-2'>
                <p className='text-xs'>{formatTime(currentTime)}</p>
                <p className='text-xs'>{formatTime(audioRef?.current?.duration)}</p>
            </div>
            <Slider
                tooltip={{ formatter: null }}
                min={0}
                max={audioRef?.current?.duration}
                value={currentTime}
                onChange={handleSliderChange}
            />
            <section className='flex justify-between items-center' >
                <div className='flex items-center gap-3'>
                    <Image
                        width={40}
                        height={40}
                        src={currentSong?.imageLink}
                    />
                    <p>{currentSong?.name}</p>
                </div>
                <div className='flex gap-3 text-2xl'>
                    <StepBackwardOutlined />
                    <button onClick={handlePlayPause}>{isPlaying ? <PauseCircleOutlined /> : <PlayCircleOutlined />}</button>
                    <StepForwardOutlined />
                </div>
            </section>
        </>
    )
        : <></>
}
