import React from 'react';
import { Alert } from "@material-tailwind/react";

function Error() {
  return (
    <div className='grid grid-cols-1 h-screen items-center justify-items-center'>
        <div className='w-[96]'>
            <Alert color='red' className='text-xl font-inter font-bold'>Sorry no products match your filter search ... Clear the filter and try again 😊.</Alert>
        </div>
    </div>
  )
}

export default Error