import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import React, { useEffect, useState } from 'react'; // Import the CardComponent
import NotFound from '@/components/ui/not-found';

import { useSelector } from 'react-redux';
import Button from '@/components/ui/button';
import { useTranslation } from 'next-i18next';
import AverageRatings from '../reviews/store-average-ratings';
import { getRequest } from '../api';
import ReviewCard from '../reviews/store-review-card';
import { Card } from 'stream-chat-react';
interface propsType {
  rating: number;
}

export const ReviewStar: React.FC<propsType> = ({ rating }: any) => {
  const createdAtDate = new Date(rating.created_at);
  const year = createdAtDate.getFullYear();
  const month = ('0' + (createdAtDate.getMonth() + 1)).slice(-2); // Month is zero-based
  const day = ('0' + createdAtDate.getDate()).slice(-2);
  // Current date
  const currentDate = new Date();

  // Calculate the difference in milliseconds
  const differenceInMs = currentDate - createdAtDate;

  // Convert milliseconds to days, months, and years
  const differenceInDays = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
  const differenceInMonths =
    currentDate.getMonth() -
    createdAtDate.getMonth() +
    12 * (currentDate.getFullYear() - createdAtDate.getFullYear());
  const differenceInYears =
    currentDate.getFullYear() - createdAtDate.getFullYear();
  const customerName = rating.customer?.f_name;
  // Choose which count to display
  const countToDisplay = 'days'; // Change this to "months" or "years" to display the respective count

  let count;
  if (countToDisplay === 'days') {
    count = differenceInDays;
    count = count + '  ' + 'days';
  } else if (countToDisplay === 'months') {
    count = differenceInMonths;
    count = count + '  ' + 'months';
  } else if (countToDisplay === 'years') {
    count = differenceInYears;
    count = count + '  ' + 'years';
  }

  //console.log(rating);

  if (rating.rating == 5) {
    return (
      <>
        <div
          className="rounded-lg border bg-white p-2 shadow-200"
          style={{ width: '300px', height: '120px' }}
        >
          <div className="flex items-center justify-between">
            <h5 className="font-semibold">{customerName}</h5>
            <div className="flex gap-1 text-[20px] text-[#FF9529]">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
          </div>
          <h5 className="overflow-hidden  text-sm ">{rating.comment}</h5>
          <p className="text-xs text-gray-500">{count} ago</p>
        </div>
      </>
    );
  }
  if (rating.rating == 4) {
    return (
      <>
        <div
          className="rounded-lg border bg-white p-2 shadow-200"
          style={{ width: '300px', height: '120px' }}
        >
          <div className="flex items-center justify-between">
            <h5 className="font-semibold">{customerName}</h5>
            <div className="flex gap-1 text-[20px] text-[#FF9529]">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
          </div>
          <h5
            className="line-clamp-2 overflow-hidden text-sm"
            style={{ lineClamp: '2' }}
          >
            {rating.comment}
          </h5>
          <p className="text-xs text-gray-500">{count} ago</p>
        </div>
      </>
    );
  }
  if (rating.rating == 3) {
    return (
      <>
        <div
          className="rounded-lg border bg-white p-3 shadow-200"
          style={{ width: '300px', height: '120px' }}
        >
          <div className="flex items-center justify-between">
            <h5 className="font-semibold">{customerName}</h5>
            <div className="flex gap-1 text-[20px] text-[#FF9529]">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </div>
          </div>
          <h5 className="text-sm">{rating.comment}</h5>
          <p className="text-xs text-gray-500">{count} ago</p>
        </div>
      </>
    );
  }
  if (rating.rating == 2) {
    return (
      <>
        <div
          className="rounded-lg border bg-white p-2 shadow-200"
          style={{ width: '300px', height: '120px' }}
        >
          <div className="flex items-center justify-between">
            <h5 className="font-semibold">{customerName}</h5>
            <div className="flex gap-1 text-[20px] text-[#FF9529]">
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </div>
          </div>
          <h5 className="text-sm">{rating.comment}</h5>
          <p className="text-xs text-gray-500">{count} ago</p>
        </div>
      </>
    );
  }
  if (rating.rating == 1) {
    return (
      <>
        <div
          className="rounded-lg border bg-white p-2 shadow-200"
          style={{ width: '300px', height: '120px' }}
        >
          <div className="flex items-center justify-between">
            <h5 className="font-semibold">{customerName}</h5>
            <div className="flex gap-1 text-[20px] text-[#FF9529]">
              <AiFillStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </div>
          </div>
          <h5 className="text-sm">{rating.comment}</h5>
          <p className="text-xs text-gray-500">{count} ago</p>
        </div>
      </>
    );
  }
};
