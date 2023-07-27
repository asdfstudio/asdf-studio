import { Typography } from 'components';
import { padding } from '../../constants';
import Image from 'next/image';

export const OurClients = () => {
  const clients = [
    {
      url: 'move@2x.png',
      width: 131,
      height: 38,
    },
    {
      url: 'check@2x.png',
      width: 78,
      height: 38,
    },
    {
      url: 'jatievip@2x.png',
      width: 92,
      height: 38,
    },
    {
      url: 'kinumi@2x.png',
      width: 165,
      height: 29,
    },
    {
      url: 'patient@2x.png',
      width: 116,
      height: 34,
    },

    {
      url: 'cannabox@2x.png',
      width: 141,
      height: 61,
    },
  ];

  const establishiedClients = [
    {
      url: 'saleshood.svg',
      width: 90,
      height: 90,
    },
    {
      url: 'westpro.svg',
      width: 94,
      height: 58,
    },
    {
      url: 'webflow@2x.png',
      width: 141,
      height: 38,
    },
    {
      url: 'ars.svg',
      width: 87,
      height: 98,
    },
    {
      url: 'planpop.svg',
      width: 124,
      height: 88,
    },

    {
      url: 'story-studio.svg',
      width: 96,
      height: 38,
    },
    {
      url: 'liquitex@2x.png',
      width: 110,
      height: 68,
    },
    {
      url: 'ione@2x.png',
      width: 105,
      height: 62,
    },
    {
      url: 'navigate@2x.png',
      width: 184,
      height: 62,
    },
    {
      url: 'tuon@2x.png',
      width: 128,
      height: 32,
    },
    {
      url: 'colart.svg',
      width: 125,
      height: 90,
    },
  ];

  return (
    <div
      id="clients"
      className={[
        'max-w-mobile sm:max-w-desktop-s mx-auto w-full relative z-10 mt-[120px] xl:mt-[160px]',
        padding,
      ].join(' ')}
    >
      <div className="w-fit mx-auto">
        <Typography variant="heading1" classname="text-main-deepBlue">
          Our Clients
        </Typography>
      </div>
      <div className="sm:h-[40px]" />
      <div className="flex flex-col gap-[30px] sm:gap-[38px] max-w-full sm:max-w-945 w-full mx-auto">
        {/* <div className="flex flex-col gap-5 sm:gap-[25px] w-full">
          <Typography
            variant="title-semi"
            classname="uppercase tracking-[3.75px] text-main-grey text-center sm:text-center x:text-center xl:text-start"
          >
            New Comers
          </Typography>
          <div className="flex gap-[37.5px] flex-wrap sm:flex-row justify-center items-center sm:justify-center">
            {clients.map(({ url, width, height }, index) => (
              <Image
                key={index}
                src={'/' + url}
                width={width}
                height={height}
                style={{ width: width, height: height }}
                alt="logos"
                className="object-contain"
                draggable={false}
              />
            ))}
          </div>
        </div> */}
        {/* <div className="border border-main-lightBlue w-[100%] mx-auto" /> */}
        <div className="flex flex-col gap-5 sm:gap-[25px] w-full">
          {/* <Typography
            variant="title-semi"
            classname="uppercase tracking-[3.75px] text-main-grey text-center sm:text-center x:text-center xl:text-start"
          >
            Established Brands we have worked with
          </Typography> */}
          <div className="flex sm:gap-x-[35px] sm:gap-y-[25px] gap-5 flex-wrap justify-center items-center sm:justify-center">
            {establishiedClients.map(({ url, width, height }, index) => (
              <Image
                key={index}
                src={'/' + url}
                width={width}
                height={height}
                style={{ width: width, height: height }}
                alt="logos"
                className="object-contain"
                draggable={false}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
