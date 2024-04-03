import React from 'react'
import { IUser } from '../interface/user'

const CardUser = (props: IUser) => {
  const { image, name } = props

  return (
    <div className='flex flex-col items-center w-48 mt-10 bg-white p-2 rounded-lg shadow-lg me-2'>
      <div className=''>
        <img className='full' src={image} alt=''/>
      </div>

      <div className='mt-2 font-bold text-lg'>
        <p>{name}</p>
      </div>
    </div>
  )
}

export default CardUser