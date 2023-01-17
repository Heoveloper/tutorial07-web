import { Link } from 'react-router-dom';
import HeaderNav from './header-nav';

const Header = () => {
  return (
    <header className='mx-auto flex h-[72px] w-[1920px] justify-around bg-[#ffffff] shadow-[inset_0_-1px_0_#f2f2f2]'>
      <div className='flex w-[1200px] justify-between'>
        <div className='flex w-[507px] items-center justify-between'>
          <Link to='/'>
            <img src='/logo.png' className='h-[43px] w-[131px]' />
          </Link>
          <div className='border-gray-bright box-border flex h-[48px] w-[336px] items-center justify-start rounded-md border-[1px] border-[#e1e1e1] pl-[21px] focus-within:rounded-t-md focus-within:border-2 focus-within:border-[#00c7ae]'>
            <img src='/search.png' className='h-[24px] w-[24px]' />
            <input
              className='ml-[18.27px] outline-none placeholder:text-[#bbbbbb]'
              placeholder='어떤 서비스가 필요하세요?'
            />
          </div>
        </div>
        <HeaderNav />
      </div>
    </header>
  );
};

export default Header;
