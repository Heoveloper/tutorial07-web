import Layout from '../components/layout';

const MyPage = ({ myToken }: any) => {
  return (
    <Layout>
      <div>
        <div className='w-[100px]'>
          <p>마이 페이지</p>
        </div>
      </div>
    </Layout>
  );
};

export default MyPage;
