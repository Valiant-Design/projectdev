import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const AllWork = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const { allworkers } = useContext(AppContext);

  useEffect(() => {
    if (speciality) {
      setFilterDoc(allworkers.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(allworkers);
    }
  }, [allworkers, speciality]);

  return (
    <div className="min-h-screen mt-20 bg-gray-100 py-10 px-4">
      {/* Header Section */}
      <header className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800">
          Find Your Specialist
        </h1>
        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="bg-[#17a2b8] text-white px-4 py-2 rounded-lg hover:bg-[#28727d]"
          >
            {speciality || "Select Speciality"}
          </button>
          {showDropdown && (
            <ul className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg overflow-hidden w-48 z-10">
              {["Mechanic", "Plumber", "Electrician", "AC MAN", "Carpenter", "Engineer"].map(
                (field) => (
                  <li
                    key={field}
                    onClick={() => {
                      setShowDropdown(false);
                      navigate(
                        speciality === field
                          ? "/allworkers"
                          : `/allworkers/${field}`
                      );
                    }}
                    className={`p-3 cursor-pointer hover:bg-gray-200 ${
                      speciality === field ? "bg-gray-100 font-bold" : ""
                    }`}
                  >
                    {field}
                  </li>
                )
              )}
            </ul>
          )}
        </div>
      </header>

      {/* Doctor Grid */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filterDoc.length > 0 ? (
          filterDoc.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                navigate(`/appointment/${item._id}`);
                window.scrollTo(0, 0);
              }}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform hover:-translate-y-2 transition-transform"
            >
              {/* Image Section */}
              {/* <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              /> */}
              <img
                className="doctor-card-image"
                src={item.image}
                alt={`${item.name} profile`}
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center items-center">
                <button className="bg-[#17a2b8] text-white px-4 py-2 rounded-lg hover:bg-[#28727d]">
                  View Profile
                </button>
              </div>
              {/* Details */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500">{item.speciality}</p>
                {/* <p className="mt-2 text-green-500 text-sm font-medium">
                  Available
                </p> */}
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600">
            No workers found.
          </p>
        )}
      </div>
    </div>
  );
};

export default AllWork;
