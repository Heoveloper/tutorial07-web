import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='mx-auto flex h-[72px] w-[1920px] justify-around bg-[#ffffff] shadow-[inset_0_-1px_0_#f2f2f2]'>
      <div className='flex w-[1200px] justify-between'>
        <div className='flex w-[507px] items-center justify-between'>
          <Link to='/'>
            <img src='/logo.png' className='h-[43px] w-[131px]' />
          </Link>
          <div className='border-gray-bright flex h-[48px] w-[336px] items-center justify-start rounded-md border-[1px] border-[#e1e1e1] pl-[21px]'>
            <img src='/search.png' className='h-[24px] w-[24px]' />
            <input
              className='font-Roboto ml-[18.27px] font-[16px] text-[#bbbbbb] outline-none'
              placeholder='어떤 서비스가 필요하세요?'
            />
          </div>
        </div>
        <div className='flex w-[283px] items-center justify-between'>
          <Link to='/login'>공동 구매</Link>
          <Link to='/login'>로그인</Link>
          <button className='flex h-[42px] w-[105px] items-center justify-center rounded-md bg-[#00c7ae]'>
            <p className='font-Roboto top-[27px] left-[1478px] h-[19px] w-[59px] text-center font-[16px] font-semibold leading-[18.75px] text-[#ffffff]'>
              회원가입
            </p>
          </button>
        </div>
      </div>
      {/* <div className='flex items-center justify-center'>
        <img src='/logo.png' className='h-[43px] w-[131px]' />
        <img src='/search.png' className='h-[24px] w-[24px]' />
      </div>
      <div className='flex w-[283px] items-center justify-center'>
        <Link to='/login'>공동 구매</Link>
        <Link to='/login'>로그인</Link>
        <button className='flex h-[42px] w-[105px] items-center justify-center rounded-md bg-[#00c7ae]'>
          <p className='font-Roboto top-[27px] left-[1478px] h-[19px] w-[59px] text-center font-[16px] font-semibold leading-[18.75px] text-[#ffffff]'>
            회원가입
          </p>
        </button>
      </div> */}
    </header>
  );
};

export default Header;
