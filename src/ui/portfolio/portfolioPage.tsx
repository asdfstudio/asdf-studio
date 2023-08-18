import { Button, Canvas, Typography } from 'components';
import { PortfolioCard } from 'components/portfolio-card';
import Image from 'next/image';
import Link from 'next/link';
import portfolioImages from './data';

export const PortfolioPage = () => {

  return (
    <Canvas classname="bg-greyBlueReverse">
      <div
        className="w-full h-[auto] z-10 pt-[50px]"
      >
        <div className="w-full mx-auto flex flex-col justify-between px-5 pt-5 xl:px-20 xl:pt-10 1xl:flex-row 2xl:px-[70px] 4xl:px-[60px] 5xl:px-[120px]">
          <div className='flex justify-start sm:justify-center'>
            <Typography variant="heading7" classname="text-main-deepBlue">
              Portfolio
            </Typography>
          </div>
          <div className='flex gap-2 justify-start pb-[32px] sm:justify-center sm:pb-[0px] sm:gap-10'>
            <div className='flex flex-col sm:flex-row xl:gap-5'>
              <div className=''>
                <Typography variant="heading8" classname="text-main-deepBlue">
                  150+
                </Typography>
              </div>
              <div className='flex flex-col align-middle justify-center w-[148px]'>
                <Typography variant="body4" classname="text-main-deepBlue60">
                  Projects Completed and counting
                </Typography>
              </div>
            </div>
            <div className="h-[auto] w-[1px] bg-border-vrBorder my-3 px-[1px] mx-1" />
            <div className='flex flex-col sm:flex-row xl:gap-5'>
              <div className=''>
                <Typography variant="heading8" classname="text-main-deepBlue">
                  98+
                </Typography>
              </div>
              <div className='flex flex-col align-middle justify-center w-[148px] mr-[-20px]'>
                <Typography variant="body4" classname="text-main-deepBlue60">
                  Clients served around the world
                </Typography>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:h-[25px]" />

        <div className="flex flex-wrap w-full justify-center gap-5 pb-10 sm:gap-10">
          {portfolioImages.map(({ id, coverImage, title, desc, tags, imageList }, index) => {
            return (

            <div key={index}>
              <PortfolioCard
                id={id}
                image={{
                  path: coverImage,
                  width: 1400,
                  height: 632,
                }}
                index={index}
                title={title}
                // desc={desc}
                // tags={tags}
                imageList={imageList}
              />
              </div>
            );
          })}
        </div>
      </div>
    </Canvas>
  );
};

export default PortfolioPage;