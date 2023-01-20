import { gql, useQuery } from '@apollo/client';
import ProductCard from 'src/components/product-card';
import Layout from '../components/layout';

const GroupPurchasePage = () => {
  // TODO 공동구매리스트목록(모두)
  const SelectGroupPurchaseListsByEveryone = gql`
    query SelectGroupPurchaseListsByEveryone {
      selectGroupPurchaseListsByEveryone {
        id
        name
        description
        startAt
        endAt
        image {
          original
        }
      }
    }
  `;

  const { data } = useQuery(SelectGroupPurchaseListsByEveryone);
  const lists = data ? data.selectGroupPurchaseListsByEveryone : [];
  console.log(lists);

  return (
    <Layout>
      <div className='mx-auto mt-[48px] mb-[108px] flex w-[1200px] flex-col justify-between'>
        <h2 className='font=[Roboto] mb-[28px] text-[28px] font-semibold leading-[32.81px] text-[#323232]'>
          공동구매
        </h2>
        <div className='mx-auto grid w-[1200px] grid-cols-4 gap-x-[20px] gap-y-[28px]'>
          {lists.map(v => (
            <ProductCard
              key={v.id}
              id={v.id}
              name={v.name}
              startAt={v.startAt}
              endAt={v.endAt}
              image={v.image.original}
            />
          ))}
          {/* {Array.from({ length: 20 }, (_, i) => (
            <ProductCard
              key={i}
              name={data.selectGroupPurchaseListsByEveryone[0].name}
              startAt={data.selectGroupPurchaseListsByEveryone[0].startAt}
              endAt={data.selectGroupPurchaseListsByEveryone[0].endAt}
            />
          ))} */}
        </div>
      </div>
    </Layout>
  );
};

export default GroupPurchasePage;
