import { Canvas, FooterCard, Typography } from "components";
import { padding } from "../constants";
import Image from "next/image";
import Link from "next/link"; //
import { Link as ScrollLink } from "react-scroll";
import Scroll from "react-scroll";

import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

export const PageFooter = () => {
  const pathname = usePathname();
  const router = useRouter();
  const scroller = Scroll.scroller;

  const scrollTarget = (target: string) =>
    scroller.scrollTo(target, { smooth: true, duration: 700, offset: -60 });

  const scrollToPage = async (target: string) => {
    if (pathname !== "/") {
      await router.push("/");
    }
    scrollTarget(target);
  };
  return (
    <Canvas classname="bg-main-lightBlue">
       <div
        id="contact_us"
        className={[
          "relative max-w-[1180px] 2xl:max-w-[1260px] w-full mx-auto z-20 pt-[60px]",
          padding,
        ].join(" ")}
      >
        <div className="flex flex-col sm:flex-row ">
          <div className="flex flex-col max-w-[585px] w-full gap-[13px] sm:gap-[6.3px] z-30 items-center sm:items-start sm:ml-[30px]">
            <div className="relative w-fit">
              <Typography
                variant="heading4"
                classname="text-main-deepBlue opacity-35"
              >
                Let’s Connect
              </Typography>
              <Image
                src={"/thunder@2x.png"}
                width={60}
                className="absolute -right-[55px] -top-[25px]"
                height={78}
                style={{ width: 60, height: 78 }}
                alt="hearth emoji"
                draggable={false}
              />
            </div>

            <Typography
              variant="heading4"
              classname=" text-main-deepBlue text-center sm:text-start"
            >
              Let us simplify the process of navigating the challenges in
              developing innovative digital products for you.
            </Typography>
          </div>
          <div className="h-[45px]" />
          <div className="hidden sm:block border border-main-lightBlue h-[323px] mx-[50px] justify-evenly" />
          <div className="flex gap-[37.5px] flex-wrap sm:flex-row justify-around pr-4">
            {/* <FooterCard
            image={{
              path: 'calendar@2x.png',
              width: 188,
              height: 112,
            }}
            title="Schedule a Meeting"
            desc="Let’s schedule a 15-minutes free consultation call. We are very eager to hear from you and collaborate"
            buttonText="schedule"
            type="meeting"
          />
          <FooterCard
            image={{
              path: 'message@2x.png',
              width: 112,
              height: 112,
            }}
            title="Send Message"
            desc="Send us an in-site message and start a live chat."
            buttonText="message"
            type="message"
          />
          <FooterCard
            image={{
              path: 'email&Phone@2x.png',
              width: 188,
              height: 112,
            }}
            title="Email & Phone"
            buttonText="Contact Now"
            desc="Send us an email about your project and we will get back to you as soon as possible."
            type="contact"
          /> */}

            <FooterCard
              image={{
                path: "email@2x.png",
                width: 112,
                height: 112,
              }}
              title="Send Email"
              buttonText="EMAIL"
              desc="Send us an email about your project and we will get back to you as soon as possible."
              type="contact"
            />
          </div>
        </div>

        <div className="flex flex-col mt-[33px] sm:mt-[52px]">
          <div className="flex sm:gap-[22px] gap-5 mx-auto flex-col sm:flex-row items-center sm:items-start">
            <div onClick={() => scrollToPage("design")}>
              <Typography
                classname="uppercase text-main-deepBlue font-medium cursor-pointer"
                variant="label2"
              >
                Design
              </Typography>
            </div>
            <div onClick={() => scrollToPage("development")}>
              <Typography
                classname="uppercase text-main-deepBlue font-medium cursor-pointer"
                variant="label2"
              >
                Development
              </Typography>
            </div>
            {/* <Link
              to={'marketing'}
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              <Typography
                classname="uppercase text-main-deepBlue font-medium cursor-pointer"
                variant="label2"
              >
                Marketing
              </Typography>
            </Link> */}
            <div onClick={() => scrollToPage("clients")}>
              <Typography
                classname="uppercase text-main-deepBlue font-medium cursor-pointer"
                variant="label2"
              >
                Clients
              </Typography>
            </div>
            <div onClick={() => scrollToPage("Process")}>
              <Typography
                classname="uppercase text-main-deepBlue font-medium cursor-pointer"
                variant="label2"
              >
                Process
              </Typography>
            </div>
            <div onClick={() => scrollToPage("testmonials")}>
              <Typography
                classname="uppercase text-main-deepBlue font-medium cursor-pointer"
                variant="label2"
              >
                Testimonials
              </Typography>
            </div>
            <ScrollLink
              href="#contact_us"
              to={"contact_us"}
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              <Typography
                classname="uppercase text-main-deepBlue font-medium cursor-pointer"
                variant="label2"
              >
                Contact Us
              </Typography>
            </ScrollLink>
            <Link href="/policy">
              <Typography
                classname="uppercase text-main-deepBlue font-medium cursor-pointer"
                variant="label2"
              >
                Fulfillment Policy
              </Typography>
            </Link>
          </div>
          {/* <div className="max-w-[322px] w-full mx-auto text-center mt-[24px]">
            <Typography variant="body2" classname="text-main-deepBlue">
              44/A Judge Court Road, Cumilla, Bangladesh
            </Typography>
          </div> */}
          <div className="max-w-[477px] w-full mx-auto text-center mt-[15px]">
            <Typography variant="body3" classname="text-main-deepBlue">
              © 2019-2023 [asdf]studio, LLC. All rights reserved. Trademarks and
              brands are the property of their respective owners.
            </Typography>
          </div>
        </div>
        <Image
          src={"/footer@2x.png"}
          width={1080}
          height={351}
          style={{ width: 1080, height: 351 }}
          alt="footer"
          className="mx-auto hidden object-cover sm:block"
          draggable={false}
        />
      </div>
      <Image
        src={"/footer-mobile@2x.png"}
        width={360}
        height={335}
        style={{ width: 360, height: 335 }}
        alt="footer"
        className="mx-auto sm:hidden"
        draggable={false}
      />
    </Canvas>
  );
};
