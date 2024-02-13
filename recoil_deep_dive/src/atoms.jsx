import {atom, selector} from 'recoil'

export const networkAtom = atom({
    key: 'networkAtom',
    default: 101
});

export const jobsAtom = atom({
    key: 'jobsAtom',
    default: 100
});

export const messagingAtom = atom({
    key: 'messagingAtom',
    default: 103
});

export const notificationsAtom = atom({
    key: 'notificationsAtom',
    default: 104 
});

export const servicesSelector = selector({
    key: 'totalServices',
    get: ({get})=>{
        const network = get(networkAtom);
        const jobs = get(jobsAtom);
        const msg = get(messagingAtom);
        const notifications = get(notificationsAtom);
        
        const total = network + jobs + msg + notifications;
        return total;
    }
})
