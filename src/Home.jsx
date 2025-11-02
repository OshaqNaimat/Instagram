import React from 'react'
import Sidebar from './components/Sidebar'
import Posts from './components/Posts'
import Followers from './components/Followers'

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-4 min-h-screen">

        {/* Sidebar */}
        <div className="hidden md:block md:col-span-1 lg:col-span-1">
          <Sidebar isMobile={false} />
        </div>

        {/* Posts */}
        <div className="col-span-4 md:col-span-3 lg:col-span-2 p-3 rounded-md">
          <Posts />
          <Posts />
        </div>

        {/* Followers */}
        <div className="hidden lg:block lg:col-span-1 m-3">
          <Followers />
        </div>

        {/* Bottom Navbar for small screens */}
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md flex justify-around py-3 md:hidden">
          <Sidebar isMobile={true} />
        </div>
      </div>
    </>
  )
}

export default Home
