import React, { useEffect, useState } from 'react'
import { apiGetUser } from '../apis'
import 'semantic-ui-css/semantic.min.css'
import { Icon } from 'semantic-ui-react'
import NavBar from './NavBar'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../store/action'

function Header() {
    const [infoUser, setInfoUser] = useState()
    const [show, setShow] = useState(false)
    const dispatch = useDispatch()
    const { flagInfo } = useSelector(state => state.app)

    useEffect(() => {
        setShow(flagInfo)
    }, [flagInfo])
    const getUser = async () => {
        const res = await apiGetUser()
        setInfoUser(res.results[0])
        dispatch(actions.setInfoUser(res.results[0]))
    }
    useEffect(() => {
        getUser()
    }, [])
    const handleNavbar = () => {
        setShow(pre => !pre)
        dispatch(actions.setFlagInfo(true))
    }
    return (
        <div>
            <div className='flex justify-between h-[70px] shadow-lg px-4 items-center'>
                <span className='font-bold max-sm:hidden'>Dashboard
                    <Icon className='chevron right'></Icon>Info User</span>
                <div className='flex items-center'>
                    <span className='relative max-sm:hidden'>
                        <Icon size='big' color='blue' className='sticky note container' />
                        <span className='px-2 text-[12px]  rounded-full bg-white absolute top-[-5px] font-extrabold  text-red-600 right-[5px]'>7</span>
                    </span>
                    <img className='rounded-full h-[35px] ' src={infoUser?.picture?.thumbnail} alt='thumbnail' />
                    <div className='ml-3 font-bold'>{infoUser?.name?.first}</div>
                    <span className='relative ml-4  cursor-pointer rounded-full hover:bg-BgHover  flex'>
                        <div className='ml-[3.5px] mt-[2px]' onClick={handleNavbar}>
                            <Icon className='m-0 chevron down'></Icon>
                        </div>

                        <div>
                            {show && <NavBar />}
                        </div>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Header