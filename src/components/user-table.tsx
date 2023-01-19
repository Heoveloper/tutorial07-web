interface UserProps {
  id: number;
  loginId: string;
  password: string;
  phone: string;
  onChangeCurRadio: (num: number) => void;
}

const UserTable = ({ id, loginId, password, phone, onChangeCurRadio }: UserProps) => {
  return (
    <tbody className='h-[40px]' key={id}>
      <tr>
        <td>
          <input
            onChange={e => {
              onChangeCurRadio(Number(e.target.value));
            }}
            type='radio'
            name='user'
            id=''
            value={id}
          />
        </td>
        <td>{id}</td>
        <td>{loginId}</td>
        <td>{password}</td>
        <td>{phone}</td>
      </tr>
    </tbody>
  );
};

export default UserTable;
