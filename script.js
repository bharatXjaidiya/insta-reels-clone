let reels =  [
  {
    "videoLink": 1,
    "profilePic": 1,
    "channelName": "CodeWithBharat",
    "description": "Day 1 of building Instagram Reels clone using pure JS 💻🔥",
    "likes": "12.4K",
    "comments": "312"
  },
  {
    "videoLink": 2,
    "profilePic": 2,
    "channelName": "DevLife",
    "description": "Flexbox vs Absolute positioning — real world explanation ⚡",
    "likes": "9.8K",
    "comments": "201"
  },
  {
    "videoLink": 3,
    "profilePic": 3,
    "channelName": "FrontendFuel",
    "description": "Stop using width:100% inside flex ❌ Here’s why ✅",
    "likes": "15.6K",
    "comments": "489"
  },
  {
    "videoLink": 4,
    "profilePic": 4,
    "channelName": "JSWizard",
    "description": "Absolute positioning explained in 30 seconds 🧠",
    "likes": "7.4K",
    "comments": "143"
  },
  {
    "videoLink": 5,
    "profilePic": 5,
    "channelName": "WebSimplified",
    "description": "This CSS mistake is killing your layouts 😱",
    "likes": "22.1K",
    "comments": "654"
  },
  {
    "videoLink": 6,
    "profilePic": 6,
    "channelName": "UIHacks",
    "description": "How Instagram positions like, comment & share icons ❤️",
    "likes": "18.9K",
    "comments": "402"
  },
  {
    "videoLink": 7,
    "profilePic": 7,
    "channelName": "DailyCoding",
    "description": "Build a reels UI without any framework 🚀",
    "likes": "6.7K",
    "comments": "98"
  },
  {
    "videoLink": 8,
    "profilePic": 8,
    "channelName": "CSSNinja",
    "description": "Why object-fit: cover is mandatory for videos 🎥",
    "likes": "13.4K",
    "comments": "267"
  },
  {
    "videoLink": 9,
    "profilePic": 9,
    "channelName": "MERNMastery",
    "description": "From college project to real product mindset 💡",
    "likes": "20.5K",
    "comments": "521"
  },
  {
    "videoLink": 10,
    "profilePic": 10,
    "channelName": "TechTruth",
    "description": "Flexbox is not always the solution — know when to stop ❗",
    "likes": "9.1K",
    "comments": "176"
  }
];
//appending the reels into the reel-container
let reelContainer = document.querySelector(".reels-container");
let content = '';
reels.forEach((e,idx)=>{
    content += `<div id="${idx}" class="reel">
                <div class="reel-left">
                <img class="insta-like" src="assets/images/insta-like-removebg-preview.png" alt="">
                    <video src="assets/videos/${e.videoLink}.mp4" autoplay loop muted playsinline>
                    </video>
                    <div class="reel-left-bottom">
                        <div class="bottom-up">
                            <img src="assets/images/${e.profilePic}.jpg" alt="" class="profile-pic">
                            <h3 class="page-name">${e.channelName}</h3>
                            <button>Follow</button>
                        </div>
                        <div class="bottom-down">
                            <p class="des">
                                ${e.description}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="reel-right">
                    <div class="like">
                        <i class="ri-heart-line"></i>
                        <p>${e.likes}</p>
                    </div>
                    <div class="${e.comments}">
                        <i class="ri-chat-1-line"></i>
                        <p>22k</p>
                    </div>
                    <div class="send">
                        <i class="ri-send-ins-line"></i>
                    </div>
                    <div class="more">
                        <i class="ri-more-line"></i>
                    </div>
                </div>
            </div>`  
})

reelContainer.innerHTML = reelContainer.innerHTML + content;
let lastTap = 0;
document.querySelectorAll(".reel ").forEach(reel => {
  //adding the like feature
  const heart = reel.querySelector(".insta-like");
  reel.querySelector("video").addEventListener("click", () => {
    const now = Date.now();

    if (now - lastTap < 300) {
      heart.classList.add("show");

      setTimeout(() => {
        heart.classList.remove("show");
      }, 700);
    }

    lastTap = now;
  });


});
