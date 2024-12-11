import React from 'react'
import { specialityData } from '../assets/assets_frontend/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
<div className="bg-white">
  <div id="speciality" className="flex flex-col items-center gap-4 py-16 text-[#17a2b8]">
    <h1 className="text-3xl font-bold text-center sm:text-left">
      Get Connected with a Repair Man now!
    </h1>
    <div className="flex sm:justify-center gap-10 pt-8 w-full overflow-scroll">
      {specialityData.map((item, index) => (
        <Link
          onClick={() => scrollTo(0, 0)}
          className="flex flex-col items-center text-lg cursor-pointer flex-shrink-0 hover:bg-[#17a2b8] p-2 hover:text-white transition-all duration-300 text-black-500"
          key={index}
          to={`/allworkers/${item.speciality}`}
        >
          <p>{item.speciality}</p>
        </Link>
      ))}
    </div>
  </div>
</div>

  )
}

export default SpecialityMenu