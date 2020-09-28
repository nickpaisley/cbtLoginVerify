// Let's search the page for our logged in email address
var emailCheck = (document.getElementById('loggedInEmail'));

// First set a timeout to allow the page to load, then check emailCheck if it contains our email. 
// If so, do nothing..If not, set background.
setTimeout(() => {
 

        var emailCheck = (document.getElementById('loggedInEmail'));
        var loggedInEmail = (emailCheck.innerText);
        console.log(loggedInEmail);
        
        if (loggedInEmail.includes('nicholas.paisley@smartbear.com')) {
          console.log('yep');
        }
        else {
          console.log('nope');
          document.body.style.backgroundColor = "#fcdb03";
        }

}, 2500)



