import React from 'react'
import Sidebar from './components/Sidebar'
import Posts from './components/Posts'
import Followers from './components/Followers'

const Home = () => {
  return (
    <>
    <div className="grid grid-cols-4">
        
        <div className="lg:col-span-1">
            <Sidebar/>
        </div>

        <div className="lg:col-span-2 md:col-span-3 ">
            <Posts/>
        </div>

        <div className="lg:col-span-1 md:col-span-0">
            <Followers/>
        </div>

    </div>
    </>
  )
}

export default Home