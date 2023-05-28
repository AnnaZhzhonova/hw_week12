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
  str = str.replace(/viagra/gi, "***");
  str = str.replace(/XXX/gi, "***");
  return str;
}

function createNewComment(userName, avatar, comment) {}

/* const createHTML = (userName, link, text) => {
  const htmlElements = [];
  htmlElements.push('<div class="comment">');

  let srcSrtring = `<img class="userphoto" src="${link}" alt="userLogo">`;
  htmlElements.push(srcSrtring);
  let userNameString = `<strong class='userHeader'>${userName}</strong>`;
  htmlElements.push(userNameString);
  let commentString = `<p class='comment-content'>${text}</p>`;
  htmlElements.push(`${commentString}`);
  const currentTime = getDate();
  htmlElements.push(`<div class='posttime'>${currentTime}</div>`);
  htmlElements.push(`</div>`);

  return htmlElements.join("");
}; */

const button = document.querySelector(".button");
const commentName = document.querySelector(".comment__name");
const commentText = document.querySelector(".comment__text");
const plugName = "Anonimus";
const plugAvatar = "./assets/images/avatar_null.jpg";

//чтото надо сделать с кнопкой
button.addEventListener("click", (event) => {
  event.preventDefault();

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

  if (userText.value === "") {
    commentText.value = "Я люблю котиков";
  } else {
    commentText.textContent = checkSpam(userText.value);
  }

  userText.value = null;
});
