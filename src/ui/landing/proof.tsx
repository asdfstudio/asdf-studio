import { Canvas, IconButton, Typography } from 'components';
import { ChevronRight } from 'icons';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { ClientComments } from './lets-connect';
import Slider from 'react-slick';
import { padding } from '../../constants';

export const Proof = () => {
  const sliderRef = useRef<Slider>(null);

  const handleLeftArrowClick = () => {
    sliderRef.current?.slickPrev();
  };

  const handleRightArrowClick = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <Canvas classname="bg-main-deepBlue" containerClassName="relative">
      <div
        id="Process"
        className={[
          'relative h-[850px] max-w-[1180px] mb-[120px] 420:mb-[170px] sm:h-[800px] 2xl:max-w-[1260px] w-full mx-auto z-20',
          padding,
        ].join(' ')}
      >
        <div className="h-[35px] sm:h-[65px]" />
        <div className="flex flex-col w-full max-w-full sm:max-w-[597px] gap-[16px] sm:gap-[6.3px] z-30 sm:ml-[30px]">
          <Typography
            variant="heading2"
            classname="text-main-deepBlue opacity-35"
          >
            Our treasure map to success
          </Typography>
          <Typography
            variant="heading3"
            classname="-tracking-[0.95px] leading-10 text-main-deepBlue sm:w-[90%]"
          >
            This is how we go from{' '}
            <span className="underline underline-offset-4">
              start to finish
            </span>{' '}
            everytime, with every project, big or small
          </Typography>
        </div>
        {/* <Image
          alt="mountain"
          className="left-1/2 transform absolute -translate-x-1/2 top-[154px] hidden sm:block top-[260px] xl:block top-[204px]"
          src="/assets/landing/Proof/mountain@2x.png"
          width={1063}
          height={808}
        /> */}
        <object
          type="image/svg+xml"
          data="/process.svg"
          className="w-[1063px] h-[808px] left-1/2 transform absolute -translate-x-1/2 hidden 430:block sm:block top-[175px]"
        ></object>
        <Image
          alt="mountain mobile"
          className="left-[190px] transform absolute -translate-x-1/2 top-[270px] max-w-[900px] 420:max-w-[1000px] 430:hidden sm:hidden z-20"
          // className="-translate-x-1/2 left-1/2 absolute top-[270px] max-w-[850px] sm:hidden"
          src="/mountain-mobile@2x.png"
          width={1000}
          height={638}
          draggable={false}
        />
      </div>
      <div
        className={[
          // "max-w-[1180px] w-full mx-auto 2xl:max-w-[1260px] sm:ml-[30px] max-w-[680px]",
          'relative max-w-[1180px] 2xl:max-w-[1260px] w-full mx-auto z-20',
          padding,
        ].join(' ')}
      >
        <div className="w-full sm:w-[600px] sm:ml-[30px]">
          <Typography variant="label3" classname="text-main-cyan">
            Please note that the following process is our usual approach for
            medium to large-scale projects that require both design and
            development. However, if we are working on simpler projects such as
            landing page or print design, some steps may be skipped.
            Additionally, please be aware that the process may vary for projects
            involving SEO, digital marketing, or animation.
          </Typography>
        </div>
        <div className="h-[20px]" />
        <div className="h-[1px] bg-main-cyan" />
        <div className="h-[60px] sm:h-[30px]" id="testmonials" />
        <div className="flex flex-col relative gap-[5px] sm:gap-[11px]">
          <Typography
            variant="heading3"
            classname="text-white opacity-35 sm:ml-[30px]"
          >
            The Proof
          </Typography>
          <div className="flex justify-between items-center w-full">
            <div className="relative max-w-[576px] w-full sm:ml-[30px]">
              <Typography
                variant="heading3"
                classname="text-white -tracking-[1]"
              >
                Some &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="underline underline-offset-4">loves</span> from
                our beloved clients
              </Typography>
              <Image
                src={'/hearth.svg'}
                width={105}
                className="absolute left-[22%] -top-[30px] hidden sm:block"
                height={105}
                alt="hearth emoji"
                draggable={false}
              />
              <Image
                src={'/hearth.svg'}
                width={70}
                className="absolute left-[28%] -top-[20px] 390:left-[25%] 420:left-[23%] sm:hidden"
                height={60}
                alt="hearth emoji mobile"
                draggable={false}
              />
            </div>
            <div className="flex gap-[15px] absolute sm:relative top-[675px] sm:top-0 left-1/2 transform -translate-x-1/2 sm:left-[0px] x:left-[0px] xl:left-[0px]">
              <IconButton
                onClick={handleLeftArrowClick}
                type="circle"
                icon={
                  <ChevronRight className="font-[15px] fill-main-deepBlue rotate-180 -mt-1" />
                }
                classname="w-[45px] h-[45px] bg-white pt-1"
              />
              <IconButton
                type="circle"
                onClick={handleRightArrowClick}
                icon={
                  <ChevronRight className="font-[15px] fill-main-deepBlue -mt-1" />
                }
                classname="w-[45px] h-[45px] bg-white pt-1"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-5 sm:h-[47px]" />
      <ClientComments ref={sliderRef} />
      <div className="absolute top-0 z-10 left-0 h-[800px] 2xl:h-[480px] w-[2000px]">
        <Image src={'/cloud.webp'} fill alt="cloud background" />
      </div>
    </Canvas>
  );
};
