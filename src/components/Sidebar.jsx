import React from 'react'
import sidebarItems from './Data'

const Sidebar = ({ isMobile }) => {
  return (
    <div
      className={`flex flex-col p-5 select-none 
      ${isMobile ? 'flex-row justify-around w-full p-2' : 'min-h-screen w-max border-r border-gray-500'}`}
    >
      {/* Instagram Logo */}
      {!isMobile && (
        <img className="hidden sm:block w-[70px] h-[70px]" 
        src="https://images.vexels.com/media/users/3/137198/isolated/lists/07f0d7b69ef071571e4ada2f4d6a053a-instagram-icon-colorful.png" alt="" />
      )}

      <ul className={`my-4 ${isMobile ? 'flex flex-row w-full justify-between' : ''}`}>
        {sidebarItems.map((item) => (
          <li
            key={item.id}
            className={`flex items-center gap-3 py-3 px-2 my-2 text-[25px] cursor-pointer
            rounded-md hover:bg-gray-200 duration-100 active:scale-95 
            ${isMobile && '!my-0'}`}
          >
            {item.icon}
            {/* Title hidden below LG */}
            <span className="hidden lg:block">{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
