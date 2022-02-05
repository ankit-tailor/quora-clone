import Image from "next/image";
import React from "react";
import {
  BiChevronDown,
  BiDotsVerticalRounded,
  BiShareAlt,
} from "react-icons/bi";
import { Button } from "../button/Button";

export const QuestionCard = () => {
  return (
    <section className="p-6 my-6 shadow-xl w-full h-auto rounded-xl dark:bg-primaryDark bg-primaryLight dark:text-primaryLight text-primaryDark">
      <div className="flex items-center justify-between">
        <div className="profile-info flex items-center">
          <Image
            src="https://pbs.twimg.com/profile_images/1462665715903696896/6UU9EkZF_400x400.jpg"
            alt="profile_photo"
            width="40px"
            height="40px"
            className="rounded-full w-10 h-10"
          />
          <p className="text-xl mx-4 font-extrabold">Ankit Tailor</p>
        </div>
        <BiDotsVerticalRounded
          // @ts-ignore
          className="text-2xl cursor-pointer font-extrabold"
        />
      </div>
      <p className="text-lightGray my-4 text-lg font-medium">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
        laborum ipsum harum nostrum, eos neque repudiandae. Accusantium modi
        explicabo fugiat ab porro reiciendis, error, unde voluptas, illum minus
        aspernatur corrupti!
      </p>
      <div className="flex items-center justify-between">
        <Button
          variant="secondary"
          color="indigo"
          className="sm:inline my-2 py-2 px-2 sm:px-6 rounded-md shadow-2xl"
          type="submit"
        >
          <span className="mx-2">View more</span>
          <BiChevronDown
            // @ts-ignore
            className="inline text-2xl"
          />
        </Button>
        <BiShareAlt
          // @ts-ignore
          className="cursor-pointer text-2xl"
        />
      </div>
    </section>
  );
};
