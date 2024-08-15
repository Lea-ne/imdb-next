import React from 'react'

export default function GradeStar({icon, grade}) {
  return (
    <div className='flex items-center'>
        <div>{icon}</div>
        <div>{grade}</div>
    </div>
  )
}