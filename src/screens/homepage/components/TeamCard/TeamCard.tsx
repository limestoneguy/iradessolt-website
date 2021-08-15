import './TeamCard.css'

export default function TeamCard(props: { teamDetails: { name: string, designation: string, message: string, photoUrl: string } }) {
    return (
        <div className='grid place-items-center'>
            <div className="image-container rounded-full overflow-hidden w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80">
                <img src={props.teamDetails.photoUrl} alt="Profile" className='w-full h-full' />
            </div>

            <h2 className='text-white text-center font-bold mt-4 text-4xl lg:text-5xl'>{props.teamDetails.name}</h2>
            <h3 className='text-white font-bold text-2xl lg:text-3xl opacity-50'>{props.teamDetails.designation}</h3>
            <p className='text-white text-center mt-4 sm:mt-10 sm:text-2xl lg:text-3xl message relative px-4 sm:px-9 mx-1 sm:mx-0'>{props.teamDetails.message}</p>
        </div>
    )
}