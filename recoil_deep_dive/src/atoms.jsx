import { atom, selector } from "recoil";

export const countAtom = atom({
    key: 'countAtom',
    default: 0
})

export const countSelector = selector({
    key: 'countSelector',
    get:({get})=>{
        const selectCount = get(countAtom);
        return selectCount%2==0?'EVEN':'ODD'
    }
})

export const dataAtom = atom({
   key: 'dataAtom',
   default: {
    network: 100,
    jobs: 101,
    messaging: 102,
    notifications: 103
   } 
})