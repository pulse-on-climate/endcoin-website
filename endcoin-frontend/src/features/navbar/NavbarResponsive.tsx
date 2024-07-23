import React from 'react';
import { EndLogo, CloseMenuIcon, MenuIcon } from '../../icons/logo.icon';
import { NAVBAR_LINKS } from '../../constants/navbar-items';
import { scrollToDiv } from '../../constants/scrollFunction';
import './navbar.css';
import { transition } from '../../constants/transition';

const SidebarResponsive = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element => {
  return (
    <>
      {isOpen && <div className={isOpen ? 'wall' : ''} />}
      <header className={`h-[72px] top-0 w-full z-50 fixed bg-[#09090E]`}>
        <div
          className={
            'ml-[16px] kimo-lg:max-w-[752px] kimo-md:max-w-[560px] w-full h-full kimo-md:mx-auto flex items-center kimo-md:relative'
          }
        >
          {
            <button onClick={() => scrollToDiv('coin')}>
              {/* <EndLogo /> */}
              <img src="/endcorp.png" alt="logo" className="h-[35px]" />
            </button>
          }

          {
            <>
              {!isOpen ? (
                <button
                  className={
                    'kimo-md:absolute fixed kimo-md:top-0 kimo-md:bottom-0 kimo-md:right-0 top-4 right-[16px]'
                  }
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <MenuIcon color="#fff" />
                </button>
              ) : null}
            </>
          }
        </div>
      </header>
      <div
        className={`top-0 right-0 fixed z-50 bg w-full  h-full py-10 px-[24px] overflow-scroll ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } ease-in-out duration-300`}
      >
        {
          <button
            className={'fixed top-4 right-[16px]'}
            onClick={() => setIsOpen(!isOpen)}
          >
            <CloseMenuIcon color={'#ffffff'} />
          </button>
        }
        <div className={`mt-[42px] py-2`} />

        <ul>
          {NAVBAR_LINKS.map((navTag, index) => {
            return (
              <div key={index} className={'relative'}>
                <button
                  className={`w-full mb-[16px] text-left text-white hover:text-end-button-hover-blue ${transition} ${
                    navTag.name === '|' ? 'hidden' : ''
                  }`}
                  onClick={() => {
                    scrollToDiv(navTag.link);
                    setIsOpen(false);
                  }}
                >
                  {navTag.name}
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default SidebarResponsive;
