import React from 'react';
import { ServiceList } from '../../../../../shared/ServiceList';
import { formService } from '../../../service/form-service';
import './GetInTouchForm.css'

export default class GetInTouchForm extends React.Component {
    state: { name: string, phone: string, email: string, message: string, service_required: string };
    constructor(props: {}) {
        super(props);
        this.state = { name: '', phone: '', email: '', message: '', service_required: 'null' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        formService.getServiceObs().subscribe(value => {
            this.handleChange({ target: { name: 'service_required', value } });
        });
    }

    handleChange(event: any) {
        let tempState = this.state;
        tempState[event.target.name as 'name'] = event.target.value
        this.setState(tempState);
    }

    handleSubmit(event: any) {
        event.preventDefault();
    }

    getInTouchForm() {
        return (
            <form className='rounded-xl bg-secondary mx-2 px-8 py-6 grid gap-4' onSubmit={this.handleSubmit}>
                <h3 className='text-white text-2xl sm:text-3xl md:text-4xl'>Please fill the form</h3>
                <input type="text" name='name' value={this.state.name} onChange={this.handleChange} placeholder='Name' className='rounded-md block font-bold px-3 py-2 text-lg' />
                <input type="tel" name='phone' value={this.state.phone} onChange={this.handleChange} placeholder='Phone' className='rounded-md block font-bold px-3 py-2 text-lg' />
                <input type="email" name='email' value={this.state.email} onChange={this.handleChange} placeholder='Email' className='rounded-md block font-bold px-3 py-2 text-lg' />
                <select className='rounded-md block font-bold px-3 py-2 text-lg' name="service_required" id="service_required" value={this.state.service_required} onChange={this.handleChange}>
                    <option value={'null'} disabled>Select Service</option>
                    {this.serviceList}
                </select>
                <textarea name='message' value={this.state.message} onChange={this.handleChange} placeholder='Message' className='rounded-md block font-bold px-3 py-2 text-lg' />
                <input type="submit" value='Submit' className='rounded-md mt-3 block font-bold px-3 py-2 text-lg bg-primary text-secondary' />
            </form>
        );
    }

    serviceList = ServiceList.map(value => (<option key={value.value} value={value.value}>{value.label}</option>))

    render() {
        return (
            <div className="mx-auto max-w-3xl" id='getInTouchSection'>
                {/* {this.getInTouchForm()} */}
                <div className="rounded-xl bg-secondary mx-2 px-8 py-6 grid gap-4">
                    <h3 className='text-white text-2xl sm:text-3xl md:text-4xl'>Please contact us at</h3>
                    <a href="mailto:Info@iradessolt.com" className="text-lg opacity-70 hover:opacity-100 text-white hover:text-primary transition-all">Info@iradessolt.com </a>
                    <a href="mailto:SriChitransh@iradessolt.com" className="text-lg opacity-70 hover:opacity-100 text-white hover:text-primary transition-all">SriChitransh@iradessolt.com</a>
                    <a href="tel:+917892298698" className="text-lg opacity-70 hover:opacity-100 text-white hover:text-primary transition-all">+91-7892298698</a>
                </div>
            </div>
        );
    }
}