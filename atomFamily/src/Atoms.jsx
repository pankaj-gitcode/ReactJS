import { atom } from 'recoil'

export const todo1Atom = atom({
    key: 'todo1Atom',
    default:{
        id:1, 
        title:'go to gym', 
        description: 'go @7AM'
    }
})

export const todo2Atom = atom({
    key: 'todo2Atom',
    default: {
        id:2, 
        title:'go to walk', 
        description: 'go @10AM'
    }
})