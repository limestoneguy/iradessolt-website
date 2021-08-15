import './TeamSection.css';
import TeamCard from '../TeamCard/TeamCard';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function TeamSection() {
    const teamArray: { name: string, designation: string, message: string, photoUrl: string }[] =
        [
            {
                name: 'Chitransh Srivastava',
                designation: 'CEO',
                photoUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
                message: `Chitransh is a Serial Entrepreneur, Crypto Millionaire, Motivational Speaker and Philanthropist. Having an experience 
                of serving National and International Government, Private and Defence Institutions from multiple disciplines, he truly loves to tackle new problems, and apply
                 skills learnt over the years from various fields while absorbing new on the go. He is also a published writer, cook and Adventure seeker`
            },
            {
                name: 'Rishabh Kanaujia',
                designation: 'CTO',
                photoUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
                message: `Rishabh is a Full Stack Developer with over half a decade of experience in the field. Having worked with international designers and world renowned clients, his performance and work are 
                always miles ahead of expectations. Caffeine and Crypto are the two love of his life.`
            },
            {
                name: 'Aditya Srivastava',
                designation: 'CTO',
                photoUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
                message: `Aditya is DB and Backend Developer with unmatched experience in Blockchain. 
                Having developed not only web services, platforms and crypto, he is always looking for a new problem to solve, a new technology to acquire. "Late to bed and Early to Rise,
                makes a hard working Entrepreneur Successful" is his words of wisdom`
            }
        ];

    const carouselItems = teamArray.map(value => <div className="item" key={value.name}><TeamCard teamDetails={value} /></div>);

    return (
        <section className='min-h-screen bg-secondary py-8 sm:py-16'>
            <div className="container mx-auto">
                <h3 className="text-primary text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-16">OUR TEAM</h3>
                <OwlCarousel className='owl-theme' items={1} loop autoplay autoplayHoverPause animateOut={'fadeOutAnimation'} animateIn={'customFadeIn'} margin={10} dots={true} nav>
                    {carouselItems}
                </OwlCarousel>
            </div>
        </section>
    );
}