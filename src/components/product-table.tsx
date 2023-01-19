import { Link } from 'react-router-dom';

type ProductProps = {
  id: number;
  name: string;
  image: string;
  isApplied: boolean;
  onChangeCurRadio: (num: number) => void;
};

const ProductTable = ({ id, name, image, isApplied, onChangeCurRadio }: ProductProps) => {
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
        <Link className='flex items-center justify-center' to={`/detail/${id}`} key={id}>
          <td>
            <img className='h-[50px] w-[100px]' src={image.original} alt='' />
          </td>
        </Link>
        {/* <td>{{ isApplied } ? <td>true</td> : <td>false</td>}</td> */}
        {/* {{isApplied} ? <td>true</td> : <td>false</td>} */}
        <td>{isApplied}</td>
      </tr>
    </tbody>
  );
};

export default ProductTable;
