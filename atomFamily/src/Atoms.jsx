import axios from 'axios'
import {atom, atomFamily, selectorFamily} from 'recoil'

export const todoAtom = atomFamily({
    key: 'todoAtom',
    default: selectorFamily({
        key: 'todoSelector',
        get: (id)=>async({get})=>{
            const response = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
            return response.data.todo;
        }
    })
})
