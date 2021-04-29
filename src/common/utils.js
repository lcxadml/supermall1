export function   debounce(func,delay=100){
    let timer = null;
    return function(){
        if(timer)clearTimeout(timer);
        timer = setTimeout(()=>{
            func();
        },delay)
    }
}