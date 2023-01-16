import { Link } from 'react-router-dom';

const ProductCard = () => {
  return (
    <Link to='/detail'>
      <div className='h-[358x] w-[285px]'>
        <img src='/product-1.png' className='h-[285px] w-[285px]' />
        <h4 className='mt-[14px] font-[Roboto] text-[18px] font-semibold leading-[31.98px] text-[#323232]'>
          상품명 예시입니다.
        </h4>
        <p className='font-[Roboto] text-[15px] font-medium leading-[26.65px] text-[#00c7ae]'>
          <span>08.19</span> - <span>08.25</span>
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
