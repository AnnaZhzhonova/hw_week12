const userNameInput = document.querySelector("#user-name");
const userLinkInput = document.querySelector("#user-link");
const userTextInput = document.querySelector("#user-text");
const button = document.querySelector(".button");

const user = {
  name: userNameInput.value,
  avatar: userLinkInput.value,
  text: userTextInput.textContent,
};

//Изменение регистра имени
function modifyUserName() {
  if (!user.name) return user.name;
  return (
    user.name[0].toUpperCase() + user.name.slice(1).toLowerCase()
  ).replace(" ", "");
}

console.log(modifyUserName());

let commentName = document.querySelector(".comment__name");

/* button.addEventListener("click", postComment(), {}); */
