import { useState } from 'react';
import { Button, AirlyLogo, MobileMenu, MobileCancel } from 'components';
import { Link } from 'react-scroll';
import Linkk from "next/link";

const NAV__LINK = [
  {
    path: 'home',
    display: '',
  },
  {
    path: 'design',
    display: 'DESIGN',
  },
  {
    path: 'development',
    display: 'DEVELOPMENT',
  },
  // {
  //   path: 'marketing',
  //   display: 'MARKETING',
  // },
  {
    path: 'clients',
    display: 'CLIENTS',
  },
  {
    path: 'Process',
    display: 'PROCESS',
  },
  {
    path: 'testmonials',
    display: 'TESTIMONIALS',
  },
  {
    path: 'contact_us',
    display: 'CONTACT US',
  },
];

export const Header = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <div className="fixed top-0 left-0 bg-white shadow-headerShadow w-full z-50">
        <div
          className={[
            'flex justify-between items-center h-[60px]',
            // screen,
          ].join(' ')}
        >
          <Link
            to={'home'}
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
            className="cursor-pointer"
          >
            <AirlyLogo />
          </Link>
          <div className="flex items-center gap-3">
            <div className={'gap-5 hidden 1xl:flex'}>
              {NAV__LINK.map((item, index) => (
                <Button key={index} variant="text">
                  <Link
                    to={item.path}
                    spy={true}
                    smooth={true}
                    offset={-60}
                    duration={500}
                    key={index}
                    className="pb-4 border-b-4 border-white whitespace-nowrap hover:border-main-deepBlue"
                  >
                    {item.display}
                  </Link>
                </Button>
              ))}
            </div>
            <div className="p-3 1xl:pr-3">
              <Linkk
                href="https://airlystudio.myportfolio.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="primary"
                  className="w-[90px] h-[40px] hover:bg-main-hoverOrange 414:w-[140px] 414:h-[40px] sm:w-[200px] h-[40px]"
                >
                  <span className="text-[10px] 414:text-[16px]">Portfolio</span>
                  {/* Portfolio */}
                </Button>
              </Linkk>
            </div>
            <div className="flex text-center justify-center 1xl:hidden">
              <i className="w-[1px] h-[40px] border-r-2 border-lightBlue mr-3" />
            </div>
            <div
              className="flex text-center 1xl:hidden"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? <MobileCancel /> : <MobileMenu />}
            </div>
          </div>
        </div>

        <div>
          <div
            className={`w-auto h-auto flex v-screen flex-col items-start justify-center gap-5 shadow-headerShadow ${
              navbar ? 'p-5 md:p-0 block' : 'hidden'
            }`}
          >
            {NAV__LINK.map((item, index) => (
              <Button key={index} variant="text">
                <Link
                  to={item.path}
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={500}
                  key={index}
                  onClick={() => setNavbar(!navbar)}
                  className="border-b-4 border-white whitespace-nowrap hover:border-main-deepBlue"
                >
                  {item.display}
                </Link>
              </Button>
            ))}
          </div>
        </div>

        {/* fixed buttons */}

        {/* mobile */}
        {/* <div
          className={[
            // "flex w-full justify-center fixed top-[410px] 360:top-[660px] 375:top-[600px] 390:top-[620px] 420:top-[680px] sm:hidden"
            // "fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600"
            
          ].join(" ")}
        > */}
        <Link
          to={'contact_us'}
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
        >
          <Button
            variant="secondary"
            className="fixed z-50 w-[300px] h-[40px] -translate-x-1/2 bottom-4 left-1/2 sm:hidden"
            typoVariant="title-semi-button"
          >
            Let’s Connect
          </Button>
        </Link>
        {/* </div> */}
        <div className="hidden sm:block x:block]">
          <Link
            to={'contact_us'}
            spy={true}
            smooth={true}
            offset={-60}
            duration={1000}
          >
            <Button
              variant="secondary"
              className="hidden sm:block fixed z-50 w-[200px] h-[40px] text-main-deepBlue bottom-10 left-6"
              typoVariant="body"
            >
              Let’s Connect
            </Button>
          </Link>

          <div className="sm:fixed w-[325px] h-[35px] text-white bg-main-blue rounded-[20px] flex justify-center items-center inline-flex rotate-90 bottom-40 -right-20 -mr-[45px]">
            <li className="flex items-center justify-center">
              <a
                className="flex items-center h-[12px] text-[12px] leading-normal tracking-[0.2px] mt-1 border-b-2 border-main-blue hover:border-white"
                href="https://dribbble.com/asdfstudio"
                target="_blank"
                rel="noopener noreferrer"
              >
                DRIBBBLE
              </a>
            </li>
            <p className="cursor-default flex items-center mr-[5px] ml-[5px]">
              /
            </p>
            {/* <li className="flex items-center justify-center">
              <a
                className="flex items-center h-[12px] text-[12px] leading-normal tracking-[0.2px] mt-1 border-b-2 border-main-blue hover:border-white"
                href="https://twitter.com/airlystudio"
                target="_blank"
                rel="noopener noreferrer"
              >
                TWITTER
              </a>
            </li>
            <p className="cursor-default flex items-center mr-[5px] ml-[5px]">
              /
            </p> */}
            <li className="flex items-center justify-center">
              <a
                className="flex items-center h-[12px] text-[12px] leading-normal tracking-[0.2px] mt-1 border-b-2 border-main-blue hover:border-white"
                href="https://www.behance.net/asdfstudio1"
                target="_blank"
                rel="noopener noreferrer"
              >
                BEHANCE
              </a>
            </li>
            <p className="cursor-default flex items-center mr-[5px] ml-[5px]">
              /
            </p>
            <li className="flex items-center justify-center">
              <a
                className="flex items-center h-[12px] text-[12px] leading-normal tracking-[0.2px] mt-1 border-b-2 border-main-blue hover:border-white"
                href="https://www.upwork.com/agencies/1670868278460870656/"
                target="_blank"
                rel="noopener noreferrer"
              >
                UPWORK 
              </a>
            </li>
          </div>
        </div>
      </div>
    </>
  );
};
