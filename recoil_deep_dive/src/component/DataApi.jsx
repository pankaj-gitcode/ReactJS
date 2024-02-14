import React, {useMemo, useState} from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { dataAtom } from '../atoms';

export default function DataApi(){
    // const dataService = useRecoilValue(dataAtom);
    const [dataService, setDataService] = useRecoilState(dataAtom);

    const dataRes = useMemo(async ()=>{
        const data = await fetch("https://fakestoreapi.com/products/");
        // console.log(data)
        const response = await data.json();
        console.log(response);
        setDataService(response);
        return response;
    }, [])

   

    return(
        <div>
            
            {dataService.length>0? (<p>Datas are {JSON.stringify(dataService[0])}</p>) : (<p>Loading data...</p>)}
            <p>{JSON.stringify(dataService[1])}</p>
        </div>
    )
}