import { gql, useMutation } from '@apollo/client';
import React from 'react';
import { Link } from 'react-router-dom';

type ProductProps = {
  id: number;
  name: string;
  image: string;
  state: string;
  // isApplied: boolean;
  onChangeCurRadio: (num: number) => void;
};

const ProductTable = ({ id, name, image, state, onChangeCurRadio }: ProductProps) => {
  const UpdatePurchaseStateByAdmin = gql`
    mutation UpdatePurchaseStateByAdmin($purchaseListId: [Int!]!, $state: GroupPurchaseListState) {
      updatePurchaseStateByAdmin(purchaseListId: $purchaseListId, state: $state)
    }
  `;
  const [UpdatePurchaseState] = useMutation(UpdatePurchaseStateByAdmin);

  const onUpdateState = () => {
    console.log('stst', state);
    const changedState = state === '활성화' ? 'INACTIVE' : 'ACTIVE';
    const idn = Number(id);
    console.log('cscs', changedState);
    UpdatePurchaseState({ variables: { purchaseListId: idn, state: changedState } }).then(res => {
      console.log(res);
      location.reload();
    });
  };

  return (
    <tbody key={id}>
      <tr>
        <td>
          <input
            onChange={e => onChangeCurRadio(Number(e.target.value))}
            type='radio'
            name='product'
            id=''
            value={id}
          />
        </td>
        <td>{id}</td>
        <td>{name}</td>
        <td>
          <Link className='flex items-center justify-center' to={`/detail/${id}/admin`} key={id}>
            <img className='h-[50px] w-[100px]' src={image} alt='' />
          </Link>
        </td>
        <td>
          <button
            onClick={onUpdateState}
            className={
              'h-[30px] w-[100px] rounded-md border-[1px] font-bold text-white ' +
              (state == 'ACTIVE' ? 'bg-blue-500' : 'bg-red-400')
            }
          >
            {(state = state == 'ACTIVE' ? '활성화' : '비활성화')}
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default ProductTable;
