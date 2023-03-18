// Code your solutions in this file
const guests = ["Guadalupe","Ollie", "Aki"];
/*function writeCards(guests) {
    const thankYouMessages = [];
    for (let i = 0; i < guests.length; i++) {
      thankYouMessages.push(`Thank you, ${guests[i]}, for the wonderful surprise gift! `);
    }
    return thankYouMessages;
    console.log(thankYouMessages);
  }
*/
function writeCards(names) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return messages;
  }
  const names = ["Guadalupe","Ollie", "Aki"];
  const messages = writeCards(names);
  console.log(messages);


  function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }
  countDown(10);