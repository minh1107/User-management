import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Header, Table } from '../../components'
import * as actions from '../../store/action'

function Public() {
  const dispatch = useDispatch()
  const { flagInfo } = useSelector(state => state.app)
  return (
    <div className='mx-[10%]'>
      <header>
        <Header />
      </header>
      {flagInfo ? <div onClick={() => {
        dispatch(actions.setFlagInfo(false))
      }}>
        <Table />
      </div> :
        <div>
          <Table />
        </div>}
    </div>
  )
}

export default Public