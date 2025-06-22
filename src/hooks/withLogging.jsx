import { useEffect } from "react";
export function withLogging(WrappedComponent){
    function ComponentWithLogging(props){
        useEffect(()=>{
        },[])
        return <WrappedComponent {...props}/>
    }
    return ComponentWithLogging
}