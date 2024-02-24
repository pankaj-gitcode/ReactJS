import {atom, selector} from 'recoil'

export const networkAtom = atom({
    key: 'networkAtom',
    default: 100
})

export const jobsAtom = atom({
    key: 'jobsAtom',
    default: 101
})

export const messagingAtom = atom({
    key: 'messagingAtom',
    default: 102
})

export const notificationsAtom = atom({
    key: 'notificatonsAtom',
    default: 103
})

export const serviceSelector = selector({
    key: 'serviceSelector',
    get:({get})=>{
        const network = get(networkAtom);
        const jobs = get(jobsAtom);
        const message = get(messagingAtom);
        const notifications = get(notificationsAtom);

        const allServices = network + jobs + message+notifications;
        return allServices;
    }
})

export const fetchDataAtom = atom({
    key: 'fetchDataAtom',
    default: {
        network: 0,
        jobs: 0,
        messaging: 0,
        notifications: 0
    }
})

export const fetchDataSelector = selector({
    key: 'fetchDataSelector',
    get: ({get})=>{
        const services = get(fetchDataAtom);
        return services.network + services.jobs + services.messaging + services.notifications;
    }
})
