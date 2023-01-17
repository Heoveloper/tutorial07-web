import HeaderAdminNav from './header-admin-nav';
import HeaderDefaultNav from './header-default-nav';
import HeaderUserNav from './header-user-nav';

const HeaderNav = () => {
  if (localStorage.getItem('accessToken')) {
    return localStorage.getItem('type') === 'user' ? <HeaderUserNav /> : <HeaderAdminNav />;
  } else return <HeaderDefaultNav />;
};

export default HeaderNav;
