import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='absolute top-0 left-0 h-[72px] w-[1920px] bg-[#ffffff] shadow-[inset_0_-1px_0_#f2f2f2]'>
      <img src='/search.png'></img>
      <img src='/logo.png'></img>
      <Link to='/login'>공동 구매</Link>
      <Link to='/login'>로그인</Link>
      <button className='top-[15px] left-[1455px] h-[42px] w-[105px] rounded-md bg-[#00c7ae]'>
        <p className='font-Roboto top-[27px] left-[1478px] h-[19px] w-[59px] text-center font-[16px] font-semibold leading-[18.75px] text-[#ffffff]'>
          회원가입
        </p>
      </button>
    </header>
  );
};

export default Header;
