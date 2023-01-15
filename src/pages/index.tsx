import Layout from '../components/layout';

const HomePage = () => {
  return (
    <Layout>
      <img
        className='mx-auto mt-[48px] mb-[60px] h-[344px] w-[1200px] bg-[f8fffe]'
        src='/banner.png'
        alt=''
      />
      <div className='mb-[108px] flex flex-col items-center justify-center'>
        <div className='mb-[20px] flex w-[1200px] items-start'>
          <h2 className='h-[33px] w-[104px] font-[Roboto] text-[28px] font-semibold leading-[32.81px] text-[#323232]'>
            공동구매
          </h2>
        </div>
        <div className='mx-auto grid w-[1200px] grid-cols-4 gap-x-[20px] gap-y-[28px]'>
          {Array.from({ length: 16 }, (_, i) => (
            <img key={i} className='h-[285px] w-[285px]' />
          ))}
          {/* {Array.from({ length: 16 }, (_, i) => (
            <div key={i} className='bg-red-400'>
              {i + 1}
            </div>
          ))} */}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
