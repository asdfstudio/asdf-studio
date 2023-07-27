import { Button, Canvas, Typography, Tag } from 'components';
import { padding } from '../../constants';
import { ArrowRight, ChevronRight } from 'icons';
import Image from 'next/image';
import { HeroAnimation } from '../../components/svgs';
import { Link } from 'react-scroll';

const BottomComp = (
  <div className="bg-blue h-[800px] absolute bottom-0 z-0 w-full" />
);

export const SectionOne = () => {
  return (
    <Canvas
      classname="bg-main-lightBlue"
      // containerClassName="px-5"
      bottomComp={BottomComp}
    >
      <div className="relative mx-auto w-fit h-[853px] sm:h-auto" id="home">
        {/* <Image
          src="/assets/landing/notebook.svg"
          width={1080}
          className="hidden sm:block"
          height={676}
          alt="notebook image"
        /> */}
        <object
          type="image/svg+xml"
          data="/HeroAnimation.svg"
          className="hidden x:block w-[1080px] h-[676px]"
        ></object>
        <object
          type="image/svg+xml"
          data="/HeroAnimation.svg"
          className="hidden sm:block w-[768px] h-[478px] x:hidden"
        ></object>
        {/* <object type="image/svg+xml" data="/assets/landing/SVG/HeroAnimationMobile.svg" className="w-[auto] h-[auto] sm:hidden"></object> */}
        {/* 360 */}
        {/* <object type="image/svg+xml" data="/assets/landing/SVG/HeroAnimationMobile.svg" className="360:w-[auto] h-[auto] object-contain sm:hidden"></object> */}
        {/* 390 */}
        <object
          type="image/svg+xml"
          data="/HeroAnimationMobile.svg"
          className="w-[140%] h-[auto] ml-[-50px] 360:ml-[-70px] 414:ml-[-80px] sm:hidden"
        ></object>
        ``
        <div
          className={[
            'flex w-full justify-center absolute sm:bottom-[-15px] gap-5 flex-col sm:flex-row xl:bottom-[45px]',
            padding,
          ].join(' ')}
        >
          <Link
            to={'ourService'}
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            <Button
              endIcon={<ChevronRight className="fill-main-blue" />}
              variant="secondary"
              className="w-full sm:w-[225px] h-[45px]"
              typoVariant="title-semi-button"
            >
              our services
            </Button>
          </Link>
          <Link
            to={'contact_us'}
            spy={true}
            smooth={true}
            offset={-60}
            duration={1000}
          >
            <Button
              typoVariant="title-semi-button"
              endIcon={<ChevronRight className="fill-white" />}
              className="w-full hover:bg-main-hoverOrange sm:w-[225px] h-[45px] shadow-buttonShadow4"
            >
              start a project
            </Button>
          </Link>
        </div>
      </div>
      <div className="h-[100px] hidden sm:block" />
      <div className="max-w-mobile -mt-[8%] 360:mt-[16%] 375:mt-[20%] 390:mt-[35%] 420:mt-[45%] sm:max-w-desktop-s mx-auto w-full relative sm:h-[290px] h-[363px] sm:mt-[0]">
        <div className="absolute sm:-left-[60px] sm:top-[50px] left-[48px] z-10">
          <Image
            className="hidden relative sm:block -right-[-170px] xl:-right-[5px]"
            src="/custom-cards@2x.png"
            width={375}
            height={209}
            alt="custom cards"
            draggable={false}
          />
          <Image
            className="sm:hidden"
            src="/custom-cards@2x.png"
            width={262}
            height={146}
            alt="custom cards"
            draggable={false}
          />
        </div>
        <div className="absolute sm:left-[-180px] sm:top-0 top-[130px] left-5 w-full z-10">
          <Image
            className="hidden relative left-[400px] sm:block x:left-[530px] xl:left-[660px]"
            src="/emojis@2x.png"
            width={235}
            height={292}
            alt="emojis"
            draggable={false}
          />
          <Image
            className="sm:hidden absolute top-[10px]"
            src="/emojis@2x.png"
            width={153}
            height={191}
            alt="emojis"
            draggable={false}
          />
          <Link
            to={'portfolio'}
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
          >
            <Button
              variant="square"
              typoVariant="label"
              className="hidden sm:block absolute sm:top-[185px] sm:right-[55px] x:absolute x:top-[185px] x:right-[305px] xl:absolute xl:top-[185px] xl:right-[305px] w-[170px] h-[23.9px]"
              endIcon={<ArrowRight className="fill-main-red text-[10.5px]" />}
            >
              Landing Page design
            </Button>
          </Link>
          <Image
            className="absolute -right-[440px] -top-[70px] hidden sm:block xl:left-[980px]"
            alt="box"
            width={665}
            height={408}
            style={{ width: 665, height: 408 }}
            src="/box@2x.png"
            draggable={false}
          />
          <Image
            className="absolute -top-[40px] sm:hidden max-w-[500px] w-[500px] left-[70px]"
            alt="box"
            width={270}
            height={285}
            src="/box@2x.png"
            draggable={false}
          />
          <Link
            to={'portfolio'}
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
          >
            <Button
              variant="square"
              typoVariant="label"
              className="top-[105px] right-[85px] absolute w-[163px] h-[23.9px] sm:hidden"
              endIcon={<ArrowRight className="fill-main-red text-[10.5px]" />}
            >
              EXPLORE WEB DESIGN
            </Button>
          </Link>
          <Link
            to={'portfolio'}
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
          >
            <Button
              variant="square"
              typoVariant="label"
              className="flex items-center top-[25px] right-[107px] absolute hidden sm:block sm:top-[70px] sm:right-[500px] x:top-[70px] x:right-[700px] xl:right-[675px] xl:top-[120px] w-[130px] h-[23.9px]"
              endIcon={<ArrowRight className="fill-main-red text-[10.5px]" />}
            >
              Illustrations
            </Button>
          </Link>
        </div>
      </div>

      <div
        id="ourService"
        className={[
          'max-w-mobile sm:max-w-desktop-s mx-auto w-full relative sm:h-[1550px] xl:sm:h-[1400px] z-10 h-[1940px]',
          padding,
        ].join(' ')}
      >
        <div className="absolute top-[75px] left-5 sm:top-[0px] sm:-left-[7px] flex gap-[22px]">
          <Image
            className="mt-[30px] hidden xl:block"
            src="/services@2x.png"
            width={242}
            height={244}
            alt="services"
            draggable={false}
          />
          <div className="flex flex-col w-[326px] gap-[13px] sm:absolute right-[-360px] sm:top-[50px] xl:top-[1px]">
            <Typography
              variant="heading"
              classname="leading-10 -tracking-[1.09px] text-main-deepBlue opacity-35"
            >
              Our Services
            </Typography>
            <Typography
              variant="heading"
              classname="-tracking-[0.95px] leading-10 text-main-deepBlue"
            >
              We are a{' '}
              <span className="underline underline-offset-4">
                complete Solution
              </span>{' '}
              agency for your digital presence
            </Typography>
          </div>
        </div>
        <div className="absolute left-5 -top-[5px] sm:top-[18.9px] sm:left-[320px] flex flex-col w-full xl:left-[620px]">
          <Image
            className="hidden sm:block"
            src="/web-design@2x.png"
            width={409}
            height={97}
            alt="web design"
            draggable={false}
          />
          <Link
            to={'portfolio'}
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
          >
            <Button
              variant="square"
              typoVariant="label"
              className="w-[167px] h-[22.4px] absolute -bottom-[10%] left-[9%] hidden sm:block"
              endIcon={<ArrowRight className="fill-main-red text-[10.5px]" />}
            >
              EXPLORE WEB DESIGN
            </Button>
          </Link>
          <Image
            className="sm:hidden"
            src="/web-design@2x.png"
            width={286}
            height={67}
            alt="web design"
          />
          <Link
            to={'portfolio'}
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
          >
            <Button
              variant="square"
              typoVariant="label"
              className="w-[172px] h-[22.4px] absolute -bottom-[15px] left-[25%] hidden sm:hidden"
              endIcon={<ArrowRight className="fill-main-red text-[10.5px]" />}
            >
              Explore Collection
            </Button>
          </Link>
        </div>
        <div className="absolute top-[1490px] -right-[200px] sm:right-[-180px] sm:top-[350px] flex flex-col xl:right-[10px] xl:top-[190px]">
          <Image
            className=""
            src="/music-app@2x.png"
            width={259}
            height={408}
            alt="music app"
            draggable={false}
          />
          <Link
            to={'portfolio'}
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
          >
            <Button
              variant="square"
              typoVariant="label"
              className="w-[117px] h-[22.4px] absolute bottom-[31%] -left-[19%] hidden sm:block"
              endIcon={<ArrowRight className="fill-main-red text-[10.5px]" />}
            >
              Sleeveless
            </Button>
          </Link>
        </div>
        <Image
          className="absolute top-[151px] right-[320px] hidden sm:block top-[160px] sm:right-[60px] xl:right-[320px]"
          src="/tacos@2x.png"
          width={200}
          height={274}
          alt="taco image"
          draggable={false}
        />
        <Image
          className="absolute sm:hidden top-[250px] -right-[70px]"
          src="/tacos@2x.png"
          width={200}
          height={274}
          alt="taco image"
          draggable={false}
        />
        <Image
          className="absolute top-[366px] left-[167px] hidden sm:block absolute left-[20px] xl:left-[160px]"
          src="/branding@2x.png"
          width={285}
          height={140}
          alt="branding image"
          draggable={false}
        />
        <Image
          className="absolute top-[630px] right-[28px] sm:hidden"
          src="/branding@2x.png"
          width={199}
          height={97}
          alt="branding image"
          draggable={false}
        />
        {/* <Image
          className="absolute hidden xl:block absolute left-[480px] xl:absolute top-[250px]"
          src="/assets/landing/home/devices@2x.png"
          width={322}
          height={429}
          alt="devices image"
        />
        <Image
          className="absolute top-[247px] left-[476px] z-20 hidden sm:block absolute left-[280px] sm:top-[300px] x:left-[380px] xl:hidden"
          src="/assets/landing/home/devices@2x.png"
          width={283}
          height={377}
          alt="devices image"
        /> */}
        {/* <object
          type="image/svg+xml"
          data="/diverse-design.svg"
          className="hidden xl:block w-[322px] h-[429px] absolute left-[480px] xl:absolute top-[250px]"
        ></object> */}
        {/* <object
          type="image/svg+xml"
          data="/diverse-design.svg"
          className="hidden sm:block absolute w-[283px] h-[377px] z-20 left-[280px] sm:top-[300px] x:left-[380px] xl:hidden"
        ></object> */}

        <Image
          className="hidden xl:block w-[322px] h-[429px] absolute left-[480px] xl:absolute top-[250px]"
          src="/devices@2x.png"
          width={254}
          height={339}
          alt="devices image"
          draggable={false}
        />
         <Image
          className="hidden sm:block absolute w-[283px] h-[377px] z-20 left-[280px] sm:top-[300px] x:left-[380px] xl:hidden"
          src="/devices@2x.png"
          width={254}
          height={339}
          alt="devices image"
          draggable={false}
        />
        <Image
          className="absolute top-[300px] left-[78px] z-20 sm:hidden"
          src="/devices@2x.png"
          width={254}
          height={339}
          alt="devices image"
          draggable={false}
        />
        <div className="absolute top-[570px] sm:top-[540px] -left-[105px] sm:left-[20px] sm:top-[560px] flex flex-col xl:left-[110px]">
          <Image
            className="hidden sm:block"
            src="/dashboard@2x.png"
            width={303}
            height={236}
            alt="web design"
            draggable={false}
          />
          <Image
            className="sm:hidden"
            src="/dashboard@2x.png"
            width={242}
            height={188}
            alt="web design"
            draggable={false}
          />
          <Button
            variant="square"
            typoVariant="label"
            className="w-[172px] h-[22.4px] absolute bottom-[50px] left-0 hidden"
            endIcon={<ArrowRight className="fill-main-red text-[10.5px]" />}
          >
            Explore Collection
          </Button>
        </div>
        <Image
          className="absolute top-[577px] right-[167px] hidden sm:block top-[710px] sm:left-[390px] xl:left-[780px] xl:top-[580px]"
          src="/ui-design@2x.png"
          width={336}
          height={93}
          alt="ui design image"
          draggable={false}
        />
        <Image
          className="absolute top-[420px] left-[23px] sm:hidden"
          src="/ui-design-mobile@2x.png"
          width={147}
          height={128}
          alt="ui design image"
          draggable={false}
        />

        {/* Design secion*/}

        <div
          id="design"
          className="absolute left-[5px] top-[770px] sm:absolute sm:left-[100px] sm:top-[850px] sm:top-0 sm:bottom-[373px] flex flex-col max-w-[465px] w-full px-5 xl:left-[400px] xl:top-[700px]"
        >
          {/* <div className="absolute left-[5px] top-[780px] sm:absolute flex flex-col"> */}
          <Typography variant="heading1" classname="text-main-deepBlue">
            Design
          </Typography>
          <div className="flex flex-col gap-[21px]">
            <Typography variant="body1" classname="text-main-deepBlue">
              We are a design-first agency obsessed with creating best user
              experience possible
            </Typography>
            <div className="flex flex-wrap gap-[7.5px]">
              <Tag text="UI & UX Design" />
              <Tag text="Design System" />
              <Tag text="Branding" />
              <Tag text="3D Modeling & Rendering" />
              <Tag text="Architectural Design" />
            </div>
            <Link
              to={'contact_us'}
              spy={true}
              smooth={true}
              offset={-60}
              duration={1000}
            >
              <Button
                typoVariant="title-semi-button"
                endIcon={<ChevronRight className="fill-white" />}
                className="w-full hover:bg-main-hoverOrange sm:w-[300px] h-[45px] shadow-buttonShadow4"
              >
                Start a Design Project
              </Button>
            </Link>
          </div>
        </div>
        <Image
          className="absolute -bottom-5 left-[325px] hidden sm:block absolute top-[1210px] sm:left-[20px] xl:left-[320px] xl:top-[1060px]"
          src="/journal@3x.png"
          width={548}
          height={368}
          alt="journal image"
          draggable={false}
        />
        <Image
          className="absolute top-[1200px] -left-[65px] sm:hidden max-w-[493px] w-[493px]"
          src="/journal@3x.png"
          width={493}
          height={332}
          alt="journal image"
          draggable={false}
        />
        <Image
          className="absolute hidden sm:block absolute bottom-[300px] -left-[390px] xl:left-[-130px] xl:top-[920px]"
          src="/journal1@2x.png"
          width={463}
          height={363}
          alt="journal image"
          draggable={false}
        />
        <Image
          className="absolute bottom-[400px] right-[36px] hidden sm:block left-[620px] sm:top-[810px] xl:left-[960px] xl:top-[760px]"
          src="/balance-cards@2x.png"
          width={290}
          height={226}
          alt="journal image"
          draggable={false}
        />
        <Image
          className="absolute top-[1760px] left-[46px] z-20 sm:hidden"
          src="/balance-cards@2x.png"
          width={205}
          height={159}
          alt="journal image"
          draggable={false}
        />
        <Image
          className="absolute -bottom-[110px] -right-[185px] hidden sm:block absolute left-[540px] bottom-[1px] xl:left-[800px] top-[1050px]"
          src="/dashboard-1@2x.png"
          width={663}
          height={462}
          alt="dashboard image"
          draggable={false}
        />
        <Image
          className="absolute top-[1466px] -left-[130px] sm:hidden max-w-[464px] w-[464px]"
          src="/dashboard-1@2x.png"
          width={464}
          height={323}
          alt="dashboard image"
          draggable={false}
        />
      </div>
    </Canvas>
  );
};
