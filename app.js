//const videoCardContainer = document.querySelector('.video-container');
let api_key = "AIzaSyAZo4RCw_Xuw4rNsqQFQrPLip0h7UvHBx0";
let video_http = "https://www.googleapis.com/youtube/v3/videos?";
const key="AIzaSyCsUs7FlUtLgf5s8Uc8iSnPTaP1iQdC6cQ";




async function get(){
 // let inp = document.getElementById("search").value;
 let viedo_search=document.getElementById("in").value; 
    console.log("aodnsfa", viedo_search)

   
       
        try{
           
            const api=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${viedo_search}&type=viedo_search&key=${key}&maxResults=20`
            let res = await fetch(api) 
             
            let data=await res.json()
            
            console.log(data)
    
            let videos=data.items;
            appendVideos(videos)
        }
       catch(err){
           console.log("error",err);
       }
      
   // console.log(inp)
}
  getdata()
   async  function getdata(){
        try{
           
            let url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=IN&key=${key}`
         let res = await fetch(url)
            let videos= await res.json()
            console.log(videos.items[0].snippet)

            appendVideos(videos.items)
           // let watch=https://www.youtube.com/watch?v=
          
        }
        catch(er){
            console.log("error", er)
        }
    }

const appendVideos = (arr) =>{
    let container= document.getElementById("cont")
    container.innerHTML=null;
console.log(arr)
 arr.map((el, i)=>{
       let div=document.createElement("div")
       let box=document.createElement("div")

       let img=document.createElement("img")
        img.src=el.snippet.thumbnails.medium.url
        img.addEventListener("click", function (){
            console.log("sanket", i, el.id)
            
            localStorage.setItem("video_id",JSON.stringify(el.id))
            window.location.href="mini.html"
        
        })

        let name=document.createElement("h3")
        name.textContent=el.snippet.title
     
        box.append(img)
        div.append(box,name)
       
        container.append(div)
        

 })}

// .then(res => res.json())
// .then(data => {
//     video_data.channelThumbnail = data.item[0].snippet.thumbnails.default.url;
//     makeVideoCard(video_data);
// })
 


//  const makeVideoCard = (data) => {
//      videoCardContainer.innerHTML +=`<div class="video" >
//      <img src="${data.snippet.thumbnails.high.querySelector}" class="thumnail" alt="">
//      <div class="content">
//        <img src="${data.channelThumbnail}" class="channel-icon" alt="">
//        <div class="info">
//          <h4 class="title">${data.snippet.title}</h4>
//          <p class="channel-name">${data.snippet.channelTitle}</p>
//        </div>
//    </div> 
//    </div>
//    </div>  `;
//  }












