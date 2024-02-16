//Home My Network (99+)Jobs (100)Messaging (112)Notifications (104)MeTotal (417)

import React, { useEffect } from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { dataAtom, jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalServiceSelector } from './atoms'
import axios from 'axios'

export default function App(){
  console.log("APP")
  return(
    <div>
      <RecoilRoot>
        <MainApp />
      </RecoilRoot>     
   </div>
  )
}

const MainApp = ()=>{
  const networkCount = useRecoilValue(networkAtom); 
  const jobsCount = useRecoilValue(jobsAtom);
  const msgCount = useRecoilValue(messagingAtom);
  const setMsgCount = useSetRecoilState(messagingAtom);
  const notificationsCount = useRecoilValue(notificationsAtom);

  const totalServicesCount = useRecoilValue(totalServiceSelector); 

  const [dataCount, setDataCount] = useRecoilState(dataAtom);

  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const response = await fetch("https://sum-server.100xdevs.com/notifications");
        const res = await response.json();
        setDataCount(res);
      }catch(err){console.log(err)}
    }
    fetchData();
  }, [totalServicesCount])

//  useEffect(()=>{
//   axios.get("https://sum-server.100xdevs.com/notifications")
//   .then((res)=>{
//     setDataCount(res.data);
//     console.log(`Axios.get: ${res.data}`)
//   })
//  }, [msgCount, totalServicesCount])
  
  console.log(`DETAILS: ${dataCount.jobs}`)

  // const serviceCount = useEffect

  return (
    <div>
      <button>Home</button>
      <button>My Network ({dataCount.network})</button>
      <button>Jobs ({jobsCount})</button>
      <button>Messaging ({msgCount})</button>
      <button>Notifications ({notificationsCount})</button>
      <button onClick={()=>{setMsgCount(msgCount=>msgCount+1)}}>Me ({totalServicesCount})</button>
      
    </div>
  );
}



