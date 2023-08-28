// import React from 'react'
import {FiUser} from 'react-icons/fi'
function Promos() {
  return (
    <div className="my-20 py-10 md:px-20 px-8 bg-dry">
        <div className="lg:grid lg:grid-cols-2 lg:gap-10 items-center">
            <div>
                <img src="/images/phone.png" alt="" className='w-full object-contain' />
            </div>
            <div className="flex lg:gap-10 gap-6 flex-col">
                <h1 className="xl:text-3xl text-xl capitalize font-sans font-medium xl:leading-relaxed">
                    Download Your Movies  & Watch Offline. <br /> Enjoy On Your Mobile
                </h1>
                <p className="text-text text-s xl:text-base leading-6 xl:leading-8">
                Enjoy a seamless cinematic experience with Movie Harbor. Download your favorite movies and watch them offline on your mobile device. Whether you're on the move or relaxing at home, your entertainment is always at hand. Say goodbye to buffering and hello to uninterrupted movie magic
                </p>
                <div className="flex gap-4 md:text-lg text-sm">
                    <div className="flex-colo bg-black text-submain px-6 py-3 rounded-md font-bold">
                        HD 4K
                    </div>
                    <div className="flex-rows gap-4 bg-black text-submain px-6 py-3 rounded-md font-bold">
                        <FiUser/> 5 K
                    </div>

                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Promos
