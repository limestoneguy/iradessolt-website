import './Navbar.css'

function Navbar() {

    function gotoView(id: string) {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <nav className='navbar h-16 top-0 z-10'>
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
            </div>
        </nav>
    )
}

export default Navbar;