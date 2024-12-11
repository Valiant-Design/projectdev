// import appointment_img from './appointment_img.png'
import banner_img from './sima.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.jpg'
import doc2 from './doc2.jpg'
import doc3 from './doc3.jpg'
import doc4 from './doc4.jpg'
import doc5 from './doc5.jpg'
import doc6 from './doc6.jpg'
import doc7 from './doc7.jpg'
import doc8 from './doc8.jpg'
import doc9 from './doc9.jpg'
import doc10 from './doc10.jpg'
import doc11 from './doc11.jpg'
import doc12 from './doc12.jpg'
import doc13 from './doc13.jpg'
import doc14 from './doc14.jpg'
import doc15 from './doc15.jpg'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    // appointment_img,
    banner_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'Mechanic',
        image: General_physician
    },
    {
        speciality: 'Plumber',
        image: Gynecologist
    },
    {
        speciality: 'Electrician',
        image: Dermatologist
    },
    {
        speciality: 'AC MAN',
        image: Pediatricians
    },
    {
        speciality: 'Carpenter',
        image: Neurologist
    },
    {
        speciality: 'Engineer',
        image: Gastroenterologist
    },
]

export const allworkers = [
    {
        _id: 'doc1',
        name: 'Mec. James Chima',
        image: doc1,
        speciality: 'Mechanic',
        // degree: 'MBBS',
        experience: '4 Years',
        about: 'A skilled mechanic who specializes in diagnosing and repairing a wide range of vehicle issues. From engine troubles to brake adjustments, this professional ensures your vehicle operates safely and efficiently. Whether you need routine maintenance or urgent repairs, the mechanic delivers quality service with attention to detail and expertise. Always ready to get you back on the road with confidence.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc2',
        name: 'Pl. VOT Smart ',
        image: doc2,
        speciality: 'Plumber',
        // degree: 'MBBS',
        experience: '3 Years',
        about: 'A dedicated plumber with expertise in diagnosing and resolving plumbing issues, including pipe repairs, leak fixes, and installation of fixtures. Committed to providing efficient and reliable solutions, focusing on preventing future problems and ensuring your water systems run smoothly. Always prepared to deliver quality service with attention to detail and a commitment to excellence.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc3',
        name: 'Engr. Muhamed Rufai',
        image: doc3,
        speciality: 'Electrician',
        // degree: 'MBBS',
        experience: '1 Years',
        about: 'An experienced electrician specializing in troubleshooting, repairing, and installing electrical systems with precision and care. Dedicated to ensuring safety and efficiency, with expertise in wiring, lighting, and power systems. Committed to providing reliable and high-quality service, focusing on preventive measures to avoid electrical hazards and ensure lasting solutions for your electrical needs.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc4',
        name: 'Mr. Breakthrough Aleh',
        image: doc4,
        speciality: 'AC MAN',
        // degree: 'MBBS',
        experience: '2 Years',
        about: 'A skilled AC technician with extensive experience in installing, repairing, and maintaining air conditioning systems. Specializes in diagnosing issues, optimizing energy efficiency, and ensuring peak performance for residential and commercial cooling systems. Committed to providing prompt, reliable, and high-quality service to ensure your comfort in every season.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc5',
        name: 'Cap. Babangida Alimosho',
        image: doc5,
        speciality: 'Carpenter',
        // degree: 'MBBS',
        experience: '4 Years',
        about: 'A talented and detail-oriented carpenter with expertise in crafting, repairing, and installing wooden structures and furniture. Specializes in custom designs, precise measurements, and using high-quality materials to deliver durable and visually appealing results. Dedicated to transforming your spaces with expert craftsmanship and exceptional attention to detail.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc6',
        name: 'Cap. Abdulai Qudus',
        image: doc6,
        speciality: 'Carpenter',
        // degree: 'MBBS',
        experience: '4 Years',
        about: 'A talented and detail-oriented carpenter with expertise in crafting, repairing, and installing wooden structures and furniture. Specializes in custom designs, precise measurements, and using high-quality materials to deliver durable and visually appealing results. Dedicated to transforming your spaces with expert craftsmanship and exceptional attention to detail.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc7',
        name: 'Mech. Christopher Davis',
        image: doc7,
        speciality: 'Mechanic',
        // degree: 'MBBS',
        experience: '4 Years',
        about: 'A skilled mechanic who specializes in diagnosing and repairing a wide range of vehicle issues. From engine troubles to brake adjustments, this professional ensures your vehicle operates safely and efficiently. Whether you need routine maintenance or urgent repairs, the mechanic delivers quality service with attention to detail and expertise. Always ready to get you back on the road with confidence.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc8',
        name: 'Pl. Timothy White',
        image: doc8,
        speciality: 'Plumber',
        // degree: 'MBBS',
        experience: '3 Years',
        about: 'A dedicated plumber with expertise in diagnosing and resolving plumbing issues, including pipe repairs, leak fixes, and installation of fixtures. Committed to providing efficient and reliable solutions, focusing on preventing future problems and ensuring your water systems run smoothly. Always prepared to deliver quality service with attention to detail and a commitment to excellence.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc9',
        name: 'Elec. Chioma Luth',
        image: doc9,
        speciality: 'Electrician',
        // degree: 'MBBS',
        experience: '1 Years',
        about: 'An experienced electrician specializing in troubleshooting, repairing, and installing electrical systems with precision and care. Dedicated to ensuring safety and efficiency, with expertise in wiring, lighting, and power systems. Committed to providing reliable and high-quality service, focusing on preventive measures to avoid electrical hazards and ensure lasting solutions for your electrical needs.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc10',
        name: 'Ac. Qimor Lunin',
        image: doc10,
        speciality: 'AC MAN',
        // degree: 'MBBS',
        experience: '2 Years',
        about: 'A skilled AC technician with extensive experience in installing, repairing, and maintaining air conditioning systems. Specializes in diagnosing issues, optimizing energy efficiency, and ensuring peak performance for residential and commercial cooling systems. Committed to providing prompt, reliable, and high-quality service to ensure your comfort in every season.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc11',
        name: 'Cap. Aliyu Sulaimon',
        image: doc11,
        speciality: 'Carpenter',
        // degree: 'MBBS',
        experience: '4 Years',
        about: 'A talented and detail-oriented carpenter with expertise in crafting, repairing, and installing wooden structures and furniture. Specializes in custom designs, precise measurements, and using high-quality materials to deliver durable and visually appealing results. Dedicated to transforming your spaces with expert craftsmanship and exceptional attention to detail.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc12',
        name: 'Cap. Muyi Chinanza',
        image: doc12,
        speciality: 'Carpenter',
        // degree: 'MBBS',
        experience: '4 Years',
        about: 'A talented and detail-oriented carpenter with expertise in crafting, repairing, and installing wooden structures and furniture. Specializes in custom designs, precise measurements, and using high-quality materials to deliver durable and visually appealing results. Dedicated to transforming your spaces with expert craftsmanship and exceptional attention to detail.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc13',
        name: 'Mech. Gilmore Maman',
        image: doc13,
        speciality: 'Mechanic',
        // degree: 'MBBS',
        experience: '4 Years',
        about: 'A skilled mechanic who specializes in diagnosing and repairing a wide range of vehicle issues. From engine troubles to brake adjustments, this professional ensures your vehicle operates safely and efficiently. Whether you need routine maintenance or urgent repairs, the mechanic delivers quality service with attention to detail and expertise. Always ready to get you back on the road with confidence.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc14',
        name: 'Pl. C. Jones',
        image: doc14,
        speciality: 'Plumber',
        // degree: 'MBBS',
        experience: '3 Years',
        about: 'A dedicated plumber with expertise in diagnosing and resolving plumbing issues, including pipe repairs, leak fixes, and installation of fixtures. Committed to providing efficient and reliable solutions, focusing on preventing future problems and ensuring your water systems run smoothly. Always prepared to deliver quality service with attention to detail and a commitment to excellence.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc15',
        name: 'Elec. Junior Mike',
        image: doc15,
        speciality: 'Electrician',
        // degree: 'MBBS',
        experience: '1 Years',
        about: 'An experienced electrician specializing in troubleshooting, repairing, and installing electrical systems with precision and care. Dedicated to ensuring safety and efficiency, with expertise in wiring, lighting, and power systems. Committed to providing reliable and high-quality service, focusing on preventive measures to avoid electrical hazards and ensure lasting solutions for your electrical needs.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
]