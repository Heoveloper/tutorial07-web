import { gql, useMutation, useQuery } from '@apollo/client';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CreateProduct from 'src/components/create-product';
import ModifyProduct from 'src/components/modify-product';
import ProductTable from 'src/components/product-table';
import UserTable from 'src/components/user-table';

const AdminPage = () => {
  const [viewUser, setViewUser] = useState(true);

  const [viewCreateProductForm, setViewCreateProductForm] = useState(false);

  const [viewModifyProductForm, setViewModifyProductForm] = useState(false);

  const [curRadio, setCurRadio] = useState(0);

  const navigate = useNavigate();

  const UserListBtn = () => {
    return (
      <div className='flex w-[80%] justify-end'>
        <button
          onClick={onReset}
          className='my-[10px] h-[50px] w-[150px] rounded-md bg-[#00c7ae] bg-slate-600  font-semibold text-white hover:opacity-80'
        >
          비밀번호 초기화
        </button>
      </div>
    );
  };

  const ProductListBtn = () => {
    return (
      <div className='flex w-[80%] justify-end'>
        <button
          onClick={() => onClickCreateProductBtn()}
          // onBlur={() => setViewCreateProductForm(false)}
          className='mx-[10px] my-[10px] h-[50px] w-[80px] rounded-md bg-[#00c7ae] bg-slate-600 font-semibold  text-white hover:opacity-80'
        >
          상품 생성
        </button>
        <button
          onClick={() => onClickModifyProductBtn()}
          className='mx-[10px] my-[10px] h-[50px] w-[80px] rounded-md bg-[#00c7ae] bg-slate-500  font-semibold text-white hover:opacity-80'
        >
          상품 수정
        </button>
        <button
          onClick={onDelete}
          className='mx-[10px] my-[10px] h-[50px] w-[80px] rounded-md bg-[#00c7ae] bg-red-600  font-semibold text-white hover:opacity-80'
        >
          상품 삭제
        </button>
      </div>
    );
  };

  // TODO admin => 전체회원목록조회(관리자)
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
    onError: e => console.log(e.message),
  });
  console.log(useQuery(SelectUsersByAdmin, {}));
  console.log(localStorage.getItem('accessToken'));
  const uLists = userQuery ? userQuery.selectUsersByAdmin : [];
  console.log('uLists', uLists);

  // TODO admin => 전체상품목록조회(모두)
  const SelectGroupPurchaseListsByEveryone = gql`
    query SelectGroupPurchaseListsByEveryone {
      selectGroupPurchaseListsByEveryone {
        id
        name
        image {
          original
        }
        isApplied
      }
    }
  `;
  const { data: purchaseQuery } = useQuery(SelectGroupPurchaseListsByEveryone);
  const pLists = purchaseQuery?.selectGroupPurchaseListsByEveryone;
  console.log(pLists);

  // TODO admin => 회원비밀번호초기화(관리자)
  const ResetPasswordByAdmin = gql`
    mutation ResetPasswordByAdmin($userId: Int!) {
      resetPasswordByAdmin(userId: $userId)
    }
  `;
  const [resetPassword] = useMutation(ResetPasswordByAdmin);

  // TODO admin => 단일상품조회(모두)
  const SelectGroupPurchaseListByEveryone = gql`
    query SelectGroupPurchaseListByEveryone($groupPurchaseListId: Int!) {
      selectGroupPurchaseListByEveryone(groupPurchaseListId: $groupPurchaseListId) {
        id
        name
        description
        startAt
        endAt
      }
    }
  `;
  const { data: single } = useQuery(SelectGroupPurchaseListByEveryone, {
    variables: { groupPurchaseListId: curRadio },
  });
  const product = single ? single.selectGroupPurchaseListByEveryone : [];
  console.log('product', product);
  console.log('curRadio', curRadio);

  // TODO admin => 상품목록삭제(관리자)
  const DeletePurchaseListsByAdmin = gql`
    mutation DeletePurchaseListsByAdmin($purchaseListId: [Int!]!) {
      deletePurchaseListsByAdmin(purchaseListIds: $purchaseListId)
    }
  `;
  const [deletePurchaseLists] = useMutation(DeletePurchaseListsByAdmin);

  const onLogOut = () => {
    window.localStorage.clear();
    navigate('/');
  };

  const onChangeCurRadio = (num: number) => {
    setCurRadio(num);
  };

  const onClickCreateProductBtn = () => {
    if (viewCreateProductForm === false) {
      setViewCreateProductForm(true);
      setViewModifyProductForm(false);
    } else {
      setViewCreateProductForm(false);
      setViewModifyProductForm(false);
    }
  };

  const onClickModifyProductBtn = () => {
    if (viewModifyProductForm === false) {
      setViewModifyProductForm(true);
      setViewCreateProductForm(false);
    } else {
      setViewModifyProductForm(false);
      setViewCreateProductForm(false);
    }
  };

  const onClickUserList = () => {
    setViewUser(true);
    setViewCreateProductForm(false);
    setViewModifyProductForm(false);
  };

  const onReset = () => {
    resetPassword({ variables: { userId: curRadio } })
      .then(res => {
        console.log(res);
        alert('회원 비밀번호 초기화 완료(0000)');
        location.reload();
      })
      .catch(err => console.log(err));
  };

  const onDelete = () => {
    if (confirm('정말 삭제하시겠습니까?')) {
      deletePurchaseLists({ variables: { purchaseListId: curRadio } })
        .then(res => {
          console.log(res);
          alert('상품 삭제 완료');
          location.reload();
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div className='flex items-center justify-center'>
      <div className='flex h-screen w-[400px] flex-col items-center justify-evenly bg-slate-600'>
        <div className='flex h-[200px] w-[300px] flex-col items-center justify-around border-[1px] border-solid shadow-md shadow-[#bbbbbb]'>
          <div>
            <p className='text-[20px] font-bold'>관리자 콘솔</p>
          </div>
          <button onClick={() => navigate('/')} className='text-red-50 hover:text-[#00c7ae]'>
            메인으로
          </button>
          <button onClick={onLogOut} className='text-red-300 hover:text-[orange]'>
            로그아웃
          </button>
        </div>
        <ul className='flex flex-col items-center justify-center font-[Roboto] text-[20px] text-[#ffffff]'>
          <li className='py-[30px] hover:text-[#00c7ae]'>
            <button onClick={onClickUserList}>회원 목록</button>
          </li>
          <li className='py-[30px] hover:text-[#00c7ae]'>
            <button onClick={() => setViewUser(false)}>공동 구매 상품 목록</button>
          </li>
        </ul>
      </div>
      <div className='flex h-screen w-[calc(100%-400px)] flex-col items-center justify-evenly bg-[#bbbbbb]'>
        <div className='mt-[10px] flex h-[80%] w-[1000px] flex-col items-center justify-between overflow-auto rounded-lg border-[1px] border-solid border-[#323232] bg-[#ffffff]'>
          <h1 className='my-[30px] text-[30px] font-bold'>
            {viewUser ? '회원 목록' : '상품 목록'}
          </h1>
          <table className='w-[100%] table-fixed text-center'>
            {viewUser ? <UserTHead /> : <ProductTHead />}
            {viewUser
              ? uLists.map(v => (
                  <UserTable
                    key={v.id}
                    id={v.id}
                    loginId={v.loginId}
                    password={v.password}
                    phone={v.phone}
                    onChangeCurRadio={num => onChangeCurRadio(num)}
                  />
                ))
              : pLists?.map(v => (
                  <ProductTable
                    key={v.id}
                    id={v.id}
                    name={v.name}
                    image={v.image}
                    isApplied={v.isApplied}
                    onChangeCurRadio={num => onChangeCurRadio(num)}
                  />
                ))}
          </table>
        </div>
        {viewModifyProductForm ? (
          <ModifyProduct
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            startAt={product.startAt}
            endAt={product.endAt}
          />
        ) : (
          <></>
        )}
        {viewCreateProductForm ? <CreateProduct /> : <></>}
        {viewUser ? <UserListBtn /> : <ProductListBtn />}
      </div>
    </div>
  );
};

export default AdminPage;

const UserTHead = () => {
  return (
    <thead>
      <tr>
        <th>선택</th>
        <th>회원번호</th>
        <th>아이디</th>
        <th>비밀번호</th>
        <th>연락처</th>
      </tr>
    </thead>
  );
};

const ProductTHead = () => {
  return (
    <thead>
      <tr>
        <th>선택</th>
        <th>상품번호</th>
        <th>상품명</th>
        <th>이미지</th>
        <th>신청여부</th>
      </tr>
    </thead>
  );
};

// const UserListBtn = () => {
//   return (
//     <div className='flex w-[80%] justify-end'>
//       <button
//         onClick={onReset}
//         className='h-[50px] w-[150px] rounded-md bg-[#00c7ae] bg-slate-600  font-semibold text-white hover:opacity-80'
//       >
//         비밀번호 초기화
//       </button>
//     </div>
//   );
// };

// const ProductListBtn = () => {
//   return (
//     <div className='flex w-[80%] justify-end'>
//       <button className='mx-[10px] h-[50px] w-[80px] rounded-md bg-[#00c7ae] bg-slate-600 font-semibold  text-white hover:opacity-80'>
//         상품 생성
//       </button>
//       <button className='mx-[10px] h-[50px] w-[80px] rounded-md bg-[#00c7ae] bg-slate-500  font-semibold text-white hover:opacity-80'>
//         상품 수정
//       </button>
//       <button className='mx-[10px] h-[50px] w-[80px] rounded-md bg-[#00c7ae] bg-red-600  font-semibold text-white hover:opacity-80'>
//         상품 삭제
//       </button>
//     </div>
//   );
// };
