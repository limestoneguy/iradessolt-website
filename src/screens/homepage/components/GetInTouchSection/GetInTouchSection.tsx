import GetInTouchForm from './GetInTouchForm/GetInTouchForm';
import './GetInTouchSection.css'

export default function GetInTouchSection() {
    return (
        <section className="bg-primary py-8 sm:py-16">
            <div className="container mx-auto">
                <h3 className="text-secondary text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-16">GET IN TOUCH</h3>
                <GetInTouchForm />
            </div>
        </section>
    );
}