import './FaceSection.css'
// import innovationPng from '../../../../assets/icons/png/innovation.png';
import facePoster from '../../../../assets/icons/png/face-poster.png';

function FaceSection() {
    return (
        <section className='face-section w-full grid items-center'>
            <div className="bg-secondary py-7 px-2">
                <div className="container mx-auto flex place-items-center justify-between flex-col sm:flex-row">
                    {/* <img src={facePoster} className='block sm:hidden w-full max-w-3xl' alt="" /> */}
                    <div className="mt-4 sm:mt-0">
                        <h1 className='text-primary font-bold text-4xl md:text-5xl lg:text-7xl'>IRADesign & <br /> Solutions</h1>
                        <div className="grid gap-2 mt-4">
                            <div className="flex items-center">
                                {/* <img src={innovationPng} alt="" /> */}
                                <p className='text-white text-lg lg:text-3xl ml-1'>Innovate</p>
                            </div>
                            <div className="flex">
                                <p className='text-white text-lg lg:text-3xl ml-1'>Create</p>
                            </div>
                            <div className="flex">
                                <p className='text-white text-lg lg:text-3xl ml-1'>Fascinate</p>
                            </div>
                        </div>
                    </div>
                    <img src={facePoster} className='sm:block hidden w-1/2 max-w-3xl' alt="" />
                </div>
            </div>
        </section>
    );
}

export default FaceSection;