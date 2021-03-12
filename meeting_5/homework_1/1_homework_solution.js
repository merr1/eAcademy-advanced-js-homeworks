console.log("Start");

const usersDB = {
  "user1@hw.js": [{ title: "video1" }, { title: "video2" }],
  "user2@hw.js": [{ genre: "genre1" }, { genre: "genre1" }],
  "user3@hw.js": [],
};

function loginUser(email, password, callback) {
  setTimeout(() => {
    console.log(`Now we have the data of user : ${email}`);
    callback({ userEmail: email });
  }, 3000);
}

function getUserVideos(email, callback) {
  setTimeout(() => {
    callback(usersDB[email]);
  }, 2000);
}

function videoDetails(video, callback) {
  setTimeout(() => {
    callback(video.title);
  }, 2000);
}

const getPassedUsersFirstVideoTitle = (user, password) => {
  loginUser(user, password, (user) => {
    console.log("user: ", user);
    getUserVideos(user.userEmail, (vid) => {
      console.log("videos :", vid);
      videoDetails(vid[0], (titl) => {
        console.log("title : ", titl);
      });
    });
  });
};
getPassedUsersFirstVideoTitle("user1@hw.js", 1234);

console.log("Finish");
