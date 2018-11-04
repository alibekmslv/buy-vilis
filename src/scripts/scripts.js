import MoveTo from "moveto";
import Rellax from "rellax";
// import $ from "jquery";
// import slick from "slick-carousel";
// import IMask from "imask";
// import tingle from "tingle.js";
// import { lory } from "lory.js";
import ScrollReveal from "scrollreveal";
// import "./modules/pudu-som-min";
// import "./modules/pudu-inpMask-min";

// Parallax Effects
new Rellax(".hero_picture", {
  speed: 0.5,
  center: true
});
// new Rellax(".app_picture", {
//   speed: 1,
//   center: true
// });

// Scroll Links
document.addEventListener("DOMContentLoaded", function() {
  const moveTo = new MoveTo({
    duration: 1000
  });
  const triggers = document.getElementsByClassName("js-trigger");
  for (let i = 0; i < triggers.length; i++) {
    moveTo.registerTrigger(triggers[i]);
  }
});

// Reveal on Scroll Plugin
ScrollReveal().reveal(".about_picture", {
  delay: 1000,
  scale: 0.3
});

ScrollReveal().reveal(".icon-first-to-reveal, .logo", {
  delay: 700,
  scale: 0.3
});
ScrollReveal().reveal(".icon-second-to-reveal", {
  delay: 800,
  scale: 0.3
});
ScrollReveal().reveal(".icon-third-to-reveal, .hero_text-content", {
  delay: 900,
  scale: 0.3
});

ScrollReveal().reveal(".hero_picture, .download-app, .partners", {
  delay: 800,
  scale: 0.85
});

ScrollReveal().reveal(".app_picture", {
  delay: 1000,
  scale: 0.85
});

//Menu Nav
const menuButton = document.querySelector(".menu-btn");
const menuNavigation = document.querySelector("#site-header_navigation");

menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  menuButton.classList.toggle("close");
  menuNavigation.classList.toggle("is-active");

  window.addEventListener("resize", removeNavOnResize);

  function removeNavOnResize() {
    if (window.innerWidth > 1010) {
      menuButton.classList.remove("close");
      menuNavigation.classList.remove("is-active");
    }
  }
}

// // Slider;
// $(".slider").slick({
//   infinite: false,
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   nextArrow: $(".slider-next-btn"),
//   prevArrow: $(".slider-prev-btn"),
//   responsive: [
//     {
//       breakpoint: 1170,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1
//       }
//     },
//     {
//       breakpoint: 800,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         autoplay: true,
//         infinite: true
//       }
//     },
//     {
//       breakpoint: 530,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         infinite: true
//       }
//     }
//   ]
// });

//Modal Window
// let modal = new tingle.modal({
//   closeMethods: ["overlay", "button", "escape"],
//   closeLabel: "Закрыть",
//   cssClass: ["modal"],
//   onOpen: function() {
//     //Form Validation
//     const name = document.getElementById("name");
//     const phone = document.getElementById("phone");
//     const submitButton = document.getElementById("contact-form-submit");
//     submitButton.disabled = true;
//     const formInputs = [name, phone];
//     const regExName = /.{2,40}/;
//     const regExPhone = /\+[7]\(\d{3}\)\d{3}\-\d{2}\-\d{2}/;
//     function checkInput() {
//       if (regExName.test(name.value) && regExPhone.test(phone.value)) {
//         submitButton.disabled = false;
//       } else {
//         submitButton.disabled = true;
//       }
//     }

//     formInputs.forEach(function(e) {
//       e.oninput = function() {
//         checkInput();
//       };
//     });

//     // let phoneMask = new IMask(phone, {
//     //   mask: "+{7} (000) 000-00-00"
//     // });

//     const contactForm = document.getElementById("contact-form");
//     contactForm.addEventListener("submit", sendForm);

//     function sendForm(e) {
//       e.preventDefault();

//       //Ajax Form Sender
//       let partnerName = document.getElementById("name").value;
//       let partnerPhone = document.getElementById("phone").value;
//       let params = `partner_name=${partnerName}&partner_phone=${partnerPhone}`;

//       let xhr = new XMLHttpRequest();
//       xhr.open("POST", "mail-script/mail.php", true);
//       xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

//       xhr.onload = function() {
//         if (this.status == 200) {
//           contactForm.reset();
//           sayThankYou();
//           console.log("Message send");
//         } else if (this.status == 400) {
//           console.log("Error, not found");
//         }
//       };

//       xhr.send(params);
//     }
//   },
//   onClose: function() {
//     console.log("modal closed");
//   }
// });

// modal.setContent(`
// <div class="popup_heading">
//   <h2>Стать партнером</h2>
//   <p>Оставьте свои контатные данные и BuyVilis свяжется с Вами</p>
// </div>
// <form id="contact-form" class="contact-form">
//   <p>
//     <label for="name">Компания</label>
//     <input type="text" id="name" name="partner_name" required>
//   </p>
//   <p>
//     <label for="phone">Телефон</label>
//     <input type="tel" id="phone" name="partner_phone" class="pudu-inpMask" data-mask="phone_ru" required>
//   </p>
//   <p>
//     <input type="checkbox" id="checkbox-privacy" checked required><span>Ваши данные надежно защищены</span><br>
//     <label for="checkbox-privacy">Принять <a href="https://buyvilis.ru/Privacy-Policy.pdf" target="_blank">политику конфиденциальности</a></label>
//   </p>
// <button id="contact-form-submit" type="submit" class="btn btn-no-pos">Стать партнером</button>
// </form>`);

// let openModalBtn = document.getElementById("open-modal");
// openModalBtn.addEventListener("click", openModal);
// function openModal() {
//   modal.open();
// }

// function sayThankYou() {
//   modal.setContent(`<div class="popup_heading popup_heading-centered">
//   <h2>Спасибо</h2>
//   <p>Мы получили Ваше сообщение и свяжемся с Вами в ближайшее время</p>
// </div>
// `);
//   setTimeout(() => {
//     modal.close();
//   }, 3000);
// }
// //Some fixes to tingle plugin
// const modalCloseButton = document.querySelector(".tingle-modal__closeIcon");
// const modalCLoseText = document.querySelector(".tingle-modal__closeLabel");
// modalCloseButton.innerHTML = `<i class="fas fa-times"></i>`;
// modalCLoseText.remove();
