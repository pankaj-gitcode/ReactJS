import { atom } from "recoil";

export const todoAtom = atom({
    key: 'todoAtom',
    default: {
        id:1,
        title: 'go to gym',
        description: 'Full body workout',
        completed: 'false'
    }
})