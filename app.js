window.addEventListener("load",()=>{
    setInterval(()=>{

        let get_time = new Date();
        let get_hrs = get_time.getHours();
        let get_min = get_time.getMinutes();
        let get_sec = get_time.getSeconds();
        let session = document.querySelector(".session_only");
    
        if(get_hrs > 12) {
            get_hrs-=12;
            session.innerText = "PM"
        }
    
        if(get_hrs == 0) {
            get_hrs == 12;
            session.innerText = "AM"
        }
    
        if(get_hrs < 10) {
            get_hrs = "0" + get_hrs;
        }

        if(get_min < 10) {
            get_min = "0" + get_min;
        } 

        if(get_sec < 10) {
            get_sec = "0" + get_sec
        } 
            
        let time_show_sec = document.querySelector(".time_only");
    
        time_show_sec.innerText = get_hrs + ":" + get_min + ":" + get_sec;
    },1000)



})