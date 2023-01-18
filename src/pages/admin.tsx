import { gql, useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import UserTable from 'src/components/user-table';

const AdminPage = () => {
  const navigate = useNavigate();
  const goMain = () => {
    navigate('/');
  };

  const onLogOut = () => {
    window.localStorage.clear();
    navigate('/');
  };

  const SelectUsersByAdmin = gql`
    query SelectUsersByAdmin {
      selectUsersByAdmin {
        id
        loginId
        password
        phone
      }
    }
  `;
  const { data: userQuery } = useQuery(SelectUsersByAdmin, {
    context: {
      headers: {
        authorization: `Bearer ${window.localStorage.getItem('accessToken')}`,
        'Content-Type': 'application/json',
      },
    },
  });
  const uLists = userQuery?.selectUsersByAdmin();
  console.log(uLists);

  // const SelectGroupPurchaseListsByEveryone = gql`
  //   query SelectGroupPurchaseListsByEveryone {
  //     selectGroupPurchaseListsByEveryone {
  //       id
  //       name
  //       image {
  //         original
  //       }
  //       isApplied
  //     }
  //   }
  // `;
  // const { data: purchaseQuery } = useQuery(SelectUsersByAdmin);
  // const pLists = purchaseQuery?.selectUsersByAdmin();
  // console.log(pLists);

  return (
    <div className='flex items-center justify-center'>
      <div className='flex h-screen w-[400px] flex-col items-center justify-evenly bg-slate-600'>
        <div className='flex h-[200px] w-[300px] flex-col items-center justify-around border-[1px] border-solid shadow-md shadow-[#bbbbbb]'>
          <div>
            <p className='text-[20px] font-bold'>관리자 콘솔</p>
          </div>
          <button onClick={goMain} className='text-red-50 hover:text-[#00c7ae]'>
            메인으로
          </button>
          <button onClick={onLogOut} className='text-red-300 hover:text-[orange]'>
            로그아웃
          </button>
        </div>
        <ul className='flex flex-col items-center justify-center font-[Roboto] text-[20px] text-[#ffffff]'>
          <li className='py-[30px] hover:text-[#00c7ae]'>
            <button>유저 목록</button>
          </li>
          <li className='py-[30px] hover:text-[#00c7ae]'>
            <button>공동 구매 목록</button>
          </li>
        </ul>
      </div>
      <div className='flex-end flex h-screen w-[calc(100%-400px)] items-center justify-center bg-[#bbbbbb]'>
        <div className='h-[90%] w-[95%] rounded-lg border-[1px] border-solid border-[#323232] bg-[#ffffff]'>
          <table className='w-[95%] overflow-hidden text-center'>
            <thead>
              <tr>
                <th className='underline'>회원번호</th>
                <th className='underline'>아이디</th>
                <th className='underline'>비밀번호</th>
                <th className='underline'>연락처</th>
                <th>비밀번호 초기화</th>
              </tr>
            </thead>
            <tbody>
              {uLists?.map(v => (
                <UserTable
                  key={v.id}
                  id={v.id}
                  loginId={v.loginId}
                  password={v.password}
                  phone={v.phone}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
