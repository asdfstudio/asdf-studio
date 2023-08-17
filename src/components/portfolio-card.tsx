import React, { useState } from 'react';
import { ChevronRight } from 'icons';
import Image from 'next/image';
import { FC } from 'react';
import { Typography } from './Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Modal } from 'antd';

type Props = {
    id:string
    image: {
        path: string;
        width: number;
        height: number;
    };
    index: number;
    title: string;
    desc?: string;
    tags?: object;
    imageList: object;
};

export const PortfolioCard: FC<Props> = ({
    id,
    image,
    index,
    title,
    desc,
    tags,
    imageList,
}) => {
  const { path, width, height } = image;
  const [portfolioModalOpen, setPortfolioModalOpen] = useState(false);
  const [show, setShow] = useState(false);

  const handleCancel = () => {
        setPortfolioModalOpen(false);
    };

  return (
    <div>
        <div onClick={() => setPortfolioModalOpen(true)} className='bg-white rounded-[14px] shadow-buttonShadow5 w-[310px] sm:w-[390px] xl:w-[430px] 1xl:w-[530px] 2xl:w-[630px] 5xl:w-[870px]'>
            <Image
                className={"rounded-t-[14px]"}
                alt="image"
                key={index}
                src={'/portfolio/cover/' + path}
                width={width}
                height={height}
                draggable={false}
            />
            <div className='p-[20px] sm:px-[32px] py-[24px]'>
                <div className='text-main-deepBlue truncate'>
                    <Typography variant="heading5" classname="text-main-deepBlue">
                        {title}
                    </Typography>
                </div>
                {/* <div className='py-[20px]'> */}
                <div>
                    <Typography variant="title6" classname="text-main-deepBlue opacity-80">
                        {desc && desc}
                    </Typography>
                </div>
                <div className='flex gap-4 pt-0'>
                    {
                        tags && Object.values(tags).map(({tag}) => {
                            return (
                                <Typography variant="title-semi-button2" classname="text-main-deepBlue bg-main-lightGray rounded-3xl p-2 px-4">
                                    {tag}
                                </Typography>
                            );
                        }) 
                    }
                </div>
            </div>
        </div>
        <Modal
            style={{ top: 150 }}
            open={portfolioModalOpen}
            width={800}
            onCancel={handleCancel}
            closeIcon={
            <FontAwesomeIcon icon={faCircleXmark} style={{ fontSize: 20 }} />
            }
            footer={null}
            mask={true}
        >
            <div className="ml-2 mb-2 mt-4 flex flex-wrap sm:flex-column justify-left">
                <div className='p-[20px] sm:px-[32px] py-[24px]'>
                    <div className=''>
                        <Typography variant="heading5" classname="text-main-deepBlue">
                            {title}
                        </Typography>
                    </div>
                    {/* <div className='py-[20px]'> */}
                    <div>
                        <Typography variant="title6" classname="text-main-deepBlue opacity-80">
                            {desc && desc}
                        </Typography>
                    </div>
                    <div className='flex gap-4 pt-0'>
                        {
                            tags && Object.values(tags).map(({tag}) => {
                                return (
                                    <Typography variant="title-semi-button2" classname="text-main-deepBlue bg-main-lightGray rounded-3xl p-2 px-4">
                                        {tag}
                                    </Typography>
                                );
                            }) 
                        }
                    </div>
                </div>
                {/* <Image
                    className={""}
                    alt="image"
                    key={index}
                    src={'/portfolio/cover/' + path}
                    width={width}
                    height={height}
                    draggable={false}
                /> */}
                {Object.values(imageList).map(({image}) => {
                    return (
                        <Image
                            className={""}  
                            alt="image"
                            key={index}
                            src={'/portfolio/'+ id +'/'+ image}
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