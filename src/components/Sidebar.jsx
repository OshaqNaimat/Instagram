import React from 'react'
import sidebarItems from './Data'

const Sidebar = () => {
  return (
    <div className="flex flex-col p-5 w-max select-none">
        <img className='w-[70px] h-[70px]' src="https://images.vexels.com/media/users/3/137198/isolated/lists/07f0d7b69ef071571e4ada2f4d6a053a-instagram-icon-colorful.png" alt="" />
      <ul>
        {sidebarItems.map((item) => (
          <li
            key={item.id}
            className="flex items-center gap-3 py-3 px-2 text-[25px] cursor-pointer hover:bg-gray-400 active:scale-95"
          >
            {item.icon}
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
