import { Link, useLocation, useNavigate } from 'react-router-dom';

const HeaderAdminNav = () => {
  const navigate = useNavigate();

  const curPage = useLocation();
  const onLogout = () => {
    window.localStorage.clear();
    if (curPage.pathname != '/') {
      navigate('/');
    } else {
      navigate(-1);
    }
  };

  return (
    <div className='flex w-[319px] items-center justify-between'>
      <Link
        className='font-[Roboto] text-[16px] font-medium leading-[18.75px] text-[#323232]'
        to='/group-purchase'
      >
        공동구매
      </Link>
      <button
        className='font-[Roboto] text-[16px] font-medium leading-[18.75px] text-[#323232]'
        onClick={onLogout}
      >
        로그아웃
      </button>
      <Link to='/admin'>
        <div className='flex h-[32px] w-[94px] items-center justify-between'>
          <img
            className='box-border h-[32x] w-[32px] rounded-[43px] border-[1px] border-[#00c7ae]  bg-[#f2f2f2] opacity-[0.62]'
            src='/user.png'
            alt=''
          />
          <p className='h-[14px] w-[56px] font-[Roboto] text-[12px] font-semibold leading-[14.06px] text-[#00c7ae] underline'>
            관리자콘솔
          </p>
        </div>
      </Link>
    </div>
  );
};

export default HeaderAdminNav;
