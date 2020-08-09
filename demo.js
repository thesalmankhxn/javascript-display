'use strict'; 
(function() {

const buyTicket = () => {
  return new Promise( (resolve, reject) => {
    setTimeout( () => {
      const error = false;

      error ? reject('Sorry Unsuccesful') : resolve('Ticket confirmed')
    }, 3000)
  })
}

buyTicket().then( (success) => display(success)).catch((error) => display(error) );

})();