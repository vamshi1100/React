import { useState } from "react";

const useOnlineOffline=()=>{
    let [onlineStatus,setOnlineStatus]=useState('online')
window.addEventListener('online', () => {
    setOnlineStatus('online')
    console.log("You are back online!");
});

window.addEventListener('offline', () => {
    setOnlineStatus('offline')
    console.log("Connection lost. You are offline.");
});

    return onlineStatus;
}
export default useOnlineOffline;