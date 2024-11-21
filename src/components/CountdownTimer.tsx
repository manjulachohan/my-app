import React, { useState, useEffect } from "react"

const CountdownTimer:React.FC = () => {

const [time, setTime] = useState(0);
const [isRunnig,setIsRunning] = useState(false);
const [remainingTime, setRemainingTime] = useState(0)


useEffect(() =>{
  let timer: NodeJS.Timeout;
  if (isRunnig && remainingTime > 0 ){
    timer = setInterval(() =>{
      setRemainingTime((prev) => prev - 1)
    }, 1000)
  }
  else if (remainingTime === 0){
    setIsRunning(false)
  }
  return () => clearInterval(timer);
} , [isRunnig, remainingTime])

const handleStart = ()=> {
  if (time > 0 ) {
    setRemainingTime(time)
    setIsRunning(true)
  }
  
}

const handlePause = () => {
  setIsRunning(false)
}

const handleReset = () =>{
  setIsRunning(false)
  setRemainingTime(0)
  setTime(0)
}

return(
  <div className="flex flex-col min-h-screen
  items-center justify-center bg-gradient-to-br
  from-black to-grey">
  

  <h1 className="text-3xl font-bold uppercase mb-6 text-black">
    Counterdown Time</h1>
    <input
    type="number"
    className="border-2 bordre-grey-400 bg-transparent p-3 m-6 text-sky-400 text-xl rounded"
    placeholder="Enter Time In Seconded"
    value={time > 0 ? time : ""}
    onChange={(e) => setTime(Number(e.target.value))}
    />


<div className="text-2xl font-semibold uppercase mb-6 text-white ">
  {remainingTime} seconds remaining
</div>

<div> 
<button
onClick={handleStart}
className="text-white px-8 py-4 rounded-lg font-normal
 bg-gradient-to-r from-green-500 to-ligthgreen-500
 hover:from-green-600 hover:to-lightgreen-600" >
Start 
</button>

<button
onClick={handlePause}
className="text-white px-8 py-4 rounded-lg font-normal
 bg-gradient-to-r from-blue-500 to-skyblue-500
 hover:from-blue-600 hover:to-skyblue-600" >
Pause
</button>

<button
onClick={handleReset}
className="text-white px-8 py-4 rounded-lg font-normal
 bg-gradient-to-r from-red-500 to-lightpink-500
 hover:from-red-600 hover:to-lightpink-600" >
Reset
</button>

 </div>

</div>
)} 
export default CountdownTimer