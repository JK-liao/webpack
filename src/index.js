// style
import './global.css';
import './style/pc.scss';
// import './style/mobile.scss';
import './assets/iconfonts/guangzhouzhixun/iconfont.css';

// js
import ajax from './utils/ajax';
import deepClone from './utils/deepClone';

// img
import bossImage from './assets/imgs/boss.jpg';
(function() {
  const user = document.querySelector('header .user-info');
  if (!user) {
    return;
  }
  const avater = new Image();
  avater.classList.add('user-avater');
  avater.src = bossImage;
  user.insertBefore(avater, user.childNodes[0]);
}())

ajax
  .get('http://localhost:7001/user/query?phone=13386126957')
  .then((res) => {
    console.log(deepClone(res));
  })
  .catch((err) => {
    console.log(err);
  });

ajax
  .post('http://localhost:7001/user/login', {
    phone: '13386126957',
    password: 'zm13qp79',
  })
  .then((res) => {
    console.log(deepClone(res));
  })
  .catch((err) => {
    console.log(err);
  });
