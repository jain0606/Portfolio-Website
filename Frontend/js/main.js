// Header Scroll
let nav = document.querySelector(".navbar")
window.onscroll = function()
{
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }
    else{
        nav.classList.remove("header-scrolled");
    }
}
// Nav Hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click" , function(){
        navCollapse.classList.remove("show");
    })
})

// Contact Me Form
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', async function(event) {
  event.preventDefault();

  const formData = {
    name: contactForm.querySelector('#name').value,
    email: contactForm.querySelector('#email').value,
    phone: contactForm.querySelector('#phone').value,
    message: contactForm.querySelector('#message').value
  };

  try {
    const response = await fetch('http://localhost:5501/api/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();
    console.log(data.message);
    location.reload();
  } catch (error) {
    console.error('Error:', error);
  }
});


