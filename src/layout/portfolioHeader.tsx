import { useEffect, useRef, useState } from "react";
import { Button, IconButton } from "components";
import { setSelectedTag } from "actions";
import { useAppDispatch } from "store/hooks";
import { useSelector } from "react-redux";
import { RootState } from "reducers";
import { ArrowRight, ChevronRight } from "icons";

const PORTFOLIO__LINK = [
  {
    display: "All Works",
  },
  {
    display: "Branding",
  },
  {
    display: "Website",
  },
  {
    display: "Web Applications",
  },
  {
    display: "Mobile Applications",
  },
  {
    display: "Product Design",
  },
  {
    display: "Graphics Design",
  },
  {
    display: "Presentation",
  },
  {
    display: "Social Media",
  },
];

export const PortfolioHeader = () => {
  const dispatch = useAppDispatch();
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [showLeftArrow, setShowLeftArrow] = useState<boolean>(false);
  const [showRightArrow, setShowRightArrow] = useState<boolean>(false);

  const isScrollable = () => {
    const scrollContainer = scrollContainerRef.current;
    return !!(
      scrollContainer &&
      scrollContainer.scrollWidth > scrollContainer.clientWidth &&
      scrollContainer.scrollLeft <
        scrollContainer.scrollWidth - (scrollContainer.clientWidth + 0)
    );
  };

  const isScrollableToLeft = () => {
    const scrollContainer = scrollContainerRef.current;
    return !!(scrollContainer && scrollContainer.scrollLeft > 0);
  };

  const updateButtonVisibility = () => {
    setShowLeftArrow(isScrollableToLeft());
    setShowRightArrow(isScrollable());
  };

  useEffect(() => {
    updateButtonVisibility();
    window.addEventListener("resize", updateButtonVisibility);
    return () => {
      window.removeEventListener("resize", updateButtonVisibility);
    };
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      if (direction === "right") {
        scrollContainer.scrollLeft += 100; // You can adjust the scroll distance
      } else if (direction === "left" && scrollContainer.scrollLeft > 0) {
        scrollContainer.scrollLeft -= 100; // You can adjust the scroll distance
      }
      updateButtonVisibility();
    }
  };

  const handleTagClick = (tag: string) => {
    dispatch(setSelectedTag(tag));
  };

  const selectedTag = useSelector(
    (state: RootState) => state.portfolio.selectedTag
  );

  return (
    <div className="fixed top-15 left-0 bg-main-deepBlue shadow-headerShadow w-full z-40 bg-gradient-to-l from-[#FFFFFF] via-[0.03%] 2xl:via-[0%]">
      <div
        className={`w-auto h-[50px] flex flex-row items-center gap-2 shadow-headerShadow overflow-x-auto scroll-smooth 2xl:justify-center`}
        ref={scrollContainerRef}
      >
        {showLeftArrow && (
          <div className="flex fixed ml-2 2xl:hidden">
            <IconButton
              type="circle"
              icon={
                <ArrowRight className="font-[12px] fill-main-deepBlue rotate-180 -mt-1" />
              }
              classname="w-[30px] h-[30px] bg-white pt-1 shadow shadow-main-deepBlue"
              onClick={() => handleScroll("left")}
            />
          </div>
        )}

        {PORTFOLIO__LINK.map((item, index) => (
          <Button
            key={index}
            variant="tag"
            typoVariant="tag"
            onClick={() => handleTagClick(item.display)}
          >
            <div
              className={`
                ${
                  selectedTag == item.display
                    ? "bg-main-white text-main-deepBlue"
                    : "text-main-white"
                }
                p-2 px-3 whitespace-nowrap uppercase hover:bg-main-white rounded-full hover:text-main-deepBlue`}
            >
              {item.display}
            </div>
          </Button>
        ))}

        {showRightArrow && (
          <div className="right-0 mr-2 fixed 2xl:hidden">
            <IconButton
              type="circle"
              icon={
                <ArrowRight className="font-[12px] fill-main-deepBlue -mt-1" />
              }
              classname="w-[30px] h-[30px] bg-white pt-1 shadow shadow-main-deepBlue"
              onClick={() => handleScroll("right")}
            />
          </div>
        )}
      </div>
    </div>
  );
};
