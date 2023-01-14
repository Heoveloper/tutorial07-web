import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='top-[1080px] left-0 h-[317px] w-[1920px] bg-[#252528]'>
      <div className='mx-auto flex h-[317px] w-[1200px] items-center justify-between'>
        <div className='flex h-[196px] w-[667px] flex-col justify-center'>
          <img src='/logo.png' className='h-[43px] w-[131px]' />
          <div className='mt-[24px] flex w-[237px] justify-between'>
            <Link to='/개인정보처리방침'>
              <p className='font-Roboto font-semibold font-[16px] leading-[19px] text-[#e1e1e1]'>
                개인정보처리방침
              </p>
            </Link>
            <Link to='/이용약관'>
              <p className='font-Roboto font-[16px] font-semibold leading-[19px] text-[#e1e1e1]'>
                이용약관
              </p>
            </Link>
          </div>
          <div className='mt-[19px] h-[32px] w-[596px]'>
            <p className='font-[16px] text-[#bbbbbb] opacity-[0.62]'>
              (주)Logo는 통신판매중개자로서 총신판매의 당사자가 아니며 개별 판매자가 제공하는
              서비스에 대한 이행, 계약사항 등과 관련한 의무와 책임은 거래당사자에게 있습니다.
            </p>
          </div>
          <div className='mt-[12px] h-[48px] w-[667px]'>
            <p className='font-[12px] leading-[15.62px] text-[#bbbbbb] opacity-[0.62]'>
              상호명:(주)Logo﹒대표이사:KIM MIN JI﹒개인정보책임관리자:김태우﹒주소:서울특별시
              강남구 테헤란고 415, L7, 강남타워 5층
            </p>
            <p className='font-[12px] leading-[15.62px] text-[#bbbbbb] opacity-[0.62]'>
              사업자등록번호:120-88-21-22325﹒통신판매업신고증:제
              2015-서울강남-00567호﹒직업정보제공사업 신고번호: 서울청 제 2019-21호
            </p>
            <p className='font-[12px] leading-[15.62px] text-[#bbbbbb] opacity-[0.62]'>
              고객센터:1599-5319﹒이메일:support@logo.com
            </p>
          </div>
        </div>
        <div className='flex h-[196px] items-end'>
          <div className='h-[14px] w-[198px]'>
            <p className='font-Roboto font-[12px] leading-[14.06px] text-[#bbbbbb] opacity-[0.62]'>
              Copyright Ⓒ<span className='font-semibold'>BMI</span> - All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
