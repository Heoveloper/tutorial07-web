import { format, parseISO } from 'date-fns';

type ModifyProductProps = {
  id: number;
  name: string;
  description: string;
  startAt: string;
  endAt: string;
};

const ModifyProduct = ({ id, name, description, startAt, endAt }: ModifyProductProps) => {
  return (
    <form
      key={id}
      className='mx-auto mt-[10px] flex h-[60%] w-[800px] justify-around rounded-md border-[2px] border-[blue] bg-white pl-[20px]'
    >
      <div className='flex w-[300px] flex-col justify-between py-[20px]'>
        <div>
          <h3>상품명</h3>
          <input
            defaultValue={name}
            type='text'
            className='w-[90%] rounded-sm border-[1px] border-black'
            // onChange={() => e.a}
          />
        </div>
        <div>
          <h3>시작일</h3>
          {/* {list?.endAt ? format(parseISO(list.endAt), 'MM.dd') : '-'} */}
          <input
            defaultValue={startAt ? format(parseISO(startAt), 'yyyy-MM-dd') : '-'}
            type='text'
            onFocus={e => (e.target.type = 'datetime-local')}
            className='w-[90%] rounded-sm border-[1px] border-black'
          />
        </div>
        <div>
          <h3>마감일</h3>
          <input
            defaultValue={endAt ? format(parseISO(endAt), 'yyyy-MM-dd') : '-'}
            onFocus={e => (e.target.type = 'datetime-local')}
            className='w-[90%] rounded-sm border-[1px] border-black'
          />
        </div>
      </div>
      <div className='flex w-[300px] flex-col justify-center'>
        <h3>설명</h3>
        <textarea
          defaultValue={description}
          name=''
          id=''
          className='cols-[20px] rows-[5px] h-[80%] resize-none rounded-sm border-[1px] border-black'
        />
        {/* <input type='text' className='rounded-sm border-[1px] border-black' /> */}
      </div>
    </form>
  );
};

export default ModifyProduct;
