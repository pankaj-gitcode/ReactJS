import React, { useMemo } from 'react'
import {RecoilRoot, useRecoilValue, useResetRecoilState, useSetRecoilState} from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, servicesSelector } from './atoms'

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
  const msgCount = useRecoilValue(messagingAtom);
  const setMsgCount = useSetRecoilState(messagingAtom);
  const notificationsCount = useRecoilValue(notificationsAtom);

  const AllServices = useMemo(()=>{
    const res = networkCount + jobsCount + msgCount + notificationsCount;
    return res;
  }, [networkCount, jobsCount, msgCount, notificationsCount]);

  const totalServices = useRecoilValue(servicesSelector)

  return(
    <div>
      <button>Home</button>
      <button>My Network ({networkCount>=100? "99+":networkCount})</button>
      <button>Jobs ({jobsCount})</button>
      <button>Messaging ({msgCount})</button>
      <button>Notifications ({notificationsCount})</button>
      <button onClick={()=>{setMsgCount(msgCount=>msgCount+1)}}>Me</button>
      {console.log(`${msgCount}`)}

      <button>Total ({totalServices})</button>
    </div>
  )
}