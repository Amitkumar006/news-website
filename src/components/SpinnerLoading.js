import React from 'react'
import Loading from './Loading.gif'

const  spinner = () => {
    return (
      <div className='text-center'>
        <img style={{width:"50px", height:"50px", margin:"400px 0px"}} src={Loading} alt="" />
      </div>
    )
}

export default spinner
