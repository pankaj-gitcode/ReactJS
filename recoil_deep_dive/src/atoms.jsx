import {atom, selector} from 'recoil'

export const networkAtom = atom({
    key: 'networkAtom',
    default: 100
})

export const jobsAtom = atom({
    key: 'jobsAtom',
    default: 102
})

export const messagingAtom = atom({
    key: 'messagingAtom',
    default: 103
})

export const notificationsAtom = atom({
    key: 'notificationsAtom',
    default: 104
})

export const totalServiceSelector = selector({
    key: 'totalServiceSelector',
    get:({get})=>{
        const networkValue = get(networkAtom);
        const jobsValue = get(jobsAtom);
        const messagingValue = get(messagingAtom);
        const notificationsValue = get(notificationsAtom);
        const total = networkValue + jobsValue + messagingValue + notificationsValue;
        return total;

    }
})

export const dataAtom = atom({
    key: 'dataAtom',
    default: {
        network: 1,
        jobs: 2,
        messaging: 3,
        notifications: 4
    }
})


