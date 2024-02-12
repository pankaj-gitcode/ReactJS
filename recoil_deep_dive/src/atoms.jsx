import {atom} from 'recoil'

export const networkAtom = atom({
    key: 'networkAtom',
    default: 100
});

export const jobsAtom = atom({
    key: 'jobsAtom',
    default: 102
});

export const messagingAtom = atom({
    key: 'messagingAtom',
    default: 103
});

export const notificationsAtom = atom({
    key: 'notificationsAtom',
    default: 105
})