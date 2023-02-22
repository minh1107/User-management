import React, { useEffect, useRef, useState } from 'react'
import { apiGetUserList } from '../apis'
import { Icon } from 'semantic-ui-react'

function Table() {
    const [dataUserList, setDataUserList] = useState([])
    const [index, setIndex] = useState(1)
    const [sortUsername, setSortUsername] = useState(false)
    const [sortFullName, setSortFullName] = useState(false)
    const indexItem = useRef([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    const getUser = async () => {
        const res = await apiGetUserList(index, 10)
        setDataUserList(res?.results)
    }
    useEffect(() => {
        getUser()
    }, [index])
    const handleSortWithUserName = () => {
        const arr = dataUserList?.map((item) => (
            item?.login.username
        ))
        !sortUsername ? arr.sort() : arr.reverse()
        const newArr = []
        for (let i = 0; i < arr.length; i++) {
            newArr.push(dataUserList.find((item) => (item.login.username === arr[i])))
        }
        setDataUserList(newArr)
        setSortUsername(pre => !pre)
    }
    const handleSortWithFullName = () => {
        const arr = dataUserList?.map((item) => (
            `${item?.name.title} ${item?.name.first} ${item?.name.last}`
        ))
        !sortFullName ? arr.sort() : arr.reverse()
        const newArr = []
        for (let i = 0; i < arr.length; i++) {
            newArr.push(dataUserList.find((item) => (`${item?.name.title} ${item?.name.first} ${item?.name.last}` === arr[i])))
        }
        setDataUserList(newArr)
        setSortFullName(pre => !pre)
    }
    return (
        <div className='p-2  bg-white rounded-lg flex flex-col mt-14 w-[100%] py-2 '>
            <div className='flex font-bold  w-[100%] border-b-2 items-center h-[70px] max-xl:h-[45px]'>
                <span className='p-2 w-[5%] max-lg:w-[35px] max-lg:invisible '>Avatar</span>
                <span
                    className='lg:p-2 w-[45%] max-lg:w-[45%] rounded-tl-md cursor-pointer'>
                    <span onClick={handleSortWithFullName}>
                        {!sortFullName ? <Icon className='sort alphabet up' />
                            : <Icon className='sort alphabet down' />}Full Name</span></span>
                <span  className='max-lg:w-[45%] cursor-pointer lg:p-2 w-[45%]'>
                    <span onClick={handleSortWithUserName}>
                        {!sortUsername ? <Icon className='sort alphabet up' />
                            : <Icon className='sort alphabet down' />}Username</span></span>
            </div>
            {
                dataUserList?.map((item) => (
                    <div className='cursor-pointer hover:bg-slate-100 rounded-md flex w-[100%] items-center border-b-2 last:border-none'>
                        <img alt='thumnail' src={item?.picture?.thumbnail} className='p-2 max-lg:rounded-full max-lg:w-[35px] w-[5%] rounded-3xl' />
                        <span className='lg:p-2 w-[45%]'>{item?.name?.title}{" "}
                            {item?.name?.first}{" "}
                            {item?.name?.last}
                        </span>
                        <span className='lg:p-2 w-[45%]'>{item?.login?.username}</span>
                    </div>
                ))
            }
            <div className='flex max-lg:text-[12px] justify-end items-center my-4 '>
                {index >= 4 ? <Icon className='chevron left pb-5' /> : ''}
                {
                    indexItem?.current?.map((item) => {
                        if (index <= 7 || index >= 3) {
                            if (index + 2 >= item && index - 2 <= item) {
                                return <div onClick={() => setIndex(item)}
                                    className={`${index === item ? 'bg-slate-400' : ''} m-1 cursor-pointer p-2 rounded-md hover:bg-slate-100 border-emerald-100 border-[1px]`}>
                                    {item}
                                </div>
                            }
                        }
                        if (index <= 2 && item <= 5) {
                            return <div onClick={() => setIndex(item)} className={`m-1 cursor-pointer p-2 rounded-md hover:bg-slate-100 border-emerald-100 border-[1px]`}>{item}</div>
                        }
                        if (index > 7 && item >= 6) {
                            return <div onClick={() => setIndex(item)} className={`m-1 cursor-pointer p-2 rounded-md hover:bg-slate-100 border-emerald-100 border-[1px]`}>{item}</div>
                        }
                    }
                    )
                }
                {index < 8 ? <Icon className='chevron right pb-5' /> : ''}
            </div>
        </div>
    )
}

export default Table