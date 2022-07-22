let x = JSON.parse(localStorage.getItem("video_id"))
 
let iframe=document.createElement("iframe");
 iframe.src=`https://www.youtube.com/embed/${x}`
 iframe.height="100%";
 iframe.width="100%";
 iframe.setAttribute("allowfullscreen","true");

 
       document.getElementById("cont").append(iframe);