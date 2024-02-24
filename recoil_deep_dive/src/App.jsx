import React, { useEffect } from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { fetchDataAtom, fetchDataSelector, jobsAtom, messagingAtom, networkAtom, notificationsAtom, serviceSelector } from './atoms'
import axios from 'axios'
export default function App(){
  return (
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
  const notificationsCount = useRecoilValue(notificationsAtom);
  const allServices = useRecoilValue(serviceSelector);

  const setMsgCount =  useSetRecoilState(messagingAtom);

  const [datas, setDatas] = useRecoilState(fetchDataAtom);
  const fetchData =  useRecoilValue(fetchDataSelector);
  

  // useEffect(()=>{
  //   const fetchData = async()=>{
  //     const response = await fetch("https://sum-server.100xdevs.com/notifications");
  //     const res = await response.json();
  //     setDatas(res);
  //   }
  //   fetchData();
  // }, [msgCount])

  useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/notifications")
    .then((res)=>{
      setDatas(res.data)
    })
    .catch(err=>console.log(`ERROR: ${err}`))
  }, [msgCount])
  

  return(
    <div>
      <button>Home</button>
      <button>Networks ({datas.network>=100?"99+":datas.network})</button>
      <button>Jobs ({datas.jobs})</button>
      <button>Messaging ({datas.messaging})</button>
      <button>Notifications ({datas.notifications})</button>

      <button onClick={()=>{setMsgCount(count=>count+1)}}>Me ({allServices})</button>
      <button onClick={()=>{setMsgCount(count=>count+1)}}>Me ({fetchData})</button>
    </div>
  )
}