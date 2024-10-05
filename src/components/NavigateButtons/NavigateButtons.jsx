import React from 'react'
import { Button } from "@material-tailwind/react"
import cloths from "../../assets/cloths.jpg"
import { filteredProducts } from '../../features/Slice/ProductSlice'
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'


function NavigateButtons() {

    const buttons = ['Hoodies', "Dresses", "Suits", "Shoes", "T-Shirts", "Jackets", "Bags"];

    const dispatch = useDispatch();
    return (
        <div>
            <div className='flex items-center justify-center py-8'>
            {
                buttons.map((button, index)=>{
                    return (
                        <div key={index} className='mr-4'>
                        <Link to={'filterdProducts/' + button}>
                        <Button color="gray" size='lg' variant='outlined' ripple={true} className='hover:bg-gray-300 duration-300 ease-in-out'
                         onClick={() => dispatch(filteredProducts(button))}
                         >
                            {button}
                         </Button>           
                        </Link>  
                        </div>
                    );
                })
            }
            </div>
            <div className='bg-black p-2 w-[55%] mx-auto rounded-md'>
                <h3 className='text-orange-900 text-center text-lg font-inter font-bold leading-none tracking-normal'>SLES UP TO 50%</h3>
            </div>
            <div className='flex justify-center items-center py-4'>
                <img className='h-[600px] w-[70%] rounded-md shadow-lg shadow-gray-600' src={cloths} alt="cloths" />
            </div>
        </div>
    )
}

export default NavigateButtons