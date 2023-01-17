import { Link, useNavigate } from 'react-router-dom';

const HeaderDefaultNav = () => {
  const switchingPage = useNavigate();

  function goSignUp() {
    switchingPage('/sign-up');
  }

  return (
    <div className='flex w-[283px] items-center justify-between'>
      <Link
        className='font-[Roboto] text-[16px] font-medium leading-[18.75px] text-[#323232]'
        to='/group-purchase'
      >
        공동구매
      </Link>
      <Link
        className='font-[Roboto] text-[16px] font-medium leading-[18.75px] text-[#323232]'
        to='/login'
      >
        로그인
      </Link>
      <button
        onClick={goSignUp}
        className='flex h-[42px] w-[105px] items-center justify-center rounded-md bg-[#00c7ae]'
      >
        <p className='font-Roboto top-[27px] left-[1478px] h-[19px] w-[59px] text-center text-[16px] font-semibold leading-[18.75px] text-[#ffffff]'>
          회원가입
        </p>
      </button>
    </div>
  );
};

export default HeaderDefaultNav;
