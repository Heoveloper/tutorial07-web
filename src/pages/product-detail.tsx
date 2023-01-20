import { gql, useMutation, useQuery } from '@apollo/client';
import { format, parseISO } from 'date-fns';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from 'src/components/layout';

const ProductDetailPage = () => {
  const [viewApplyBtn, setViewApplyBtn] = useState(true);

  const { id } = useParams();
  const groupPurchaseListId = Number(id);

  // TODO 공동구매상품단일조회(모두)
  const SelectGroupPurchaseListByEveryone = gql`
    query SelectGroupPurchaseListByEveryone($groupPurchaseListId: Int!) {
      selectGroupPurchaseListByEveryone(groupPurchaseListId: $groupPurchaseListId) {
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
  const { data } = useQuery(SelectGroupPurchaseListByEveryone, {
    variables: { groupPurchaseListId },
  });
  const list = data?.selectGroupPurchaseListByEveryone;
  console.log(list);

  // // TODO 회원조회(관리자)
  // const SelectUserByAdmin = gql`
  //   query SelectUserByAdmin($userId: Int!) {
  //     selectUserByAdmin(userId: $userId) {
  //       id
  //       userPurchaseLog {
  //         groupPurchaseListId
  //       }
  //     }
  //   }
  // `;
  // const { data: userQuery } = useQuery(SelectUserByAdmin, { variables: { userId: 1 } });
  // const userPLog = userQuery ? userQuery.userPurchaseLog : [];
  // console.log('sss', userQuery?.userPurchaseLog);
  // console.log('plg', userPLog.groupPurchaseListId);

  // TODO 공동구매신청(회원)
  const ApplyGroupPurchaseByUser = gql`
    mutation ApplyGroupPurchaseByUser($groupPurchaseId: Int!) {
      applyGroupPurchaseByUser(groupPurchaseId: $groupPurchaseId)
    }
  `;
  const [applyProduct] = useMutation(ApplyGroupPurchaseByUser);

  const groupPurchaseId = Number(id);
  const onApply = () => {
    applyProduct({ variables: { groupPurchaseId: groupPurchaseId } })
      .then(res => {
        console.log('res', res);
        console.log('id', id);
        alert('공동 구매 신청이 완료되었습니다.');
        setViewApplyBtn(false);
      })
      .catch(err => console.log(err));
  };

  const CancelGroupPurchaseByUser = gql`
    mutation CancelGroupPurchaseByUser($groupPurchaseId: Int!) {
      cancelGroupPurchaseByUser(groupPurchaseId: $groupPurchaseId)
    }
  `;
  const [cancelProduct] = useMutation(CancelGroupPurchaseByUser);
  const onCancel = () => {
    cancelProduct({ variables: { groupPurchaseId: groupPurchaseId } })
      .then(res => {
        console.log('resres', res);
        console.log('idid', id);
        alert('해당 상품의 신청이 취소되었습니다.');
        setViewApplyBtn(true);
      })
      .catch(err => console.log(err));
  };

  return (
    <Layout>
      <div className='mx-auto mt-[100px] mb-[140px] flex h-[600px] w-[1198px] justify-between'>
        <img src={list?.image.original} className='h-[600px] w-[600px]' />
        <div className='flex h-[600px] w-[548px] flex-col justify-between'>
          <h1 className='font-[Roboto] text-[32px] font-semibold leading-[37.5px] text-[#323232]'>
            {list?.name}
          </h1>
          <div className='flex h-[450px] w-[550px] flex-col justify-evenly border-y-[1px] border-solid border-[#bbbbbb]'>
            <div className='flex w-[199px] items-center justify-between'>
              <div className='flex h-[47px] flex-col'>
                <p className='font-[Roboto] text-[10px] font-semibold leading-[11.72px] text-[#bbbbbb]'>
                  시작일
                </p>
                <p className='font-[Roboto] text-[30px] font-medium leading-[35.16px] text-[#00c7ae]'>
                  {list?.startAt ? format(parseISO(list.startAt), 'MM.dd') : '-'}
                </p>
              </div>
              <p className='font-[Roboto] text-[30px] font-semibold leading-[35.16px] text-[#00c7ae]'>
                -
              </p>
              <div>
                <p className='font-[Roboto] text-[10px] font-semibold leading-[11.72px] text-[#bbbbbb]'>
                  마감일
                </p>
                <p className='font-[Roboto] text-[30px] font-medium leading-[35.16px] text-[#00c7ae]'>
                  {list?.endAt ? format(parseISO(list.endAt), 'MM.dd') : '-'}
                </p>
              </div>
            </div>
            <div className='border-[1px] border-solid border-[#e1e1e1]' />
            <div className='flex h-[325px] w-[548px] flex-col justify-between overflow-auto font-[Roboto] text-[15px] font-medium leading-[24.93px] text-[#323232]'>
              <p>{list?.description}</p>
            </div>
          </div>
          {viewApplyBtn ? (
            <button
              onClick={onApply}
              className=' h-[62px] w-[241px] rounded-md bg-[#00c7ae] font-[Roboto] text-[24px] font-semibold leading-[28.13px] text-[#ffffff]'
            >
              신청하기
            </button>
          ) : (
            <button
              onClick={onCancel}
              className=' h-[62px] w-[241px] rounded-md bg-[#323232] font-[Roboto] text-[24px] font-semibold leading-[28.13px] text-[#ffffff]'
            >
              신청취소
            </button>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default React.memo(ProductDetailPage);
