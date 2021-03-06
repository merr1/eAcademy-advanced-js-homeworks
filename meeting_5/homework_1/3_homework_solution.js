console.log("Start");

const usersDB = {
  "user1@hw.js": [{ title: "video1" }, { title: "video2" }],
  "user2@hw.js": [{ genre: "genre1" }, { genre: "genre1" }],
  "user3@hw.js": [],
};

function loginUser(email, password) {
  return new Promise((succes, error) => {
    setTimeout(() => {
      if (Object.keys(usersDB).includes(email)) {
        console.log(`Now we have the data of user : ${email}`);
        succes({ userEmail: email });
      } else {
        error("User not found!");
      }
    }, 3000);
  });
}

function getUserVideos(email) {
  return new Promise((succes, error) => {
    setTimeout(() => {
      if (usersDB[email].length > 0) {
        succes(usersDB[email]);
      } else {
        error("Video Title not found!");
      }
    }, 2000);
  });
}

function videoDetails(video) {
  return new Promise((succes, error) => {
    setTimeout(() => {
      if (video.title) {
        succes(video.title);
      } else {
        error("Video Title not found!");
      }
    }, 2000);
  });
}

function displayError(errorMessage) {
  console.error(new Error(errorMessage));
}

const getPassedUsersFirstVideoTitle = (user) => {
  loginUser(user, 1234)
    .then((user) => {
      console.log("user: ", user);
      getUserVideos(user.userEmail);
    })
    
    .then((vid) => videoDetails(vid[0]))
    .then((titl) => console.log("title: ", titl))
    .catch((error) => displayError(error));
};
console.log("Finish");

getPassedUsersFirstVideoTitle("user4@hw.js");
