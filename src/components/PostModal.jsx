import React, { useState } from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { BsZoomIn } from "react-icons/bs";
import Slider from '@mui/material/Slider';
import { IoCloseSharp } from 'react-icons/io5';
import ImageFilter from 'react-image-filter';
import { filters } from '../Data/Filters';


const PostModal = () => {
     const [imagePreview,setImagePreview] = useState(null)
     const [zoomin,setZoomIn] = useState(false)
     const [range,setRange] = useState(100)
     const [thirdScreen,setThirdScreen] = useState(false)
      
     const handleImageViewer = (e)=>{
        let post = e.target.files[0]
        let postURL = URL.createObjectURL(post)
        setImagePreview(postURL)
    }

  return (
    <>
    

    <div  onClick={()=>setZoomIn(false)} className="bg-black/50 min-h-screen fixed top-0 w-full z-5 flex justify-center items-center">
        <div  className="fixed right-4 top-4">
    <IoCloseSharp  size={30} className='text-white cursor-pointer' />
    </div>
        <div onClick={(e)=>e.stopPropagation()} className={`${thirdScreen ? 'xl:w-1/2 h-[400px]' : 'xl:w-1/3 h-[400px]'} md:w-1/2 w-[45%] rounded-3xl 
        relative overflow-hidden  bg-white flex-col duration-300 justify-center 
        items-center `}>
            { imagePreview ? 
                (
                    <>
                    <div className="flex justify-between items-center w-full p-2 absolute top-0 left-0 z-50 bg-white">
                    <FaArrowLeftLong onClick={
                      thirdScreen ? ()=>setThirdScreen(false) : ()=>setImagePreview(null)
                    }
                     size={20} className='cursor-pointer'/>
              <h3 className='font-semibold text-center p-2'>Create a post</h3>
                      <p onClick={()=>setThirdScreen(true)} className='cursor-pointer text-purple-600'>Next</p>
                    </div>
              {thirdScreen ? '' : <>
                <div onClick={()=>setZoomIn(true)} className={`bg-black/50 h-7 w-7 flex items-center justify-center 
                absolute bottom-3 left-3 z-[400] rounded-full ${zoomin ? 'bg-white text-black' : 'bg-black text-white'}`}>
              <BsZoomIn />

              <div className={`bg-black/50 duration-300 w-[100px] translate-x-1/2  ${zoomin ? '-translate-y-full opacity-100'  : 'translate-y-[80%] opacity-0'} px-2 py-1 absolute
               rounded-lg  `}>
               
                <Slider
        size="small"
        defaultValue={70}   
        aria-label="Small"
        // valueLabelDisplay="auto"
        value={range}
        onChange={(e)=>setRange(e.target.value)} 
        max={140} 
        min={100}
      />
               
               {/* <input  type="range"  /> */}
              </div>
                </div>
              </>}
                <div  className="flex">
                  <ImageFilter
                  filters={filters.original}
                   image={imagePreview}
                  style={{  
                 scale : range / 80,
                 zIndex : 0,
                 
                }} className={`aspect-square  ${thirdScreen ? 'w-[55%] h-[360px]' : 'w-full'} object-fit-cover`}
      />
               {/* <img style={{  
                 scale : range / 80,
                 zIndex : 0
                }} src={imagePreview} className={`aspect-square  ${thirdScreen ? 'w-[55%] h-[360px]' : 'w-full'} object-cover`}/> */}
                <div className={`bg-white ${thirdScreen ? 'w-[45%]' : 'w-0'} overflow-scroll h-[400px] `}>
                  <div className="grid xl:grid-cols-3 lg:grid-cols-2">
                    {Object.keys(filters).map((item,index)=>{
                      return <div key={index} className='text-center'>
                         <ImageFilter
                         image={'https://w0.peakpx.com/wallpaper/220/131/HD-wallpaper-air-balloon-air-lui-air-balloon-all-colors-amazing-background-balloon-blue-colorful-colors-cool-distance-fly-fly-balloon-flying-flying-baloon-green-landscape-look-nature-orange.jpg'}
                          filter={filters[item]}
                          className='w-full object-fit-cover '
                        />
                        <h2 className='text-sm font-semibold'>
                          {item}
                        </h2>
                      </div>
                    })}
                  </div>
                </div>
                </div>
                    </>
                )             
        : (
            <>
            
              <h3 className='font-semibold text-center p-2'>Create a post</h3>
         <hr />
         <img width={220} className='m-auto mt-9' src="https://i.etsystatic.com/34485599/r/il/dee909/5140040715/il_340x270.5140040715_7bjs.jpg" alt="" />
          <p className='font-semibold text-center'>Drag photos and videos here</p>
          <input onChange={handleImageViewer} type='file' name='file' id='file' hidden />
          <label htmlFor='file' className='bg-blue-500 text-white text-center w-[50%] my-4 rounded-md cursor-pointer hover:bg-blue-600 mx-auto block '>Select from  computer</label>
           
            </>
        )}
       </div>
    </div>
    </>
  )
}

export default PostModal
