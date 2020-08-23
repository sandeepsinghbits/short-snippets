import Home from '../client/app/home/Home';
import Detail from '../client/app/detail/Detail';

export default [
  {
    component: Home,
    path: '/',
    exact: true
  },
  {
    component: Detail,
    path: '/detail/:id',
  }
];