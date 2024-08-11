import { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import Image from "../assets/logo.svg"
// Profile Dropdown
const ProfileDropDown = (props) => {

    const [state, setState] = useState(false)
    const profileRef = useRef()

    const navigation = [
        { title: "View profile", path: "/" },
        { title: "Recipe", path: "/recipes" },
        { title: "Sign out", path: "*" },
    ]

    
    useEffect(() => {
        const handleDropDown = (e) => {
            if (!profileRef.current.contains(e.target)) setState(false)
        }
        document.addEventListener('click', handleDropDown)
    }, [])

    return (
        <div className={`relative ${props.class}`}>
            <div className="flex items-center space-x-4">
                <button ref={profileRef} className="w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 ring-1 lg:focus:ring-green-600"
                    onClick={() => setState(!state)}
                >
                    <img
                        src={Image}
                        className="w-full h-full rounded-full"
                    />
                </button>
                <div className="lg:hidden">
                    <span className="block">Micheal John</span>
                    <span className="block text-sm text-gray-500">john@gmail.com</span>
                </div>
            </div>
            <ul className={`bg-white top-12 right-0 mt-5 space-y-5 lg:absolute lg:border lg:rounded-md lg:text-sm lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${state ? '' : 'lg:hidden'}`}>
                {
                    navigation.map((item, idx) => (
                        <li key={idx}>
                            <Link className="block text-gray-600 text-center font-semibold lg:hover:bg-gray-100 lg:p-2.5" to={item.path}>
                                {item.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
export default ProfileDropDown