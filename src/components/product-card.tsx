import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';

type ProductProps = {
  // id: number;
  name: string;
  // description: string;
  startAt: string;
  endAt: string;
  // createdAt: string;
  image: string;
};

const ProductCard = ({ endAt, name, startAt, image }: ProductProps) => {
  return (
    <Link to='/detail'>
      <div className='h-[358x] w-[285px]'>
        <img src={image} className='h-[285px] w-[285px]' />
        <h4 className='mt-[14px] font-[Roboto] text-[18px] font-semibold leading-[31.98px] text-[#323232]'>
          {name}
        </h4>
        <p className='font-[Roboto] text-[15px] font-medium leading-[26.65px] text-[#00c7ae]'>
          <span>{format(parseISO(startAt), 'MM.dd')}</span> -{' '}
          <span>{format(parseISO(endAt), 'MM.dd')}</span>
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
