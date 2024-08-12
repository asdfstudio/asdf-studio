import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button, Canvas, Typography } from "components";
import { PortfolioCard } from "components/portfolio-card";
import { RootState } from "reducers";
import { getPortfolios, setSelectedTag } from "actions";
import { useAppDispatch } from "store/hooks";
import Spinner from "components/spinner";

export const PolicyPage: React.FC = () => {
  return (
    <Canvas classname="bg-greyBlueReverseFull bg-opacity-[0.4]">
      <div className="w-full h-[auto] z-10 sm:pt-[75px]">
        <div className="w-full mx-auto px-5 x:px-[95px] 1xl:flex-row 2xl:px-[95px] 4xl:px-[100px] 5xl:px-[120px]">
          <div className="flex">
            <Typography variant="heading9" classname="text-main-deepBlue">
              Fulfillment Policy
            </Typography>
          </div>
          <div className="flex">
            <Typography variant="body5" classname="text-main-deepBlue">
              Be part of our our best policy
            </Typography>
          </div>
          <div className="pt-[30px] sm:pt-[60px]">
            <div className="flex">
              <Typography variant="title8" classname="text-main-deepBlue">
                Refund and Return Policy
              </Typography>
            </div>
            <div className="flex">
              <Typography variant="title9" classname="text-main-deepBlue">
                If you are not satisfied with the design and have given us
                several attempts to revise the design, we will issue a full
                refund. There is no refund for development unless there are
                quality issues
              </Typography>
            </div>
          </div>

          <div className="pt-[30px]">
            <div className="flex">
              <Typography variant="title8" classname="text-main-deepBlue">
                Cancellation Policy
              </Typography>
            </div>
            <div className="flex">
              <Typography variant="title9" classname="text-main-deepBlue">
                Cancellation is available at any time during the process but
                funds must be paid up to work finished until cancellation.
              </Typography>
            </div>
          </div>

          <div className="pt-[30px]">
            <div className="flex">
              <Typography variant="title8" classname="text-main-deepBlue">
                Delivery Policy
              </Typography>
            </div>
            <div className="flex">
              <Typography variant="title9" classname="text-main-deepBlue">
                All goods are digital assets and take time to create. They will
                be delivered on an agreed upon timeline with us and the client.
              </Typography>
            </div>
          </div>
        </div>

        <div className="h-[1px] mt-[70px] bg-main-white" />

        <div className="sm:h-[25px]" />
      </div>
    </Canvas>
  );
};

export default PolicyPage;
