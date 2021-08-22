import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

import './Navbar.css'
import { useState } from 'react';

function Navbar() {

    let [isMenuVisible, setMenuToggle] = useState<boolean>(false);

    function gotoView(id: string) {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }

    function toggleMenu() {
        console.log('hello');

        setMenuToggle(!isMenuVisible);
    }

    return (
        <nav className='navbar grid place-items-center h-16 top-0 z-10 px-2'>
            <div className="container mx-auto flex place-items-center justify-between">
                <div className="image-container w-14">
                    <img src={process.env.PUBLIC_URL + "/logo.png"} alt="" className="w-full h-full" />
                </div>
                <div className="sm:flex space-x-3 place-items-center mr-3 hidden">
                    <p className="text-white hover:opacity-100 opacity-70 cursor-pointer transition-all text-lg" onClick={() => gotoView('home')}>Home</p>
                    <p className="text-white hover:opacity-100 opacity-70 cursor-pointer transition-all text-lg" onClick={() => gotoView('service')}>Services</p>
                    <p className="text-white hover:opacity-100 opacity-70 cursor-pointer transition-all text-lg" onClick={() => gotoView('client')}>Client</p>
                    <p className="text-white hover:opacity-100 opacity-70 cursor-pointer transition-all text-lg" onClick={() => gotoView('team')}>Team</p>
                </div>
                <div className="flex space-x-3 place-items-center mr-3 sm:hidden">
                    <div className="text-white text-xl" onClick={() => toggleMenu()}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </div>
            </div>

            {isMenuVisible && <div className="sm:hidden absolute grid  w-40 gap-2 px-4 top-16 mt-2 right-2 bg-secondary py-2 z-10 rounded-md">
                <p className="text-white text-lg font-bold cursor-pointer" onClick={() => { gotoView('home'); toggleMenu() }}>Home</p>
                <p className="text-white text-lg font-bold cursor-pointer" onClick={() => { gotoView('service'); toggleMenu() }}>Service</p>
                <p className="text-white text-lg font-bold cursor-pointer" onClick={() => { gotoView('client'); toggleMenu() }}>Clients</p>
                <p className="text-white text-lg font-bold cursor-pointer" onClick={() => { gotoView('team'); toggleMenu() }}>Team</p>
            </div>}
        </nav>
    )
}

export default Navbar;