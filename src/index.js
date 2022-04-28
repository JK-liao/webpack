import './global.css';
import './style/pc.scss';
// import './style/mobile.scss';
import ajax from './utils/ajax';
import deepClone from './utils/deepClone';

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
