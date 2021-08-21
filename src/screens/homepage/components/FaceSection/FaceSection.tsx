import './FaceSection.css'
// import innovationPng from '../../../../assets/icons/png/innovation.png';
// import facePoster from '../../../../assets/icons/png/face-poster.png';
import Sphere3D from './Sphere3D/Sphere3D';

function FaceSection() {
    return (
        <section className='face-section w-full grid items-center' id='home'>
            <div className="content grid place-items-center max-w-4xl mx-auto px-7 py-3 relative">
                <h1 className='text-primary font-bold text-4xl md:text-5xl lg:text-7xl text-center'>IRADesign & Solutions</h1>
                <div className="flex gap-2 mt-4 font-bold">
                    <p className='text-white text-lg lg:text-3xl ml-1'>Innovate.</p>
                    <p className='text-white text-lg lg:text-3xl ml-1'>Create.</p>
                    <p className='text-white text-lg lg:text-3xl ml-1'>Fascinate.</p>
                </div>
            </div >
            <div className="absolute z-0 h-full w-full">
                <Sphere3D />
            </div>
        </section >
    );
}

export default FaceSection;