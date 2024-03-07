import React, { Suspense, lazy } from "react";
import './App.css'
import { Counter } from "./component/Counter";

const LazyComponent = lazy(()=>import('./component/LazyComponent'));

export default function App(){

  return(
    <div>
      <Counter/>
      <Suspense fallback={'Loading...'}>
        <LazyComponent />
      </Suspense>
    </div>
  )
}

