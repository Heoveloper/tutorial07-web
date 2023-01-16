import { gql, useMutation } from '@apollo/client';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../components/layout';

const SignInAdminByEveryone = gql`
  mutation SignInAdminByEveryone($loginId: String!, $password: String!) {
    signInAdminByEveryone(id: $loginId, password: $password) {
      accessToken
      refreshToken
    }
  }
`;

const LoginPage = () => {
  const switchingPage = useNavigate();
  function goHome() {
    switchingPage('/');
  }

  const [signInLoading, setSigninLoading] = useState(false);
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [signinAdmin] = useMutation(SignInAdminByEveryone);

  const onSignin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (signInLoading) return;

    setSigninLoading(true);
    signinAdmin({
      variables: { loginId, password },
    })
      .then(response => {
        window.localStorage.setItem('id', loginId);
        window.localStorage.setItem('pw', password);
        console.log(response);
        goHome();
      })
      .catch(error => {
        console.log('에러발생');
        console.log(error);
      });
  };

  return (
    <Layout>
      <form onSubmit={onSignin} className='flex flex-col items-center bg-[#fafafa] p-[106px]'>
        <h2 className='mb-[62px] font-[Roboto] text-[40px] font-semibold leading-[47px] text-[#323232]'>
          로그인
        </h2>
        <div className='mx-auto mb-[207px] flex h-[480px] w-[424px] items-center justify-center rounded-lg border-[1px] border-solid bg-[#ffffff]'>
          <div className='mx-auto flex h-[480px] w-[344px] flex-col items-center justify-between py-[40px]'>
            <div>
              <h3 className='mb-[6px] self-start font-[Roboto] text-[16px] font-semibold leading-[28.43px] text-[#323232]'>
                아이디
              </h3>
              <input
                className='border-gray-bright box-border h-[48px] w-[344px] rounded border-[1px] border-solid
                pl-[14px] font-[Roboto] text-[16px] font-medium leading-[18.75px] text-[#323232] outline-none
                placeholder:text-[#bbbbbb] focus:border-[3px] focus:border-[#00c7ae] focus:border-opacity-[0.22]'
                type='text'
                placeholder='아이디를 입력하세요'
                name='loginId'
                onChange={e => setLoginId(e.target.value)}
              />
            </div>
            <div>
              <h3 className='mb-[6px] self-start font-[Roboto] text-[16px] font-semibold leading-[28.43px] text-[#323232]'>
                비밀번호
              </h3>
              <input
                className='border-gray-bright box-border h-[48px] w-[344px] rounded border-[1px] border-solid
                pl-[14px] font-[Roboto] text-[16px] font-medium leading-[18.75px] text-[#323232] outline-none
                placeholder:text-[#bbbbbb] focus:border-[3px] focus:border-[#00c7ae] focus:border-opacity-[0.22]'
                type='password'
                placeholder='비밀번호를 입력하세요'
                name='password'
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className='flex h-[148px] flex-col justify-between'>
              <button type='submit' className='h-[48px] w-[344px] rounded bg-[#00c7ae]'>
                <p className='text-center font-[Roboto] text-[16px] font-medium leading-[28.43px] text-[#ffffff]'>
                  로그인
                </p>
              </button>
              <button className='h-[48px] w-[344px] rounded bg-[#4f4f4f]'>
                <p className='text-center font-[Roboto] text-[16px] font-medium leading-[28.43px] text-[#ffffff]'>
                  관리자로 로그인
                </p>
              </button>
              <Link to='/sign-up'>
                <p className='mt-[6px] text-center font-[Roboto] text-[14px] font-medium leading-[16.41px] text-[#4f4f4f] opacity-80'>
                  계정이 없으신가요?
                </p>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default LoginPage;
