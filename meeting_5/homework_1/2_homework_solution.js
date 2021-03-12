console.log("Start");

const usersDB = {
  "user1@hw.js": [{ title: "video1" }, { title: "video2" }],
  "user2@hw.js": [{ genre: "genre1" }, { genre: "genre1" }],
  "user3@hw.js": [],
};

function loginUser(email, password, callback, error) {
  setTimeout(() => {
    if (Object.keys(usersDB).includes(email)) {
      console.log(`Now we have the data of user : ${email}`);
      callback({ userEmail: email });
    } else {
      error("User not found!");
    }
  }, 3000);
}

function getUserVideos(email, callback, error) {
  setTimeout(() => {
    if (usersDB[email].length > 0) {
      callback(usersDB[email]);
    } else {
      error("Video Title not found!");
    }
  }, 2000);
}

function videoDetails(video, callback, error) {
  setTimeout(() => {
    if (video.title) {
      callback(video.title);
    } else {
      error("Video Title not found!");
    }
  }, 2000);
}

const getPassedUsersFirstVideoTitle = (user, password) => {
  loginUser(
    user,
    password,
    (user) => {
      console.log("user: ", user);
      getUserVideos(
        user.userEmail,
        (vid) => {
          console.log("videos :", vid);
          videoDetails(
            vid[0],
            (titl) => {
              console.log("title:", titl);
            },
            (error) => displayError(error)
          );
        },
        (error) => displayError(error)
      );
    },
    (error) => displayError(error)
  );
};

console.log("Finish");

function displayError(errorMessage) {
  console.error(new Error(errorMessage));
}

getPassedUsersFirstVideoTitle("user1@hw.js");
