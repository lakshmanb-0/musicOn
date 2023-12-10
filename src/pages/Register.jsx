import { Input, Spin, message } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { tokenCookie } from '../redux/reducers/reducers'

export const Register = () => {
    const [number, setNumber] = useState('')
    const [otp, setOtp] = useState(false)
    const [otpInput, setOtpInput] = useState('')
    const [requestId, setRequestId] = useState()
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user } = useSelector(state => state.data)

    useEffect(() => {
        if (user?.token) {
            return navigate('/')
        }
    }, [])

    // sendOtp 
    const sendOTP = async () => {
        setLoading(true)
        try {
            const response = await fetch(`${process.env.REACT_APP_ENDPOINT}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    phoneNumber: `+91${number}`,
                }),
            });
            const responseData = await response.json();

            if (!response.ok) {
                message.error(responseData?.message, 2);
            }
            else {
                setOtp(true)
                message.success(responseData?.message, 2);
                setRequestId(responseData?.requestId)
                setLoading(false)
                return responseData;
            }

        } catch (error) {
            message.error(`Error sending OTP: ${error.message}`, 2);
        }
        setLoading(false)
    }

    // verifyOTP 
    const verifyOTP = async () => {
        setLoading(true)
        try {
            const response = await fetch(`${process.env.REACT_APP_ENDPOINT}/auth/verify_otp`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    phoneNumber: `+91${number}`,
                    requestId: requestId,
                    otp: otpInput,
                }),
            });
            const responseData = await response.json();

            if (!response.ok) {
                message.error(`${responseData?.message}`, 2);
            }
            else {
                message.success('Verified', 2);
                dispatch(tokenCookie({ requestId: requestId, token: responseData?.token }))
                navigate('/')
                return responseData;
            }

        } catch (error) {
            message.error(`Error verifying OTP: ${error.message}`, 2);
        }
        setLoading(false)
    }

    const reset = () => {
        setOtp(false);
        setOtpInput('')
        setNumber('')
    }
    return (
        <Spin spinning={loading}>
            {/* <div className='max-w-[400px] mx-auto h-[100vh] grid place-items-center'>
                <div>
                    {!otp ?
                        <>
                            <h1 className='text-purple text-[38px] font-bold'>Sign In</h1>
                            <p className='py-3 text-sm'>Please enter your mobile number to login. We will send an OTP to verify your number.</p>
                            <Input type='number' maxLength={10} addonBefore="+91" value={number} onChange={(e) => setNumber(e.target.value)} placeholder='Your Number' />
                            <button className={`bg-purple rounded-xl w-full py-3 my-6 text-white ${number?.length != 10 && 'cursor-not-allowed'}`} onClick={sendOTP} disabled={number?.length != 10}>Sign In</button>
                        </>
                        :
                        <>
                            <h1 className='text-purple text-[38px] font-bold'>OTP Verification</h1>
                            <p className='py-3 text-sm'>We have sent and OTP to +91{number}. Please enter the code received to verify.</p>
                            <Input type='number' maxLength={10} value={otpInput} onChange={(e) => setOtpInput(e.target.value)} placeholder='Enter 4 digit Code' />
                            <button className={`bg-purple rounded-xl w-full py-3 my-6 text-white ${otpInput?.length != 4 && 'cursor-not-allowed'}`} disabled={otpInput?.length != 4} onClick={verifyOTP}>verify</button>
                            <button className='text-center w-full underline text-sm' onClick={reset}>Use another number</button>
                        </>}
                </div>
            </div> */}
        </Spin>
    )
}
