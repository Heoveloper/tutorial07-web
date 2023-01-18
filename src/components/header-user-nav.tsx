import { Link, useNavigate, useLocation } from 'react-router-dom';

const HeaderUserNav = () => {
  const navigate = useNavigate();

  const curPage = useLocation();
  const onLogOut = () => {
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
        onClick={onLogOut}
      >
        로그아웃
      </button>
      <Link to='/my-page'>
        <div className='flex h-[32px] w-[127px] items-center justify-between'>
          <img
            className='box-border h-[32x] w-[32px] rounded-[43px] border-[1px] border-[#bbbbbb]  bg-[#f2f2f2] opacity-[0.62]'
            src='/user.png'
            alt=''
          />
          <p className='h-[14px] w-[89px] font-[Roboto] text-[12px] font-semibold leading-[14.06px] text-[#323232]'>
            닉네임예시입니다
          </p>
        </div>
      </Link>
    </div>
  );
};

export default HeaderUserNav;
