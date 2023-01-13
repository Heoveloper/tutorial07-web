import Layout from '../components/layout';

const HomePage = () => {
  return (
    <Layout>
      <img
        className='absolute left-[360px] top-[120px] h-[344px] w-[1200px] bg-[f8fffe]'
        src='/banner.png'
        alt=''
      />
      <div>
        <h2 className='font-Roboto absolute top-[524px] left-[360px] h-[33px] w-[104px] text-[28px] font-semibold leading-[32.81px] text-[#323232]'>
          공동구매
        </h2>
        <div className='mx-auto grid w-[1200px] grid-cols-4 gap-x-[20px] gap-y-[28px]'>
          {Array.from({ length: 100 }, (_, i) => (
            <div key={i} className='bg-red-400'>
              {i + 1}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
