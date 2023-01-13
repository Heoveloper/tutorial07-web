import React from 'react';
import Header from './header';
import Footer from './footer';

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <div className='relative w-[1920px]'>
      <Header />
      <main className='h-[2518px] w-[1920px] bg-[#ffffff]'>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
