import React, { useState } from 'react';
import { ChevronRight } from 'icons';
import Image from 'next/image';
import { FC } from 'react';
import { Typography } from './Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Modal } from 'antd';
import { BASE_IMAGE_URL } from '../../urlConfig';
import { portfolioExit, portfolioVisit } from 'actions';

type Props = {
    image: {
        path: string;
        width: number;
        height: number;
    };
    index: number;
    portfolio_id: string;
    title: string;
    desc: string;
    tags: object;
    imageList: object;
};

export const PortfolioCard: FC<Props> = ({
    image,
    index,
    portfolio_id,
    title,
    desc,
    tags,
    imageList,
}) => {
  const { path, width, height } = image;
  const [portfolioModalOpen, setPortfolioModalOpen] = useState(false);
  const [entranceTime, setEntranceTime] = useState('');

  const handleOpen = () => {
        setPortfolioModalOpen(true);
        const currentEntranceTime = new Date().toISOString().slice(0, 19).replace('T', ' ');
  
        setEntranceTime(currentEntranceTime);
      
        const openData = {
          portfolioId: portfolio_id,
          entranceTime: currentEntranceTime,
        };
      
        portfolioVisit(openData)();
    };
  const handleCancel = () => {
        setPortfolioModalOpen(false);
        const exitTime = new Date().toISOString().slice(0, 19).replace('T', ' ');
        const closeData = {
            portfolioId: portfolio_id,
            entranceTime: entranceTime,
            exitTime: exitTime
        } 

        portfolioExit(closeData)();
    };

  return (
    <div>
        <div 
            onClick={() => handleOpen()} 
            className='bg-white rounded-[14px] shadow-buttonShadow5 w-auto mx-4 sm:w-[390px] sm:mx-0 xl:w-[430px] 1xl:w-[530px] 2xl:w-[630px] 4xl:w-[535px]'
        >
            <Image
                className={"rounded-t-[14px]"}
                alt="image"
                key={index}
                // src={'/' + path}
                src={`${BASE_IMAGE_URL}${path}`}
                width={width}
                height={height}
                style={{ borderRadius: 10, objectFit: "cover"}}
                priority
                draggable={false}
            />
            <div className='p-[20px]'>
                <div className='text-main-deepBlue w-[290px] truncate'>
                    <Typography variant="heading6" classname="text-main-deepBlue">
                        {title}
                    </Typography>
                </div>
                {/* <div className='my-[20px] text-main-deepBlue opacity-80' style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    }}>
                    <Typography variant="title6">
                        {desc}
                    </Typography>
                </div>
                <div className='flex flex-wrap gap-4 py-2 whitespace-nowrap'>
                    {Object.values(tags).map(({tag}, i) => {
                        return (
                        <div key={i}>
                            <Typography variant="title-semi-button2" classname="text-main-deepBlue bg-main-lightGray rounded-3xl p-2 px-4">
                                {tag}
                            </Typography>
                        </div>
                        );
                    })}
                </div> */}
            </div>
        </div>
        <Modal
            className='pt-[0px] max-w-[100%] sm:pt-[70px] sm:max-w-[90%]'
            open={portfolioModalOpen}
            width={1360}
            onCancel={handleCancel}
            closeIcon={
                // <FontAwesomeIcon icon={faCircleXmark} style={{ fontSize: 20, color: 'red', boxShadow:'1px 1px 5px lightblue', borderRadius: '40px'}} />
                <div className='ml-[-15px] mt-[-8px]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 68 68" fill="none">
                <g filter="url(#filter0_d_463_3227)">
                    <rect x="11.0205" y="8.47949" width="46" height="46" rx="23" fill="white"/>
                    <rect x="11.0205" y="8.47949" width="46" height="46" rx="23" stroke="white" stroke-opacity="0.143275"/>
                </g>
                <path d="M27.3418 24.8945L40.3418 37.8945" stroke="black" stroke-width="2"/>
                <path d="M40.3418 24.8945L27.3418 37.8945" stroke="black" stroke-width="2"/>
                <defs>
                    <filter id="filter0_d_463_3227" x="0.520508" y="0.979492" width="67" height="67" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="3"/>
                    <feGaussianBlur stdDeviation="5"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_463_3227"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_463_3227" result="shape"/>
                    </filter>
                </defs>
                </svg>
            </div>
            }
            footer={null}
            mask={true}
            maskStyle={{
                background: 'linear-gradient(230deg, #FFF 0%, rgba(255, 255, 255, 0.22) 6.25%, rgba(255, 255, 255, 0.00) 100%)',
                backdropFilter: 'blur(5px)',
            }}
            bodyStyle={{ margin:"-20px -24px"}}
        >
            <div className="ml-0 mb-0 mt-0 flex flex-wrap sm:flex-column justify-left">
                <div className='p-[24px]'>
                    <div className='pl-2 pt-1'>
                        <Typography variant="heading6" classname="text-main-deepBlue">
                            {title}
                        </Typography>
                    </div>
                    <div className='pl-2 py-[20px]'>
                        <Typography variant="title6" classname="text-main-deepBlue opacity-80">
                            {desc}
                        </Typography>
                    </div>
                    <div className='flex flex-wrap gap-4 py-2 whitespace-nowrap'>
                        {Object.values(tags).map(({tag}, i) => {
                            return (
                                <div key={i}>
                                    <Typography variant="title-semi-button2" classname="text-main-deepBlue bg-main-lightGray rounded-3xl p-2 px-4">
                                        {tag}
                                    </Typography>
                                </div>
                            );
                        })}
                    </div>
                </div>
                {Object.values(imageList).map(({image}, i) => {
                    return (
                        <Image
                            className={`${i == 0 && 'rounded-t-[8px]'} ${i === Object.values(imageList).length -1 && 'rounded-b-[8px]' }`}  
                            alt="image"
                            key={index}
                            src={`${BASE_IMAGE_URL}${image}`}
                            width={width}
                            height={height}
                            draggable={false}
                        />
                    );
                })}
            </div>
        </Modal>
    </div>
  );
};