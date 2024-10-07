import { CircularProgress } from '@mui/material'
import React from 'react'

const loading = () => {
    return (
        <div className='flex justify-center items-center h-[100vh]'>
            <CircularProgress />
        </div>
    )
}

export default loading
