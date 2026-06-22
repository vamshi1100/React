import React, { useCallback, useMemo, useState } from 'react'
import UseCallbackChildFun from './UseCallbackChildFun';

const UseMemoCallbackRef = () => {
  let [prime, setPrime] = useState(0);
  let [isdark, setIsDark] = useState(false);
  let [funValue, setFunValue] = useState(0);

  const funHelper = useCallback(() => {
    return <h1>hiii</h1>
  }, [funValue]);

  const nthPrime = (n) => {
    let count = 0;
    let num = 1;
    while (count < n) {
      num++;
      let isPrime = true;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        count++;
      }
    }
    return num;
  };

  let nthPrimeValue = useMemo(() => {
    return nthPrime(Number(prime))
  }, [prime]);

  debugger
  return (
    <div className='w-[400px] h-[400px] m-8 ml-10 border-amber-300 border-2'>
      <button onClick={
        () => {
          if (isdark) { setIsDark(false) } else { setIsDark(true) }
        }} className='border-black border-2'>
        Toggle
      </button>
      <h1 className={isdark ? 'bg-black text-amber-100' : ''}>UseMemoCallbackRef {prime} && {nthPrimeValue}</h1>
      <input type="text" className=' border-amber-300 border-2' onChange={(e) => { setPrime(e.target.value) }} value={prime} />
      <UseCallbackChildFun funHelper={funHelper} funValue={funValue} />
    </div>
  )
}

export default UseMemoCallbackRef;