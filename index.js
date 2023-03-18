// Code your solutions in this file
function writeCards(guests) {
    const messages = [];
    for (let i = 0; i < guests.length; i++) {
      messages.push(`Thank you, ${guests[i]}, for the wonderful surprise gift!`);
    }
    return messages;
  }
  const guests = ["Guadalupe","Ollie", "Aki"];
  const messages = writeCards(guests);
  console.log(messages);


  function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }
  countDown(10);