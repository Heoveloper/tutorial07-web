import { gql, useMutation } from '@apollo/client';
import { useForm } from 'react-hook-form';

type CreateProductType = {
  productName: string;
  description: string;
  startAt: string;
  endAt: string;
};

// TODO 상품 생성
const CreateProductByAdmin = gql`
  mutation CreateProductByAdmin(
    $productName: String
    $description: String
    $startAt: DateTime
    $endAt: DateTime
  ) {
    createProductByAdmin(
      productName: $productName
      description: $description
      startAt: $startAt
      endAt: $endAt
    )
  }
`;

const CreateProduct = () => {
  const [createProduct] = useMutation(CreateProductByAdmin);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateProductType>();

  const onCreate = (data: CreateProductType) => {
    console.log('datadata', data);
    const { productName, description, startAt, endAt } = data;

    createProduct({
      variables: {
        productName: productName,
        description: description,
        startAt: new Date(startAt),
        endAt: new Date(endAt),
      },
    })
      .then(res => {
        console.log(res);
        alert('상품을 생성하였습니다.');
        location.reload();
      })
      .catch(err => console.log(err));
  };

  return (
    <form
      method='post'
      onSubmit={handleSubmit(onCreate)}
      className='mx-auto mt-[10px] flex h-[60%] w-[800px] justify-around rounded-md border-[2px] border-slate-600 bg-white pl-[20px]'
    >
      <div className='flex w-[300px] flex-col justify-between py-[20px]'>
        <div>
          <h3>상품명</h3>
          <input
            type='text'
            className='w-[90%] rounded-sm border-[1px] border-black'
            {...register('productName', { required: '상품명을 입력해주세요.' })}
          />
        </div>
        <div>
          <h3>시작일</h3>
          <input
            type='datetime-local'
            className='w-[90%] rounded-sm border-[1px] border-black'
            {...register('startAt', { required: '시작일을 입력해주세요.' })}
          />
        </div>
        <div>
          <h3>마감일</h3>
          <input
            type='datetime-local'
            className='w-[90%] rounded-sm border-[1px] border-black'
            {...register('endAt', { required: '마감일을 입력해주세요.' })}
            onChange={e => {
              console.log(e.target.value);
              console.log(typeof e.target.value);
            }}
          />
        </div>
      </div>
      <div className='flex w-[300px] flex-col items-center justify-center'>
        <div className='h-[200px]'>
          <h3>설명</h3>
          <textarea
            id=''
            className='cols-[20px] rows-[5px] h-[150px] w-[300px] resize-none rounded-sm border-[1px] border-black'
            {...register('description', { required: '상품설명을 입력해주세요.' })}
          />
          {/* <input type='text' className='rounded-sm border-[1px] border-black' /> */}
        </div>
        <button
          type='submit'
          className='h-[50px] w-[100px] self-end rounded-md bg-slate-600 font-bold text-white hover:opacity-80'
        >
          생성
        </button>
      </div>
    </form>
  );
};

export default CreateProduct;
