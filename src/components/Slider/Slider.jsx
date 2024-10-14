import { useEffect, useState } from 'react'
import { nextSlide, prevSlide, dotSlide } from '../../features/Slice/SliderSlice'
import { useSelector, useDispatch } from "react-redux"
import axios from 'axios';
// import { sliderData } from '../../assets/data/dummyData';

export default function Slider() {
  const [sliderData, setSliderData] = useState([]);
  useEffect(() => {
      // Fetch data from backend API
      axios.get('/api/sliderData')
          .then(response => {
              setSliderData(response.data);  // Update state with the fetched data
          })
          .catch(error => {
            console.log(error)
          });
  }, []);
  const SlideIndex = useSelector((state) => state.slider.value);
  console.log("SliderIndex", SlideIndex);
  const dispatch = useDispatch();

  return (
    <div className='relative'>
      <div>
        {
          sliderData.map((item) => {

            return (
              <div key={item.id} className={parseInt(item.id) === SlideIndex ? "opacity-100 duration-700 ease-in-out scale-100" : "opacity-0 duration-700 ease-in-out scale-95"}>
                <div>
                  {parseInt(item.id) === SlideIndex && (
                    <img className='h-[850px] w-full' src={`http://localhost:3000/${item.img}`} alt="shoes" />
                  )}
                </div>
                <div className='absolute top-40 mx-auto inset-x-1/4'>
                  <p className='text-white text-4xl font-inter font-bold tracking-normal leading-none'>
                    {parseInt(item.id) === SlideIndex && item.text}</p>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className='flex absolute bottom-10 left-[45%]'>
        {
          sliderData.map((dot, index) => {
            return (
              <div 
                className='mr-4'
                key={dot.id}
              >
                <div
                  className={
                    index === SlideIndex ? "bg-green-300 rounded-full p-4 cursor-pointer" : "bg-white rounded-full p-4 cursor-pointer"}
                  onClick={() => dispatch(dotSlide(index))}
                >
                </div>
              </div>
            )
          })
        }
      </div>
      <div>
        <button className='absolute top-[40%] right-4 bg-white rounded-full p-2 hover:bg-green-300' onClick={() => dispatch(nextSlide(SlideIndex + 1))}>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="1.5" 
            stroke="currentColor" 
            className="size-6">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="m8.25 4.5 7.5 7.5-7.5 7.5" 
            />
          </svg>
        </button>
        <button className='absolute top-[40%] left-4 bg-white rounded-full p-2 hover:bg-green-300' onClick={() => dispatch(prevSlide(SlideIndex - 1))}>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="1.5" 
            stroke="currentColor" 
            className="size-6">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M15.75 19.5 8.25 12l7.5-7.5" 
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
