type UserProps = {
  id: number;
  loginId: string;
  password: string;
  phone: string;
};

const UserTable = ({ id, loginId, password, phone }: UserProps) => {
  return (
    // <table className='w-[95%] overflow-hidden text-center'>
    //   <thead>
    //     <tr>
    //       <th className='underline'>회원번호</th>
    //       <th className='underline'>아이디</th>
    //       <th className='underline'>비밀번호</th>
    //       <th className='underline'>연락처</th>
    //       <th>비밀번호 초기화</th>
    //     </tr>
    //   </thead>
    // <tbody>
    <tr key={id}>
      <td>{id}</td>
      <td>{loginId}</td>
      <td>{password}</td>
      <td>{phone}</td>
      <td>
        <button className='w-[200px] rounded-md bg-[orange] text-white'>초기화</button>
      </td>
    </tr>
    // </tbody>
    // </table>
  );
};

export default UserTable;
