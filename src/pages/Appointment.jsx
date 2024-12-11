import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets_frontend/assets";

const Appointment = () => {
  const { docId } = useParams();
  const { allworkers, currencySymbol } = useContext(AppContext);

  const [docInfo, setDocInfo] = useState(null);
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedTime, setSelectedTime] = useState("");

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  // Fetch doctor details
  useEffect(() => {
    const fetchDocInfo = () => {
      const doc = allworkers.find((worker) => worker._id === docId);
      if (doc) {
        setDocInfo(doc);
      } else {
        console.error("Doctor not found");
      }
    };
    fetchDocInfo();
  }, [docId, allworkers]);

  // Generate time slots for 7 days
  useEffect(() => {
    if (!docInfo) return;

    const generateSlots = () => {
      const slots = [];
      const today = new Date();

      for (let i = 0; i < 7; i++) {
        const currentDay = new Date(today);
        currentDay.setDate(today.getDate() + i);
        currentDay.setHours(10, 0, 0, 0); // Start at 10:00 AM
        const endTime = new Date(currentDay);
        endTime.setHours(21, 0, 0, 0); // End at 9:00 PM

        const daySlots = [];
        while (currentDay < endTime) {
          daySlots.push({
            datetime: new Date(currentDay),
            time: currentDay.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          });
          currentDay.setMinutes(currentDay.getMinutes() + 30);
        }
        slots.push(daySlots);
      }
      setTimeSlots(slots);
    };
    generateSlots();
  }, [docInfo]);

  return (
    docInfo && (
      <div className="p-6 space-y-6 mt-20 bg-gray-50 min-h-screen">
        {/* Doctor Details */}
        <div className="bg-white shadow rounded-lg p-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <img
            src={docInfo.image}
            alt={`${docInfo.name}'s profile`}
            className="rounded-lg w-full h-auto object-cover"
          />
          <div className="col-span-2 space-y-3">
            <h2 className="text-2xl font-bold text-gray-800">
              {docInfo.name}
              <img src={assets.verified_icon} alt="Verified" className="inline-block w-5 ml-2" />
            </h2>
            <p className="text-gray-600">
              {docInfo.degree} - {docInfo.speciality}
            </p>
            <p className="text-sm text-gray-500">{docInfo.about}</p>
            <p className="text-lg font-medium text-primary">
              Fee: {currencySymbol}
              {docInfo.fees}
            </p>
          </div>
        </div>

        {/* Booking Slots */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800">Available Slots</h3>
          <div className="flex gap-3 mt-4 overflow-x-auto">
            {timeSlots.map((_, index) => (
              <button
                key={index}
                className={`py-2 px-4 rounded-lg ${
                  selectedDay === index
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
                onClick={() => setSelectedDay(index)}
              >
                {daysOfWeek[(new Date().getDay() + index) % 7]}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
            {timeSlots[selectedDay]?.map((slot, index) => (
              <button
                key={index}
                className={`py-2 px-4 rounded-lg ${
                  slot.time === selectedTime
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
                onClick={() => setSelectedTime(slot.time)}
              >
                {slot.time}
              </button>
            ))}
          </div>

          <button
            className={`mt-6 py-3 px-8 rounded-lg w-full ${
              selectedTime
                ? "bg-primary text-white"
                : "bg-gray-300 cursor-not-allowed"
            }`}
            disabled={!selectedTime}
          >
            {selectedTime ? `Book Slot: ${selectedTime}` : "Select a Slot"}
          </button>
        </div>
      </div>
    )
  );
};

export default Appointment;
