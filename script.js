// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

// window.onscroll = () => {
//   sections.forEach(sec => {
//     let top= window.scrollY;
//     let offset = sec.offsetTop - 100;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute('id');

//     if(top >= offset && top < offset + height){
//       navLinks.forEach(links => {
//         links.classList.remove('active');
//         document.querySelector('header nav a[href*#'+ id + ']').classList.add('active');
//       });
//     }
//   });
//   let header = document.querySelector('header');
//   header.classList.toggle('sticky',window.scrollY>100);

// }









let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  let top = window.scrollY;
  let header = document.querySelector('header');

  sections.forEach(sec => {
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
     

      let activeLink = document.querySelector(`header nav a[href*="#${id}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
      sec.classList.add('show-animate');
    }
    else{
      sec.classList.remove('show-animate');
    }
  });

  header.classList.toggle('sticky', top > 100);

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

}
(function() {
  emailjs.init("MMoHZQ24X51BorDbD");
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  var name = document.getElementById('name').value.trim();
  var email = document.getElementById('email').value.trim();
  var num = document.getElementById('num').value.trim();
  var sub = document.getElementById('sub').value.trim();
  var message = document.getElementById('message').value.trim();

  emailjs.send("service_ly7mdaf", "template_9urgfl8", {
    name: name,
    email: email,
    title: sub,
    message: message
  })
  .then(function(response) {
    console.log('SUCCESS!', response.status, response.text);

    // Open WhatsApp
    // var whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    // window.open(`https://api.whatsapp.com/send?phone=7358927179&text=${whatsappMessage}`, '_blank');

    // Show SweetAlert success popup
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'Message Sent Successfully!',
      confirmButtonColor: '#4CAF50'
    });

    // Reset form
    document.getElementById('contact-form').reset();
  }, function(error) {
    console.log('FAILED...', error);
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      confirmButtonColor: '#d33'
    });
  });
});

// (function() {
//   emailjs.init("MMoHZQ24X51BorDbD"); // Your Public Key
// })();

// document.getElementById('contact-form').addEventListener('submit', function(event) {
//   event.preventDefault();

//   var name = document.getElementById('name').value.trim();
//   var email = document.getElementById('email').value.trim();
//   var num = document.getElementById('num').value.trim();    // optional
//   var sub = document.getElementById('sub').value.trim();
//   var message = document.getElementById('message').value.trim();

//   emailjs.send("service_ly7mdaf", "template_9urgfl8", {
//     name: name,
//     email: email,
//     title: sub,    // this is your Email Subject
//     message: message
//   })
//   .then(function(response) {
//     console.log('SUCCESS!', response.status, response.text);

//     var whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
//     window.open(`https://api.whatsapp.com/send?phone=7358927179&text=${whatsappMessage}`, '_blank');

//     document.getElementById('success-message').style.display = 'block';
//     document.getElementById('contact-form').reset();
//   }, function(error) {
//     console.log('FAILED...', error);
//     alert("Oops! Something went wrong.\n\nDetails: " + JSON.stringify(error));
//   });
// });


// (function(){
//   emailjs.init("MMoHZQ24X51BorDbD"); // Replace with your EmailJS user ID
// })();

// // Form Submit Event
// document.getElementById('contact-form').addEventListener('submit', function(event) {
//   event.preventDefault();

//   // Get form values
//   var name = document.getElementById('name').value.trim();
//   var email = document.getElementById('email').value.trim();
//   var num = document.getElementById('num').value.trim();
//   var sub = document.getElementById('sub').value.trim();
//   var message = document.getElementById('message').value.trim();

//   // Send email using EmailJS
//   emailjs.send("service_ly7mdaf", "template_9urgfl8", {
//     from_name: name,
//     from_email: email,
//     num:num,
//     sub:sub,
//     message: message
//   })
//   .then(function(response) {
//     console.log('SUCCESS!', response.status, response.text);

//     // Open WhatsApp with pre-filled message
//     var whatsappMessage = Name: ${name}%0AEmail: ${email}%0AMessage: ${message};
//     window.open(https://api.whatsapp.com/send?phone=7358927179&text=${whatsappMessage}, '_blank');

//     // Show success message
//     document.getElementById('success-message').style.display = 'block';

//     // Reset form
//     document.getElementById('contact-form').reset();
//   }, function(error) {
//     console.log('FAILED...', error);
//   });
// });

   