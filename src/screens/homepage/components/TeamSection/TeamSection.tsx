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
                message: `Aut eos porro ex autem quasi quis obcaecati sunt alias! A, omnis earum.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Similique ex error earum unde, velit architecto illo a odio esse. 
                    Aut eos porro ex autem quasi quis obcaecati sunt alias! A, omnis earum.`
            },
            {
                name: 'Rishabh Kanaujia',
                designation: 'CTO',
                photoUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
                message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Similique ex error earum unde, velit architecto illo a odio esse. 
                    Aut eos porro ex autem quasi quis obcaecati sunt alias! A, omnis earum.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Similique ex error earum unde, velit architecto illo a odio esse. 
                    Aut eos porro ex autem quasi quis obcaecati sunt alias! A, omnis earum.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Similique ex error earum unde, velit architecto illo a odio esse. 
                    Aut eos porro ex autem quasi quis obcaecati sunt alias! A, omnis earum.`
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