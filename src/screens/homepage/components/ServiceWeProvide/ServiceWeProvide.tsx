import { ServiceList } from '../../../../shared/ServiceList'
import './ServiceWeProvide.css'
import WebsiteIcon from '../../../../assets/icons/png/website.png'
import MobileIcon from '../../../../assets/icons/png/mobile.png'
import BlockChainIcon from '../../../../assets/icons/png/blockchain.png'
import IOTIcon from '../../../../assets/icons/png/iot.png'
import ConsultancyIcon from '../../../../assets/icons/png/consultancy.png'
import GrowthIcon from '../../../../assets/icons/png/growth.png'
import WorkshopIcon from '../../../../assets/icons/png/training.png'
import UIIcon from '../../../../assets/icons/png/web-design.png'
import { formService } from '../../service/form-service'

export default function ServiceWeProvide() {

    function onServiceClicked(event: string) {
        formService.changeServiceLabel(event);
        document.getElementById('getInTouchSection')?.scrollIntoView({behavior: 'smooth'});
    }

    const serviceList = ServiceList.map(value => {
        let icon;
        switch (value.value) {
            case 'website':
                icon = WebsiteIcon;
                break;
            case 'mobile':
                icon = MobileIcon;
                break;
            case 'blockchain':
                icon = BlockChainIcon;
                break;
            case 'iot':
                icon = IOTIcon;
                break;
            case 'consultancy':
                icon = ConsultancyIcon;
                break;
            case 'bussiness_accelration':
                icon = GrowthIcon;
                break;
            case 'workshop':
                icon = WorkshopIcon;
                break;
            case 'ui/ux_design':
                icon = UIIcon;
                break;
            default:
                icon = WebsiteIcon;
                break;
        }
        return (
            <div key={value.value} className='grid place-items-center transition-all cursor-pointer service-card p-3' onClick={() => onServiceClicked(value.value)}>
                <div className="h-16 w-16 md:h-20 md:w-20 opacity-60 transition">
                    <img src={icon} alt="Website" className='w-full h-full' />
                </div>
                <p className="text-white font-bold text-2xl mt-6">{value.label}</p>
            </div >
        )
    });


    return (
        <section className="bg-secondary py-16">
            <h3 className="text-primary text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-16">SERVICES WE PROVIDE</h3>
            <div className="container mx-auto grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6 md:gap-y-8">
                {serviceList}
            </div>
        </section>
    )
}