import { gql, useQuery } from '@apollo/client';
import { format, parseISO } from 'date-fns';
import { ko } from 'date-fns/locale';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ProductDetailAdminPage = () => {
  const [viewImage, setViewImage] = useState(true);

  const { id } = useParams();
  const groupPurchaseListId = Number(id);

  const navigate = useNavigate();

  const SelectGroupPurchaseListByEveryone = gql`
    query SelectGroupPurchaseListByEveryone($groupPurchaseListId: Int!) {
      selectGroupPurchaseListByEveryone(groupPurchaseListId: $groupPurchaseListId) {
        id
        name
        description
        state
        startAt
        endAt
        createdAt
        image {
          original
        }
        # isApplied
        userPurchaseLog {
          id
          userId
          user {
            loginId
          }
        }
      }
    }
  `;
  const { data } = useQuery(SelectGroupPurchaseListByEveryone, {
    variables: { groupPurchaseListId },
  });
  const list = data?.selectGroupPurchaseListByEveryone;
  console.log('list', list);
  // console.log(list ? list?.isApplied : false);
  const logList = list ? list.userPurchaseLog : [];
  console.log(logList);

  const isUserList = () => {
    if (logList.length === 0) {
      return false;
    }
    return true;
  };

  const onLogOut = () => {
    window.localStorage.clear();
    navigate('/');
  };

  return (
    <div className='flex w-screen flex-col bg-slate-600'>
      <div className='flex w-screen flex-col items-center'>
        <div className='flex h-[120px] w-[1000px] justify-between'>
          <button
            onClick={() => navigate('/')}
            className='font-bold text-red-50 hover:text-[#00c7ae]'
          >
            메인화면
          </button>
          <button
            onClick={() => navigate('/admin')}
            className='font-bold text-red-50 hover:text-[#bbbbbb]'
          >
            관리자 콘솔로 돌아가기
          </button>
          <button onClick={onLogOut} className='font-bold text-red-50 hover:text-red-500'>
            로그아웃
          </button>
        </div>
        <div className='mx-auto flex w-[1300px] justify-around rounded-md bg-[#bbbbbb] py-[30px] px-[20px]'>
          {viewImage ? (
            <img
              src={list?.image.original}
              className='h-[800px] w-[800px] rounded-md border-[3px] border-white'
            />
          ) : (
            <div className='h-[800px] w-[800px] rounded-md bg-white'>
              {logList.map(v => (
                <div className='my-[20px] flex justify-center overflow-auto' key={v?.__typename}>
                  <div className='flex h-[50px] w-[200px] items-center justify-center'>
                    <h3 className='mr-1 font-[Roboto] font-bold'>공동구매 번호: </h3>
                    <input
                      type='text'
                      className='w-[50px] border-[1px] border-none font-[Roboto]'
                      value={v?.id}
                    />
                  </div>
                  <div className='flex h-[50px] w-[200px] items-center justify-center'>
                    <h3 className='mr-1 font-[Roboto] font-bold'>신청자 회원번호: </h3>
                    <input
                      type='text'
                      className='w-[50px] border-[1px] border-none font-[Roboto]'
                      value={v?.userId}
                    />
                  </div>
                  <div className='flex h-[50px] w-[300px] items-center justify-center'>
                    <h3 className='mr-1 font-[Roboto] font-bold'>신청자 아이디: </h3>
                    <input
                      type='text'
                      className='w-[180px] border-[1px] border-none font-[Roboto]'
                      value={v?.user?.loginId}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className='item-center h-[800px] w-[400px] rounded-md bg-white'>
            <div className='my-[10px] mx-[10px] flex h-[750px] flex-col justify-between'>
              <div className='my-[5px]'>
                <h3 className='font-[Roboto] font-bold'>상품번호</h3>
                <input
                  type='text'
                  className='w-[300px] border-[1px] border-none font-[Roboto]'
                  value={list?.id}
                />
              </div>
              <div className='my-[5px]'>
                <h3 className='font-[Roboto] font-bold'>상품명</h3>
                <input
                  type='text'
                  className='w-[300px] border-[1px] border-none font-[Roboto]'
                  value={list?.name}
                />
              </div>
              <div className='my-[5px]'>
                <h3 className='font-[Roboto] font-bold'>상태</h3>
                <input
                  type='text'
                  className='w-[300px] border-[1px] border-none font-[Roboto]'
                  value={list?.state == 'ACTIVE' ? '활성' : '비활성'}
                />
              </div>
              <div className='my-[5px]'>
                <h3 className='font-[Roboto] font-bold'>등록일자</h3>
                <input
                  type='text'
                  className='w-[300px] border-[1px] border-none font-[Roboto]'
                  value={
                    list?.createdAt
                      ? format(parseISO(list?.createdAt), `yyyy. MM. dd. a hh:mm`, { locale: ko })
                      : ''
                  }
                />
              </div>
              <div className='my-[5px]'>
                <h3 className='font-[Roboto] font-bold'>공동구매 시작일자</h3>
                <input
                  type='text'
                  className='w-[300px] border-[1px] border-none font-[Roboto]'
                  value={
                    list?.startAt
                      ? format(parseISO(list?.startAt), `yyyy. MM. dd. a hh:mm`, { locale: ko })
                      : ''
                  }
                />
              </div>
              <div className='my-[5px]'>
                <h3 className='font-[Roboto] font-bold'>공동구매 마감일자</h3>
                <input
                  type='text'
                  className='w-[300px] border-[1px] border-none font-[Roboto]'
                  value={
                    list?.endAt
                      ? format(parseISO(list?.endAt), `yyyy. MM. dd. a hh:mm`, { locale: ko })
                      : ''
                  }
                />
              </div>
              <div className='my-[5px]'>
                <h3 className='font-[Roboto] font-bold'>상품 설명</h3>
                <textarea
                  className='h-[200px] w-[300px] resize-none rounded-md border-[1px] border-gray-400 py-2 px-2 font-[Roboto]'
                  value={list?.description}
                ></textarea>
              </div>
              {/* <div className='my-[5px]'>
                <h3 className='font-[Roboto] font-bold'>신청 여부</h3>
                <input
                  type='text'
                  className='w-[300px] border-[1px] border-none font-[Roboto]'
                  value={list?.isApplied == true ? '신청된 상품' : '신청되지 않은 상품'}
                />
              </div> */}
              <div className='my-[5px]'>
                <h3 className='font-[Roboto] font-bold'>신청자 목록</h3>
                {isUserList() ? (
                  <button
                    onClick={() => {
                      if (viewImage) {
                        setViewImage(false);
                      } else {
                        setViewImage(true);
                      }
                    }}
                    className='h-[30px] w-[200px] rounded-md bg-[#00c7ae] font-bold text-white hover:opacity-80'
                  >
                    {viewImage ? '신청자 정보 보기' : '상품 이미지 보기'}
                  </button>
                ) : (
                  <p className='font-[Roboto]'>신청자가 없습니다.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailAdminPage;
