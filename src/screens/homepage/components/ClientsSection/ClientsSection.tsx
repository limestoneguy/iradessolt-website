import './ClientsSection.css'


export default function ClientsSection() {
    let clients: { photo: string, about: string, name: string, message: string, id: number }[] = [
        {
            name: 'Digiscout',
            photo: process.env.PUBLIC_URL + '/client/digiscout.jpg',
            about: 'Online Scouting Platform',
            id: 1,
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima repellendus temporibus reprehenderit, tenetur dolorem architecto perferendis ad ut provident debitis odit maxime dolore, explicabo modi dignissimos atque iure ipsa molestiae nam nostrum!'
        },
        {
            name: 'Haveli UAVs',
            photo: process.env.PUBLIC_URL + '/client/havelli.jpg',
            about: 'Online Scouting Platform',
            id: 2,
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima repellendus temporibus reprehenderit, tenetur dolorem architecto perferendis ad ut provident debitis odit maxime dolore, explicabo modi dignissimos atque iure ipsa molestiae nam nostrum!'
        },

        {
            name: 'Instant Biology',
            photo: process.env.PUBLIC_URL + '/client/instant-biology.jpg',
            // photo: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            about: 'Online Scouting Platform',
            id: 3,
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima repellendus temporibus reprehenderit, tenetur dolorem architecto perferendis ad ut provident debitis odit maxime dolore, explicabo modi dignissimos atque iure ipsa molestiae nam nostrum!'
        },
        {
            name: 'M.I.T, Manipal',
            photo: process.env.PUBLIC_URL + '/client/manipal.jpg',
            // photo: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            about: 'Online Scouting Platform',
            id: 4,
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima repellendus temporibus reprehenderit, tenetur dolorem architecto perferendis ad ut provident debitis odit maxime dolore, explicabo modi dignissimos atque iure ipsa molestiae nam nostrum!'
        },
        {
            name: 'Cyber Security of U.P. (Deoria)',
            photo: process.env.PUBLIC_URL + '/client/cyber-sec.jpg',
            // photo: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            about: 'Online Scouting Platform',
            id: 5,
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima repellendus temporibus reprehenderit, tenetur dolorem architecto perferendis ad ut provident debitis odit maxime dolore, explicabo modi dignissimos atque iure ipsa molestiae nam nostrum!'
        },
        {
            name: 'Million Minds',
            photo: process.env.PUBLIC_URL + '/client/million.png',
            // photo: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            about: 'Online Scouting Platform',
            id: 6,
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima repellendus temporibus reprehenderit, tenetur dolorem architecto perferendis ad ut provident debitis odit maxime dolore, explicabo modi dignissimos atque iure ipsa molestiae nam nostrum!'
        },
        {
            name: 'Panchayati Raj Deoria, Govt. Of Uttar Pradesh',
            photo: process.env.PUBLIC_URL + '/client/sdm.jpg',
            // photo: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            about: 'Online Scouting Platform',
            id: 7,
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima repellendus temporibus reprehenderit, tenetur dolorem architecto perferendis ad ut provident debitis odit maxime dolore, explicabo modi dignissimos atque iure ipsa molestiae nam nostrum!'
        },
        {
            name: 'S.M.V.I.T.M. (VTU)',
            photo: process.env.PUBLIC_URL + '/client/vtm.jpg',
            // photo: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            about: 'Online Scouting Platform',
            id: 8,
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima repellendus temporibus reprehenderit, tenetur dolorem architecto perferendis ad ut provident debitis odit maxime dolore, explicabo modi dignissimos atque iure ipsa molestiae nam nostrum!'
        },
    ];

    const clientsDom = clients.map(value => {
        return (
            // <ClientCard about={value.about} message={value.message} name={value.name} photo={value.photo} key={value.id} id={value.id} />
            <div className="" key={value.id}>
                <div className="image-container">
                    <img className='w-full h-full' src={value.photo} alt="" />
                </div>
                <p className="text-3xl md:text-xl bottom-0 text-center w-full text-white mt-2 font-bold">{value.name}</p>
            </div>
        );
    });
    return (
        <section className="gradient-background py-16" id='client'>
            <div className="container mx-auto">
                <h3 className="text-primary text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-16">OUR CLIENTS</h3>
                <div className="mx-4 grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-4">
                    {clientsDom}
                </div>
            </div>
        </section>
    );
}