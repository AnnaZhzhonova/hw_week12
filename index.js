const userName = document.querySelector("#user-name");
const userLink = document.querySelector("#user-link");
const userText = document.querySelector("#user-text");

//Изменение регистра имени
function modifyUserName() {
  if (!userName.value) {
    return userName.value;
  } else {
    return (
      userName.value[0].toUpperCase() + userName.value.slice(1).toLowerCase()
    ).trim();
  }
}

//добавление фото
const commentAvatar = document.querySelector(".comment__avatar");

function showAvatar(src) {
  let image = document.createElement("img");
  image.src = src;
  commentAvatar.append(image);
}

//антиспам

function checkSpam(str) {
  //const spamWord = / (viagra|XXX) /gi;
  str.replace(viagra / gi, "***");
  str.replace(XXX / gi, "***");
}

const button = document.querySelector(".button");
const commentName = document.querySelector(".comment__name");
const commentText = document.querySelector(".comment__text");
const plugName = "Anonimus";
const plugAvatar = "./assets/images/avatar_null.jpg";

//чтото надо сделать с кнопкой
button.addEventListener("click", () => {
  if (userName.value === "") {
    commentName.textContent = plugName;
  } else {
    commentName.textContent = modifyUserName(userName.value);
  }
  userName.value = null;

  if (userLink.value === "") {
    let image = document.createElement("img");
    image.src = plugAvatar;
    commentAvatar.append(image);
  } else {
    showAvatar(userLink.value);
  }

  userLink.value = null;

  commentText.textContent = checkSpam(userText.textContent);
});
