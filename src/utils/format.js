export const formatTime = (data) => {
  const date = new Date(data);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
  let hour = date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`;
  let minute =
    date.getMinutes() > 9 ? date.getHours() : `0${date.getMinutes()}`;
  let second =
    date.getSeconds() > 9 ? date.getSeconds() : `0${date.getSeconds()}`;
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
};
