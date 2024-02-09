//import context hook
import {useContext, createContext} from 'react'

//initialse the crateContext
const countContext = createContext();

//define useContext
export const useCount = ()=>{
    return useContext(countContext);
}

//provider to wrap all the components in App.jsx
export const CountProvider = countContext.Provider;