import React, { useState } from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { BsZoomIn } from "react-icons/bs";


const PostModal = () => {
     const [imagePreview,setImagePreview] = useState(null)
     const [zoomin,setZoomIn] = useState(false)

     const handleImageViewer = (e)=>{
        let post = e.target.files[0]
        let postURL = URL.createObjectURL(post)
        setImagePreview(postURL)
    }
  return (
    <>
    <div className="bg-black/50 min-h-screen fixed top-0 w-full z-5 flex justify-center items-center">
        <div className="xl:w-1/3 md:w-1/2 w-[45%] rounded-3xl relative overflow-hidden  bg-white flex-col justify-center items-center ">
            { imagePreview ? 
                (
                    <>
                    <div className="flex justify-between items-center w-full p-1">
                    <FaArrowLeftLong size={20} className='cursor-pointer'/>
              <h3 className='font-semibold text-center p-2'>Create a post</h3>
                      <p className='cursor-pointer text-purple-600'>Next</p>
                    </div>
              <img src={imagePreview} className='aspect-square  w-full object-cover'/>
                <div onClick={()=>setZoomIn(true)} className={`bg-black/50 h-7 w-7 flex items-center justify-center 
                absolute bottom-3 left-3 rounded-full ${zoomin ? 'bg-white text-black' : 'bg-black text-white'}`}>
              <BsZoomIn />

              <div className="bg-black/50 px-2 py-1 absolute rounded-lg translate-x-1/2 -translate-y-[100%]">
               <input type="range"  />
              </div>
                </div>      
                    </>
                )             
        : (
            <>
              <h3 className='font-semibold text-center p-2'>Create a post</h3>
         <hr />
         <img width={220} className='m-auto' src="https://i.etsystatic.com/34485599/r/il/dee909/5140040715/il_340x270.5140040715_7bjs.jpg" alt="" />
          <p className='font-semibold text-center'>Drag photos and videos here</p>
          <input onClick={handleImageViewer} type="file" name='file' id='file' hidden />
          <label htmlFor='file' className='bg-blue-500 text-white text-center w-[50%] my-4 rounded-md cursor-pointer hover:bg-blue-600 mx-auto block '>Select from  computer</label>
           
            </>
        )}
       </div>
    </div>
    </>
  )
}

export default PostModal