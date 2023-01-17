import Layout from 'src/components/layout';

const ProductDetailPage = () => {
  return (
    <Layout>
      <div className='mx-auto mt-[100px] mb-[140px] flex h-[600px] w-[1198px] justify-between'>
        <img src='/product-1.png' className='h-[600px] w-[600px]' />
        <div className='flex h-[600px] w-[548px] flex-col justify-between'>
          <h1 className='font-[Roboto] text-[32px] font-semibold leading-[37.5px] text-[#323232]'>
            상품명 예시입니다
          </h1>
          <div className='flex h-[450px] w-[550px] flex-col justify-evenly border-y-[1px] border-solid border-[#bbbbbb]'>
            <div className='flex w-[199px] items-center justify-between'>
              <div className='flex h-[47px] flex-col'>
                <p className='font-[Roboto] text-[10px] font-semibold leading-[11.72px] text-[#bbbbbb]'>
                  시작일
                </p>
                <p className='font-[Roboto] text-[30px] font-medium leading-[35.16px] text-[#00c7ae]'>
                  08.19
                </p>
              </div>
              <p className='font-[Roboto] text-[30px] font-semibold leading-[35.16px] text-[#00c7ae]'>
                -
              </p>
              <div>
                <p className='font-[Roboto] text-[10px] font-semibold leading-[11.72px] text-[#bbbbbb]'>
                  마감일
                </p>
                <p className='font-[Roboto] text-[30px] font-medium leading-[35.16px] text-[#00c7ae]'>
                  08.25
                </p>
              </div>
            </div>
            <div className='border-[1px] border-solid border-[#e1e1e1]' />
            <div className='flex h-[325px] w-[548px] flex-col justify-between font-[Roboto] text-[15px] font-medium leading-[24.93px] text-[#323232]'>
              <div>
                <p>
                  레이벤 클런마스터는 다양한 사이즈로 남성 여성 모두 착용이 가능하며 커플
                  선글라스로도
                </p>
                <p>
                  적합한 상품입니다 ! 블랙과 호피 두가지 컬러와 49/51/55 세가지 사이즈가 준비되어
                </p>
                <p>있습니다. 딱 맞는 느낌으로 착용하는게 멋스러운 선글라스 입니다.</p>
              </div>
              <div>
                <p>
                  제품에 붙어있는 제품택(RFID tag)은 저희만의 A.I 가상피팅을 위한 추가구성품입니다.
                </p>
                <p>제품택을 제거하시면 교환/반품이 어려우니 신중히 결정해 주세요!</p>
                <p className='text-[#bbbbbb]'>(제품택의 부탁 위치는 달라질 수 있습니다)</p>
              </div>
              <div>
                <p className='font-semibold'>*추가 옵션</p>
                <p>프링미엄 김서림방지 안경닦이(라운드 포그 오프)</p>
                <p>
                  -한 층 오래 즐길 수 있는 맑은 시야! 흠집 걱정을 덜어줄 부드러운 초극세사 안경
                  클리너
                </p>
                <p>입니다. 환경부의 안전기준확인 인증을 받은 안전한 제품입니다. 한 번 닦아주면</p>{' '}
                <p>약 12시간 효과가 지속되며, 1매 당 약 200회까지 재사용할 수 있습니다.</p>
              </div>
            </div>
          </div>
          <button className='h-[62px] w-[241px] rounded-md bg-[#00c7ae]'>
            <p className='font-[Roboto] text-[24px] font-semibold leading-[28.13px] text-[#ffffff]'>
              신청하기
            </p>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetailPage;
