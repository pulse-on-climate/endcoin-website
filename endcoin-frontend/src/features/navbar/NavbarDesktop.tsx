import { NAVBAR_LINKS } from '../../constants/navbar-items';
import { scrollToDiv } from '../../constants/scrollFunction';
import './navbar.css';
import { transition } from '../../constants/transition';

const SidebarDesktop = (): JSX.Element => {
  return (
    <>
      <header
        className={`top-0 h-[75px] left-0 w-full right-0 flex items-center z-50 fixed bg-[#09090E]`}
      >
        {
          <div
            className={
              'w-full flex items-center justify-center m-auto relative'
            }
          >
            <div
              className={
                'max-w-[1100px] flex items-center w-full justify-between'
              }
            >
              <button
                onClick={() => {
                  scrollToDiv('coin');
                }}
              >
                {/* <EndLogo /> */}
                <img src="/endcorp.png" alt="logo" className="h-[40px]" />
              </button>

              {
                <ul className={`flex gap-x-[42px]`}>
                  {NAVBAR_LINKS.map((navTag: any, index: any) => {
                    return (
                      <>
                        <div key={index}>
                          <button
                            className={`w-full text-white ${
                              navTag.name === '|'
                                ? 'cursor-default'
                                : `hover:text-end-button-hover-blue ${transition}`
                            }`}
                            onClick={() => scrollToDiv(navTag.link)}
                          >
                            {navTag.name}
                          </button>
                        </div>
                      </>
                    );
                  })}
                </ul>
              }
            </div>
          </div>
        }
      </header>
    </>
  );
};

export default SidebarDesktop;
