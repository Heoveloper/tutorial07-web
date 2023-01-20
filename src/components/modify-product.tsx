import { gql, useMutation } from '@apollo/client';
import { format, parseISO } from 'date-fns';
import { ko } from 'date-fns/locale';
import { useForm } from 'react-hook-form';

type ModifyProductType = {
  groupPurchaseListId: number;
  productName: string;
  description: string;
  startAt: string;
  endAt: string;
};

const UpdatePurchaseListByAdmin = gql`
  mutation UpdatePurchaseListByAdmin(
    $groupPurchaseListId: Int!
    $productName: String
    $description: String
    $startAt: DateTime
    $endAt: DateTime
  ) {
    updatePurchaseListByAdmin(
      groupPurchaseListId: $groupPurchaseListId
      productName: $productName
      description: $description
      startAt: $startAt
      endAt: $endAt
    )
  }
`;

const ModifyProduct = ({
  groupPurchaseListId,
  productName,
  description,
  startAt,
  endAt,
}: ModifyProductType) => {
  const [modifyProduct] = useMutation(UpdatePurchaseListByAdmin);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ModifyProductType>();

  const onUpdate = (data: ModifyProductType) => {
    const { productName, description, startAt, endAt } = data;

    modifyProduct({
      variables: {
        groupPurchaseListId: groupPurchaseListId,
        productName: productName,
        description: description,
        startAt: new Date(startAt),
        endAt: new Date(endAt),
      },
    })
      .then(res => {
        console.log(res);
        alert('상품정보를 수정하였습니다.');
        location.reload();
      })
      .catch(err => console.log(err));
  };

  // TODO 상품 수정 시 보이는 날짜 맞춰주기
  // const formatDate = (date: any) => {
  //   const dt = new Date(date);
  //   console.log('dt', format(dt, `yyyy. MM. dd. a hh:mm`, { locale: ko }));
  //   const newDt = new Date(format(dt, `yyyy-MM-dd hh:mm`, { locale: ko }));
  //   console.log(newDt);
  //   newDt.setHours(newDt.getHours() + 3);
  //   console.log('newnew', newDt);

  //   const newDate = format(newDt, 'yyyy. MM. dd. a hh:mm', { locale: ko });
  //   return newDate;
  // };

  return (
    <form
      method='post'
      onSubmit={handleSubmit(onUpdate)}
      key={groupPurchaseListId}
      className='mx-auto mt-[10px] flex h-[60%] w-[800px] justify-around rounded-md border-[2px] border-[blue] bg-white pl-[20px]'
    >
      <div className='flex w-[300px] flex-col justify-between py-[20px]'>
        <div>
          <h3>상품명</h3>
          <input
            defaultValue={productName}
            type='text'
            className='w-[90%] rounded-sm border-[1px] border-black'
            {...register('productName', { required: '상품명을 입력해주세요.' })}
          />
        </div>
        <div>
          <h3>시작일</h3>
          <input
            // defaultValue={formatDate(startAt)}
            defaultValue={
              startAt ? format(parseISO(startAt), `yyyy. MM. dd. a hh:mm`, { locale: ko }) : ''
            }
            type='text'
            onFocus={e => (e.target.type = 'datetime-local')}
            className='w-[90%] rounded-sm border-[1px] border-black'
            {...register('startAt', { required: '시작일을 입력해주세요.' })}
          />
        </div>
        <div>
          <h3>마감일</h3>
          <input
            // defaultValue={formatDate(endAt)}
            defaultValue={
              endAt ? format(parseISO(endAt), `yyyy. MM. dd. a hh:mm`, { locale: ko }) : ''
            }
            onFocus={e => (e.target.type = 'datetime-local')}
            className='w-[90%] rounded-sm border-[1px] border-black'
            {...register('endAt', { required: '마감일을 입력해주세요.' })}
          />
        </div>
      </div>
      <div className='flex w-[300px] flex-col items-center justify-center'>
        <div className='h-[200px]'>
          <h3>설명</h3>
          <textarea
            defaultValue={description}
            id=''
            className='cols-[20px] rows-[5px] h-[150px] w-[300px] resize-none rounded-sm border-[1px] border-black'
            {...register('description', { required: '설명을 입력해주세요.' })}
          />
        </div>
        <button
          type='submit'
          className='h-[50px] w-[100px] self-end rounded-md bg-slate-500 font-bold text-white hover:opacity-80'
        >
          수정
        </button>
      </div>
    </form>
  );
};

export default ModifyProduct;
