function deleteTags(str) {
  let result = str;
  result = result.replace(/<(.|\n)*?>/g, "");

  return result.trim();
}

console.log(deleteTags(str));
