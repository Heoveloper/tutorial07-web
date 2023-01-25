import { format, parseISO } from 'date-fns';
import { Link } from 'react-router-dom';
import { SelectGroupPurchaseListsByEveryoneQuery } from 'src/api/gql/graphql';

type ProductProps = {
  item: SelectGroupPurchaseListsByEveryoneQuery['selectGroupPurchaseListsByEveryone'][number];
};

const ProductCard = ({ item }: ProductProps) => {
  return (
    <Link to={`/detail/${item.id}`}>
      <div className='h-[358x] w-[285px]'>
        <img src={item.image?.original} className='h-[285px] w-[285px]' />
        <h4 className='mt-[14px] font-[Roboto] text-[18px] font-semibold leading-[31.98px] text-[#323232]'>
          {item.name}
        </h4>
        <p className='font-[Roboto] text-[15px] font-medium leading-[26.65px] text-[#00c7ae]'>
          <span>{item.startAt ? format(parseISO(item.startAt), 'MM.dd') : ''}</span> -{' '}
          <span>{item.endAt ? format(parseISO(item.endAt), 'MM.dd') : ''}</span>
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
