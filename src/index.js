import 'bootstrap/dist/css/bootstrap.min.css';
import './less/index.less'
import 'bootstrap'
import 'jquery'



const headerBtn = document.querySelector('.header__blck-hamb');
const headerPopup = document.querySelector('.header__overlayer');

headerBtn.addEventListener('click', () => {
    headerPopup.classList.add('open-menu');
});

headerPopup.addEventListener('click', event => {
  if  (!(event.target.closest('.header__adaptive-list')))
  headerPopup.classList.remove('open-menu');
})

