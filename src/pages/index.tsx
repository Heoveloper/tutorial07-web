import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      홈입니다.
      <Link to='/notice'>공지사항으로 이동</Link>
    </div>
  );
};

export default HomePage;
