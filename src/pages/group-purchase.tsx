import ProductCard from 'src/components/product-card';
import Layout from '../components/layout';

const GroupPurchasePage = () => {
  return (
    <Layout>
      <div className='mx-auto mt-[48px] mb-[108px] flex h-[1968px] w-[1200px] flex-col justify-between'>
        <h2 className='font=[Roboto] mb-[28px] text-[28px] font-semibold leading-[32.81px] text-[#323232]'>
          공동구매
        </h2>
        <div className='mx-auto grid w-[1200px] grid-cols-4 gap-x-[20px] gap-y-[28px]'>
          {Array.from({ length: 20 }, (_, i) => (
            <ProductCard key={i} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default GroupPurchasePage;
