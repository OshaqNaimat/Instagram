import React, { useState } from 'react'

const PostModal = () => {
     const [imagePreview,setImagePreview] = useState(null)

     const handleImageViewer = (e)=>{
        let post = e.target.files[0]
        let postURL = URL.createObjectURL(post)
        setImagePreview(postURL)
    }
  return (
    <>
    <div className="bg-black/50 min-h-screen fixed top-0 w-full z-5 flex justify-center items-center">
        <div className="xl:w-1/4 md:w-1/3 sm:w-1/2 rounded-md p-2 pb-9 bg-white flex-col justify-center items-center ">
            { imagePreview ? <img src={imagePreview} className='aspect-square w-full'/>
            
        : (
            <>
              <h3 className='font-semibold text-center'>Create a post</h3>
         <hr />
         <img width={220} className='m-auto' src="https://i.etsystatic.com/34485599/r/il/dee909/5140040715/il_340x270.5140040715_7bjs.jpg" alt="" />
          <p className='font-semibold text-center'>Drag photos and videos here</p>
          <input onClick={handleImageViewer} type="file" name='file' id='file' hidden />
          <label htmlFor='file' className='bg-blue-500 text-white text-center w-50 my-2 rounded-md cursor-pointer hover:bg-blue-600 mx-auto block '>Select from  computer</label>
           
            </>
        )}
       </div>
    </div>
    </>
  )
}

export default PostModal