//DATA
const reels = [
  {
    videoLink: 1,
    profilePic: 1,
    channelName: "CodeWithBharat",
    description: "Day 1 of building Instagram Reels clone using pure JS 💻🔥",
    likes: "12",
    comments: "312"
  },
  {
    videoLink: 2,
    profilePic: 2,
    channelName: "DevLife",
    description: "Flexbox vs Absolute positioning — real world explanation ⚡",
    likes: "9",
    comments: "201"
  },
  {
    videoLink: 3,
    profilePic: 3,
    channelName: "FrontendFuel",
    description: "Stop using width:100% inside flex ❌ Here’s why ✅",
    likes: "15",
    comments: "489"
  },
  {
    videoLink: 4,
    profilePic: 4,
    channelName: "JSWizard",
    description: "Absolute positioning explained in 30 seconds 🧠",
    likes: "7",
    comments: "143"
  },
  {
    videoLink: 5,
    profilePic: 5,
    channelName: "WebSimplified",
    description: "This CSS mistake is killing your layouts 😱",
    likes: "22",
    comments: "654"
  }
];

//APPEND REELS
const reelContainer = document.querySelector(".reels-container");
let content = "";

reels.forEach((e, idx) => {
  content += `
    <div class="reel" data-id="${idx}">
      <div class="reel-left">
        <img class="insta-like" src="assets/images/insta-like-removebg-preview.png" />
        <video src="assets/videos/${e.videoLink}.mp4" muted loop playsinline></video>

        <div class="reel-left-bottom">
          <div class="bottom-up">
            <img src="assets/images/${e.profilePic}.jpg" class="profile-pic">
            <h3 class="page-name">${e.channelName}</h3>
            <button>Follow</button>
          </div>
          <div class="bottom-down">
            <p class="des">${e.description}</p>
          </div>
        </div>
      </div>

      <div class="reel-right">
        <div class="like">
          <i class="ri-heart-line"></i>
          <p>${e.likes}</p>
        </div>
        <div class="comment">
          <i class="ri-chat-1-line"></i>
          <p>${e.comments}</p>
        </div>
        <div class="send"><i class="ri-send-ins-line"></i></div>
        <div class="more"><i class="ri-more-line"></i></div>
      </div>
    </div>
  `;
});

reelContainer.insertAdjacentHTML("beforeend", content);

//LIKE & DOUBLE TAP LOGIC
document.querySelectorAll(".reel").forEach(reel => {
  let liked = false;
  let followed = false;
  let lastTap = 0;

  const video = reel.querySelector("video");
  const heartAnim = reel.querySelector(".insta-like");
  const likeIcon = reel.querySelector(".like i");
  const likeCount = reel.querySelector(".like p");
  const follow = reel.querySelector("button");
  

  // Double tap like
  video.addEventListener("click", () => {
    const now = Date.now();

    if (now - lastTap < 300 && !liked) {
      heartAnim.classList.add("show");
      likeIcon.style.color = "red";
      likeCount.textContent = +likeCount.textContent + 1;
      liked = true;

      setTimeout(() => heartAnim.classList.remove("show"), 600);
    }

    lastTap = now;
  });

  // Like button toggle
  likeIcon.addEventListener("click", () => {
    if (liked) {
      likeIcon.style.color = "white";
      likeCount.textContent = +likeCount.textContent - 1;
    } else {
      likeIcon.style.color = "red";
      likeCount.textContent = +likeCount.textContent + 1;
    }
    liked = !liked;
  });

  //follow buttton toggle
  follow.addEventListener('click',(e)=>{
    if(!followed){
      e.target.innerHTML = "Unfollow";
      e.target.style.backgroundColor = "white";
      e.target.style.color = "black";
      followed = true;
    }
    else{
      e.target.innerHTML="Follow";
      e.target.style.backgroundColor = "transparent";
      e.target.style.color = "white";
      followed =false;
    }
  })
});


//VIDEO PLAY OPTIMIZATION
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const video = entry.target;
    entry.isIntersecting ? video.play() : video.pause();
  });
}, { threshold: 0.6 });

document.querySelectorAll("video").forEach(video => observer.observe(video));
