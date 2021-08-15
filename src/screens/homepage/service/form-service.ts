import { Subject } from "rxjs";

const formState = new Subject();

export const formService = {
    changeServiceLabel: (formServiceElement: string)=>formState.next(formServiceElement),
    getServiceObs: ()=>formState.asObservable()
}