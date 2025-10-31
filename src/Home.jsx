import React from 'react'
import Sidebar from './components/Sidebar'
import Posts from './components/Posts'
import Followers from './components/Followers'

const Home = () => {
  return (
    <>
   <div className="grid grid-cols-4">

  {/* Sidebar */}
  <div className="hidden md:block md:col-span-1 lg:col-span-1">
    <Sidebar />
  </div>

  {/* Posts */}
  <div className="col-span-4 md:col-span-3 lg:col-span-2">
    <Posts />
  </div>

  {/* Followers */}
  <div className="hidden lg:block lg:col-span-1">
    <Followers />
  </div>

</div>
j
    </>
  )
}

export default Home