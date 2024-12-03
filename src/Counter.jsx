import React, {useState, useEffect} from 'react';

function Counter(){
    //State for the count
    const [count, setCount]=useState(0);
    //State for wheather the counter is running
    const [isRunning, setIsRunning]=useState(false);

    //useEffect to handle the interval
    useEffect(()=>{
       let interval;
       if(isRunning){
        interval=setInterval(()=>{
            setCount((prevCount)=>prevCount+1);//increment the count
        }, 1000);
       }
      return ()=>clearInterval(interval);//Cleanup the interval on unmount or when isRunning changes

    }, [isRunning]);

    const startCounter=()=>setIsRunning(true);//start the counter
    const stopCounter=()=>setIsRunning(false);//Stop the counter

    return(
      <div style={{textAlign:"center", padding:"20px",width:"550px",height:"400px",border:"1px Solid",
      paddingTop:"110px",boxSizing:"border-box",backgroundColor:"orange"}}>
        <h1>Counter: <span style={{color:"blue"}}>{count}</span></h1>
        <button onClick={startCounter} style={{marginRight:"10px"}}>
            Start
        </button>
        <button onClick={stopCounter}>Stop</button>
      </div>
    );
}
export default Counter