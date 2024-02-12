import React from 'react'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom } from './atoms'

export default function App(){
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
  const messagingCount = useRecoilValue(messagingAtom);
  const [messaging, setMessagingCount] = useRecoilState(messagingAtom);
  const notificationsCount = useRecoilValue(notificationsAtom);

  return(
    <div>
      <button>Home</button>
      <button>My Network ({networkCount>=100?"99+":networkCount})</button>
      <button>Jobs ({jobsCount})</button>
      <button>Messaging ({messagingCount})</button>
      <button>Notifications ({notificationsCount})</button>
      <button onClick={()=>{setMessagingCount(messagingCount=>messagingCount+1)}}>Me</button>
    </div>
  )
}