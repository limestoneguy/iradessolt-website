import './ClientCard.css';
import posterBg from '../../../../assets/icons/png/client-card-ellipse.png'

export default function ClientCard(props: { photo: string, about: string, name: string, message: string, id: number }) {
    return (
        <div className='mx-auto max-w-5xl client-card-bg place-items-center md:flex md:space-x-2 relative'>
            <img className='object-cover w-full md:h-full md:w-2/5' src={props.photo} alt="" />
            <div className="px-2 my-3">
                <p className="text-3xl sm:text-4xl text-white font-bold">{props.name}</p>
                <p className="text-white font-bold opacity-50">{props.about}</p>
                <p className="text-white mt-4">{props.message}</p>
            </div>
            <div className="absolute top-0 right-0 h-3/4">
                <img src={posterBg} className='h-full' alt="" />
            </div>
        </div>
    );
    }