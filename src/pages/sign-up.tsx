import Layout from '../components/layout';

const SignUpPage = () => {
  return (
    <Layout>
      <div className='flex flex-col items-center bg-[#fafafa] p-[106px]'>
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
                />
              </div>
              <div>
                <h3 className='font-[Roboto] text-[16px] font-semibold leading-[28.43px] text-[#323232]'>
                  비밀번호
                </h3>
                <input
                  className='border-gray-bright h-[48px] w-[344px] rounded border-[1px] border-solid pl-[14px] font-[Roboto] text-[16px] font-medium leading-[18.75px] text-[#323232] outline-none placeholder:text-[#bbbbbb] focus:border-[3px] focus:border-[#00c7ae] focus:border-opacity-[0.22]'
                  type='password'
                  placeholder='영문+숫자 조합 8자리 이상 입력하세요'
                />
              </div>
              <div>
                <h3 className='font-[Roboto] text-[16px] font-semibold leading-[28.43px] text-[#323232]'>
                  비밀번호 재확인
                </h3>
                <input
                  className='border-gray-bright h-[48px] w-[344px] rounded border-[1px] border-solid pl-[14px] font-[Roboto] text-[16px] font-medium leading-[18.75px] text-[#323232] outline-none placeholder:text-[#bbbbbb] focus:border-[3px] focus:border-[#00c7ae] focus:border-opacity-[0.22]'
                  type='password'
                  placeholder='비밀번호를 다시 입력하세요'
                />
              </div>
              <div>
                <h3 className='font-[Roboto] text-[16px] font-semibold leading-[28.43px] text-[#323232]'>
                  연락처
                </h3>
                <input
                  className='border-gray-bright h-[48px] w-[344px] rounded border-[1px] border-solid pl-[14px] font-[Roboto] text-[16px] font-medium leading-[18.75px] text-[#323232] outline-none placeholder:text-[#bbbbbb] focus:border-[3px] focus:border-[#00c7ae] focus:border-opacity-[0.22]'
                  type='text'
                  placeholder='010-0000-0000'
                />
              </div>
            </div>
            <button className='h-[48px] w-[344px] rounded bg-[#00c7ae]'>
              <p className='text-cetner font-[Roboto] text-[16px] font-medium leading-[28.43px] text-[#ffffff]'>
                회원가입
              </p>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignUpPage;
