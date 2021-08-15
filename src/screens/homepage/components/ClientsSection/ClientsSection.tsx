import './ClientsSection.css'
import ClientCard from '../ClientCard/ClientCard'


export default function ClientsSection() {
    let clients: { photo: string, about: string, name: string, message: string, id: number }[] = [
        {
            name: 'Digiscout',
            photo: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            about: 'Online Scouting Platform',
            id: 1,
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima repellendus temporibus reprehenderit, tenetur dolorem architecto perferendis ad ut provident debitis odit maxime dolore, explicabo modi dignissimos atque iure ipsa molestiae nam nostrum!'
        },
        {
            name: 'Client 2',
            photo: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            about: 'Online Scouting Platform',
            id: 2,
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima repellendus temporibus reprehenderit, tenetur dolorem architecto perferendis ad ut provident debitis odit maxime dolore, explicabo modi dignissimos atque iure ipsa molestiae nam nostrum!'
        }
    ];

    const clientsDom = clients.map(value => {
        return (
            <ClientCard about={value.about} message={value.message} name={value.name} photo={value.photo} key={value.id} id={value.id} />
        );
    });
    return (
        <section className="min-h-screen gradient-background py-16">
            <div className="container mx-auto">
                <h3 className="text-primary text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-16">OUR CLIENTS</h3>
                <div className="grid gap-2 mt-4">
                    {clientsDom}
                </div>
            </div>
        </section>
    );
}