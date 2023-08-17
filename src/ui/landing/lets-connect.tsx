import { CommentCard, Colors } from "components";
import React, { FC, memo, useEffect, useState } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { userComments } from "../../constants";

type Props = {
  ref: any;
};

const ClientComment = React.forwardRef((props, ref) => {
  const [slidesToShow, setSlidesToShow] = useState(4);

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  useEffect(() => {
    if (!window) return;

    if (window.innerWidth < 767) {
      setSlidesToShow(1);
    }
    else if (window.innerWidth < 1024) {
      setSlidesToShow(2);
    }
    else if (window.innerWidth < 1440) {
      setSlidesToShow(3);
    }
    else setSlidesToShow(4);
  }, []);

  return (
    <div className="relative h-[660px] sm:h-[520px]">
      <div className="max-w-full w-full sm:max-w-[1656px] absolute left-1/2 transform -translate-x-1/2">
        <Slider ref={(slider) => (ref.current = slider)} {...settings}>
          {userComments.map(({ color, comment, name, position }, index) => {
            return (
              <div className="p-[10px] sm:p-[10px]" key={index}>
              <CommentCard
                key={index}
                color={color}
                comment={comment}
                position={position}
                name={name}
              />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
});

ClientComment.displayName = "ClientComment";

export const ClientComments = memo(ClientComment);
