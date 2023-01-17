import Layout from '../components/layout';

// type MyPageProps = {
//   myToken: ;
// };

const MyPage = ({ myToken }: any) => {
  return (
    <Layout>
      <div>
        <div className='w-[100px]'>
          <p>마이 페이지</p>
          <p>내 토큰: {myToken}</p>
        </div>
      </div>
    </Layout>
  );
};

export default MyPage;
