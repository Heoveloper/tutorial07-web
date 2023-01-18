import { gql, useMutation } from '@apollo/client';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../components/layout';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

type FormType = {
  loginId: string;
  password: string;
};

// TODO 회원 로그인
const SignInUserByEveryone = gql`
  mutation SignInUserByEveryone($loginId: String!, $password: String!) {
    signInUserByEveryone(loginId: $loginId, password: $password) {
      accessToken
      refreshToken
    }
  }
`;

// TODO 관리자 로그인
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

  const [signInUser] = useMutation(SignInUserByEveryone);
  const [signInAdmin] = useMutation(SignInAdminByEveryone);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>();
  // { defaultValues: { loginId: '', password: '' } }

  const onSignInUser = (data: FormType) => {
    console.log(data);

    signInUser({ variables: data })
      .then(res => {
        console.log(res);
        window.localStorage.setItem('accessToken', res.data.signInUserByEveryone.accessToken);
        window.localStorage.setItem('refreshToken', res.data.signInUserByEveryone.refreshToken);
        window.localStorage.setItem('type', 'user');
        alert('로그인에 성공하였습니다!');
        console.log(window.localStorage.getItem('accessToken'));
        console.log(window.localStorage.getItem('refreshToken'));
        switchingPage('/');
      })
      .catch(err => console.log(err));
  };

  const onSignInAdmin = (data: FormType) => {
    console.log(data);

    signInAdmin({ variables: data })
      .then(res => {
        console.log(res);
        window.localStorage.setItem('accessToken', res.data.signInAdminByEveryone.accessToken);
        window.localStorage.setItem('refreshToken', res.data.signInAdminByEveryone.refreshToken);
        window.localStorage.setItem('type', 'admin');
        alert('관리자로 로그인하였습니다.');
        console.log(window.localStorage.getItem('type'));
        switchingPage('/');
      })
      .catch(err => console.log(err));
  };

  return (
    <Layout>
      <form
        onSubmit={handleSubmit(onSignInUser)}
        className='flex flex-col items-center bg-[#fafafa] p-[106px]'
      >
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
                {...register('loginId', {
                  required: { value: true, message: '아이디를 입력하세요.' },
                  // minLength: { value: 8, message: '아이디는 8자 이상입니다' },
                })}
              />
              {errors['loginId'] && (
                <div className='mt-1 text-left font-sans text-sm text-[#ff3131]'>
                  {errors['loginId'].message}
                </div>
              )}
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
                {...register('password', {
                  required: { value: true, message: '비밀번호를 입력하세요.' },
                })}
              />
              {errors.password && (
                <div className='mt-1 text-left font-sans text-sm text-[#ff3131]'>
                  {errors.password.message}
                </div>
              )}
            </div>
            <div className='flex h-[148px] flex-col justify-between'>
              <button type='submit' className='h-[48px] w-[344px] rounded bg-[#00c7ae]'>
                <p className='text-center font-[Roboto] text-[16px] font-medium leading-[28.43px] text-[#ffffff]'>
                  로그인
                </p>
              </button>
              <button
                type='button'
                onClick={handleSubmit(onSignInAdmin)}
                className='h-[48px] w-[344px] rounded bg-[#4f4f4f]'
              >
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
