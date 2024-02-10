import {atom, selector} from 'recoil'

export const countAtom = atom({
    key: 'CountAtom',
    default: 0
})

//selector
export const EvenSelector = selector({
    key: 'evenSelector',
    get: ({get})=>{
        const count = get(countAtom);
        return count % 2;
    }
})