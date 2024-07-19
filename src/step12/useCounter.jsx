import {useState} from "react";
export function useCounter(inValue){
    const [count, setCount] = useState(inValue);
    const increase = ()=> { setCount((count) => count+1)};
    const decrease = () => { setCount((count) => Math.max(count-1, 0))};  //감소시키되 영에서 멈춤
    return [count, increase, decrease];   
}