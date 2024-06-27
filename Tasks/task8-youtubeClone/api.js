
var url  = "https://mocki.io/v1/9a51b6ae-3276-4af9-86f3-9b1ac98034c3";

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
    // filter seacrh code
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
    // filter search code son



    for (var i = 0; i < cardLength; i++) {
      let p1 = document.createElement("p");
      p1.innerText = dataCopy[i].title;
      p1.classList = "text-white fs-5 m-0";


      let p2 = document.createElement("p");
      p2.innerText = data[i].channel;
      p2.classList = "text-white-50 m-0";


      let p3 = document.createElement("p");
      p3.innerText = data[i].view;
      // .data[i].uploaded
      p3.classList = "text-white-50";


      let description = document.createElement("div");
      description.classList = "mx-2 description";
      description.append(p1, p2, p3);

      let imgLogo = document.createElement("img");
      imgLogo.src = data[i].channelLogo;
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







