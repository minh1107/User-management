import React from 'react'
import { useSelector } from 'react-redux'

function NavBar() {
    const { infoAdmin } = useSelector(state => state.app)
    return (
            <div className='cursor-default absolute top-[40px] translate-x-[-50%] bg-BgHover rounded-md shadow-xl bottom-0 left-[50%] h-[120px] p-4 w-[280px]'>
                <div>Name: {infoAdmin.name.first}</div>
                <div>Gender: {infoAdmin.gender}</div>
                <span>Email: {infoAdmin.email}</span>
                <div>Phone number: {infoAdmin.phone}</div>
        </div>
    )
}

export default NavBar