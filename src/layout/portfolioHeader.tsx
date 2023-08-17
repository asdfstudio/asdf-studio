import { useState } from 'react';
import { Button} from 'components';


const PORTFOLIO__LINK = [
  {
    display: 'ALL WORKS',
  },
  {
    display: 'BRANDING',
  },
  {
    display: 'WEB APPLICATIONS',
  },
  {
    display: 'MOBILE APPLICATIONS',
  },
  {
    display: 'PRODUCT DESIGN',
  },
  {
    display: 'PRESENTATION',
  },
  {
    display: 'SOCIAL MEDIA',
  },
];

export const PortfolioHeader = () => {
  return (
    <div className="fixed top-15 left-0 bg-main-deepBlue shadow-headerShadow w-full z-50">
        <div
          className={`w-auto h-[50px] flex flex-row items-center justify-center gap-5 shadow-headerShadow`}
        >
          {PORTFOLIO__LINK.map((item, index) => (
              <Button key={index} variant="tag" typoVariant="tag">
                <div className="p-2 whitespace-nowrap text-main-white hover:bg-main-white rounded-full hover:text-main-deepBlue">
                  {item.display}
                </div>
              </Button>
          ))}
        </div>
      </div>
  );
};