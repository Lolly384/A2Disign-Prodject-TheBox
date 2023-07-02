
const prodjectMove = () => {
// Получаем все кнопки
const buttons = document.querySelectorAll('.main-projects-menu-button button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Удаляем класс "active" со всех кнопок
      buttons.forEach(button => {
        button.classList.remove('active');
      });
      // Добавляем класс "active" только на нажатую кнопку
      button.classList.add('active');
      console.log(buttons)
    });
  });
}

const reqField = () => {
  // Получение кнопки и полей ввода
  let submitButton = document.querySelectorAll('.submit');
  let inputFields = document.querySelectorAll('.main-forms-inputs input[placeholder]');
  let arrayName = ["Name:", "Email:", "Reason for Contacting:", "Phone:", "Message:"];
  // Обработчик события при нажатии на кнопку "Submit"
  submitButton.forEach(function(element) {
    element.addEventListener('click', function() {
      let arrayValue = [];
      console.log(submitButton);
      // Перебираем все поля ввода
      inputFields.forEach(function(input) {
        arrayValue.push(input.value) ;
        // Проверяем, является ли поле пустым
        if (input.value === '' && !input.getAttribute('placeholder').includes('*')) {
          // Показываем текст звездочки в placeholder
          input.setAttribute('placeholder', input.getAttribute('placeholder') + ' *');
        }
      });
      for(let i = 0; i<5; i++){
        console.log(arrayName[i] + " = " + arrayValue[i]);
      }
      console.log("----------------------------------")
      for(let i = 5; i<10; i++){
        console.log(arrayName[i-5] + " = " + arrayValue[i]);
      }
      console.log("----------------------------------")
    });
  });
    
}

const consultation = () => {
  const cons = document.querySelector('.main-consultation button');
  const cancle = document.querySelector('.cancle');
  let popUp = document.querySelector('.pop-up');
  let body = document.querySelector("body")

  cons.addEventListener('click', () => {
    popUp.style.visibility = "visible";
  });

  cancle.addEventListener('click', () => {
    popUp.style.visibility = "hidden";
  })
}

const addImgButton = (parent) => {
  console.log(parent);
  let butBack = document.querySelector(`${parent} .slick-prev`);
  let butNext = document.querySelector(`${parent} .slick-next`);
  butBack.textContent = "Back";
  butNext.textContent = "Next";
  let imgNext = document.createElement('img');
  imgNext.src = "image/next.svg";
  butNext.appendChild(imgNext);

  let imgBack = document.createElement('img');
  imgBack.src = "image/back.svg";
  butBack.prepend(imgBack);
}

$(document).ready(function(){
  $('.main-projects-slider-elems').slick({
    arrows: true,
    dots:  true,
    rows: 2,
    slidesPerRow: 2,
    infinite: true,
    waitForAnimate: true,
    responsive:[{
      breakpoint: 950,
      settings: {
        slidesPerRow: 1,
        dots:  false,
        }
      }
    ]
    })
  addImgButton(".main-projects-slider-elems");
})

$(document).ready(function(){
  $('.main-slider').slick({
    arrows: true,
    rows: 1,
    slidesPerRow: 1,
    infinite: true,
    waitForAnimate: true,
  })
  addImgButton(".main-slider");
})
const mobMenu = () => {
  const menu = document.querySelector('.header_menuMobile img');
  let menuPopUp = document.querySelector('.header_menuMobile-popUp')
  let key = false;
  menu.addEventListener('click', () => {
    if (key == false){
      key = true;
      menuPopUp.style.visibility = "visible";
      menuPopUp.classList.add('show');
    } else{
      key = false;
      menuPopUp.style.visibility = "hidden";
      menuPopUp.classList.remove('show');
    }
  });
}


reqField();
prodjectMove();
consultation();
mobMenu();