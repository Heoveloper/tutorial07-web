import { gql, useMutation } from '@apollo/client';
import { kMaxLength } from 'buffer';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout';

type FormType = {
  loginId: string;
  password: string;
  passwordConfirm: string;
  phone: string;
};

// TODO 회원가입
const SignUpUserByEveryone = gql`
  mutation SignUpUserByEveryone($loginId: String!, $password: String!, $phone: String!) {
    signUpUserByEveryone(loginId: $loginId, password: $password, phone: $phone)
  }
`;

const SignUpPage = () => {
  const switchingPage = useNavigate();

  const [signUpUser] = useMutation(SignUpUserByEveryone);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormType>();

  const onSignUp = (data: FormType) => {
    console.log(data);

    signUpUser({ variables: data })
      .then(res => {
        console.log(res);
        alert('회원가입을 완료하였습니다!');
        switchingPage('/login');
      })
      .catch(err => console.log(err));
  };

  return (
    <Layout>
      <form
        method='post'
        onSubmit={handleSubmit(onSignUp)}
        className='flex flex-col items-center bg-[#fafafa] p-[106px]'
      >
        <h2 className='mb-[62px] text-center font-[Roboto] text-[40px] font-semibold leading-[46.88px] text-[#323232]'>
          회원가입
        </h2>
        <div className='mx-auto mb-[63px] flex h-[624px] w-[424px] flex-col items-center justify-center rounded-lg border-[1px] border-solid border-[#f2f2f2] bg-[#ffffff]'>
          <div className='mx-auto flex h-[624px] w-[344px] flex-col justify-between py-[40px]'>
            <div className='flex h-[448px] w-[344px] flex-col justify-between'>
              <div>
                <h3 className='mb-[6px] font-[Roboto] text-[16px] font-semibold leading-[28.43px] text-[#323232]'>
                  아이디
                </h3>
                <input
                  className='border-gray-bright h-[48px] w-[344px] rounded border-[1px] border-solid pl-[14px] font-[Roboto] text-[16px] font-medium leading-[18.75px] text-[#323232] outline-none placeholder:text-[#bbbbbb] focus:border-[3px] focus:border-[#00c7ae] focus:border-opacity-[0.22]'
                  type='text'
                  placeholder='아이디를 입력하세요'
                  {...register('loginId', {
                    required: '아이디를 입력하세요',
                    minLength: {
                      value: 8,
                      message: '아이디는 8자 이상입니다.',
                    },
                  })}
                />
                {errors['loginId'] && (
                  <p className='mt-1 text-left font-sans text-sm text-[#ff3131]'>
                    {errors['loginId'].message}
                  </p>
                )}
              </div>
              <div>
                <h3 className='mb-[6px] font-[Roboto] text-[16px] font-semibold leading-[28.43px] text-[#323232]'>
                  비밀번호
                </h3>
                <input
                  className='border-gray-bright h-[48px] w-[344px] rounded border-[1px] border-solid pl-[14px] font-[Roboto] text-[16px] font-medium leading-[18.75px] text-[#323232] outline-none placeholder:text-[#bbbbbb] focus:border-[3px] focus:border-[#00c7ae] focus:border-opacity-[0.22]'
                  type='password'
                  placeholder='영문+숫자 조합 8자리 이상 입력하세요'
                  {...register('password', {
                    required: { value: true, message: '비밀번호 입력 필수' },
                    pattern: {
                      value: /^[a-zA-Z0-9]*$/,
                      message: '비밀번호는 영어+숫자 조합입니다.',
                    },
                    minLength: { value: 8, message: '최소 8자리입니다.' },
                    maxLength: { value: 16, message: '최대 16자리입니다.' },
                  })}
                />
                {errors.password && (
                  <p className='mt-1 text-left font-sans text-sm text-[#ff3131]'>
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div>
                <h3 className='mb-[6px] font-[Roboto] text-[16px] font-semibold leading-[28.43px] text-[#323232]'>
                  비밀번호 재확인
                </h3>
                <input
                  className='border-gray-bright h-[48px] w-[344px] rounded border-[1px] border-solid pl-[14px] font-[Roboto] text-[16px] font-medium leading-[18.75px] text-[#323232] outline-none placeholder:text-[#bbbbbb] focus:border-[3px] focus:border-[#00c7ae] focus:border-opacity-[0.22]'
                  type='password'
                  placeholder='비밀번호를 다시 입력하세요'
                  {...register('passwordConfirm', {
                    required: { value: true, message: '비밀번호 확인이 필요합니다.' },
                    validate: value => {
                      const { password } = getValues();
                      return password === value || '비밀번호가 일치하지 않습니다.';
                    },
                  })}
                />
                {errors.passwordConfirm && (
                  <p className='mt-1 text-left font-sans text-sm text-[#ff3131]'>
                    {errors.passwordConfirm.message}
                  </p>
                )}
              </div>
              <div>
                <h3 className='mb-[6px] font-[Roboto] text-[16px] font-semibold leading-[28.43px] text-[#323232]'>
                  연락처
                </h3>
                <input
                  className='border-gray-bright h-[48px] w-[344px] rounded border-[1px] border-solid pl-[14px] font-[Roboto] text-[16px] font-medium leading-[18.75px] text-[#323232] outline-none placeholder:text-[#bbbbbb] focus:border-[3px] focus:border-[#00c7ae] focus:border-opacity-[0.22]'
                  type='text'
                  placeholder='010-0000-0000'
                  {...register('phone', {
                    required: { value: true, message: '연락처는 필수입니다.' },
                    pattern: { value: /^\d{2,3}-\d{3,4}-\d{4}$/, message: '형식에 맞지 않습니다.' },
                    maxLength: { value: 13, message: '최대 13자입니다.' },
                  })}
                />
                {errors.phone && (
                  <p className='mt-1 text-left font-sans text-sm text-[#ff3131]'>
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>
            <button type='submit' className='h-[48px] w-[344px] rounded bg-[#00c7ae]'>
              <p className='text-cetner font-[Roboto] text-[16px] font-medium leading-[28.43px] text-[#ffffff]'>
                회원가입
              </p>
            </button>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default SignUpPage;
