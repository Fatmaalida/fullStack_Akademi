
var url  = "https://mocki.io/v1/01ae370b-67b0-4a0c-be4d-33fb8c41657c";

var savedData = [];



var fetchYoutubeData = () => {
    fetch(url)
    .then( res => res.json())
    .then( data => createCard(data))
}

fetchYoutubeData();



var createCard = (data) => {
    savedData = data;
    let ytVideoContainer = document.getElementById('yt-video-container');


    ytVideoContainer.innerHTML = ''
    // filter logic
    var inputFilter = document.getElementById('filterText');
    var dataCopy = [];
    console.log(inputFilter)
      const filterDataFunc = (data) => {
          if(data.title.toLowerCase().includes(inputFilter.value)){
            return data
          }
      }
      dataCopy = data.filter(filterDataFunc);
      let cardLength = dataCopy.length;
      console.log("dataCopy", dataCopy)
    // filter logic



    for (var i = 0; i < cardLength; i++) {
      let p1 = document.createElement("p");
      p1.innerText = dataCopy[i].title;
      p1.classList = "text-white fs-5 m-0";
      let p2 = document.createElement("p");
      p2.innerText = "B Coder";
      p2.classList = "text-white-50 m-0";
      let p3 = document.createElement("p");
      p3.innerText = "1.4M views . 1 day ago";
      p3.classList = "text-white-50";
      let description = document.createElement("div");
      description.classList = "mx-2 description";
      description.append(p1, p2, p3);

      let imgLogo = document.createElement("img");
      imgLogo.src = "./assets/image/c2.png";
      imgLogo.setAttribute("width", "40px");
      let channelLogo = document.createElement("div");
      channelLogo.classList = "channel-logo";
      channelLogo.setAttribute("width", "50px");
      channelLogo.appendChild(imgLogo);

      let cardBodySection = document.createElement("section");
      cardBodySection.classList = "d-flex";
      cardBodySection.append(channelLogo, description);

      let cardBody = document.createElement("div");
      cardBody.classList = "card-body p-0 m-1";
      cardBody.append(cardBodySection);

      let video = document.createElement("video");
      video.src = "./assets/v.mp4";
      video.muted = true;
      video.autoplay = true;
      video.loop = true;

      let thumbnail = document.createElement("img");
      thumbnail.classList = "card-img-top img rounded-3";
      thumbnail.src = dataCopy[i].thumbnail;

      let cardDiv = document.createElement("a");
      cardDiv.href="./playVideo.html";
      cardDiv.classList = "card rounded-3 border-0 bg-transparent";
      cardDiv.append(thumbnail, video, cardBody);

      let colDiv = document.createElement("div");
      colDiv.classList = "col-md-4 mb-2";
      colDiv.append(cardDiv);

      ytVideoContainer.append(colDiv);
    }

    // console.log(colDiv)
}









// <div class="col-md-4 mb-2">
// <div class="card rounded-3 border-0 bg-transparent">
//     <img class="card-img-top img rounded-3" src="./assets/image/t4.png" alt="Title">
//     <video src="./assets/v.mp4" muted autoplay loop></video>
//     <div class="card-body p-0 m-1">
//         <section class="d-flex" id="card-body-section">
//             <div style="width: 50px;" class="channel-logo">
//                 <img  width="40" src="./assets/image/c2.png" />
//             </div>
//             <div class="mx-2 description">
//                 <p class="text-white fs-5 m-0">Bulb ON/OFF effect || HTML CSS Javascript</p>
//                 <p class="text-white-50 m-0">B Coder</p>
//                 <p class="text-white-50">1.4M views . 1 day ago</p>
//             </div>
//         </section>
//     </div>
// </div>
// </div>