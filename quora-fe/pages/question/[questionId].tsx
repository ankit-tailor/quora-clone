import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { Button } from "../../src/components/button/Button";
import { Layout } from "../../src/components/Layout/Layout";
import { OpinionCard } from "../../src/components/OpinionCard/OpinionCard";
import { QuestionCard } from "../../src/components/QuestionCard/QuestionCard";

const QuestionDetails = () => {
  const router = useRouter();

  return (
    <>
      <div className="p-6 sm:px-16 sm:py-10 overflow-x-hidden h-screen w-screen mx-auto shadow-inner dark:bg-secondaryDark text-primaryLight bg-secondaryLight">
        <BiArrowBack
          //@ts-ignore
          onClick={() => router.push("/")}
          className="cursor-pointer text-4xl"
        />
        <section className="mt-8 lg:px-4">
          <div className="profile-info flex items-center my-4 lg:mx-10">
            <Image
              src="https://pbs.twimg.com/profile_images/1462665715903696896/6UU9EkZF_400x400.jpg"
              alt="profile_photo"
              width="40px"
              height="40px"
              className="rounded-full w-10 h-10"
            />
            <p className="text-xl mx-4 font-extrabold">Ankit Tailor</p>
          </div>
          <div className="lg:mx-14">
            <h1 className="text-3xl font-bold text-indigo">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,{" "}
              <a href="" className="lorem5"></a>
            </h1>
            <p className="text-xl text-primaryLight leading-9">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              reprehenderit maxime quibusdam voluptates perferendis, nostrum
              tempora aliquid vero, sed quos fugit obcaecati accusantium ipsum,
              eaque vitae itaque et. Rem, nemo. Doloribus modi vel dolorem
              explicabo, sit fugit reprehenderit id dolore est laboriosam earum
              nemo aspernatur nesciunt? Pariatur esse iste, veniam aspernatur
              nostrum neque possimus consectetur numquam delectus facere porro!
              Ex. Quibusdam cumque quia soluta aliquid exercitationem nam
              recusandae tempora voluptas repudiandae ea dolorum quis, corporis
              voluptatem repellendus culpa veritatis praesentium inventore
              delectus. Cum doloremque eius aperiam adipisci, debitis eveniet
              dolore. Officiis aspernatur dolore iusto placeat laborum est
              commodi quaerat! Laboriosam maxime illum fugiat excepturi eligendi
              fuga non sint eaque commodi? Hic, enim? Dolores earum nemo
              cupiditate, hic architecto eveniet soluta. Magni, itaque eos eaque
              enim magnam repellendus repellat corrupti animi ipsam voluptates
              doloremque? Quas totam sunt, culpa vitae natus dolores eaque
              tempora dignissimos reprehenderit accusamus dicta consequatur
              recusandae corrupti voluptatem.
            </p>
          </div>
        </section>
        <section className="my-6 lg:mx-14">
          <form>
            <div className="flex items-center px-4 dark:bg-primaryDark bg-primaryLight rounded-xl ">
              <input
                className="px-4 font-extrabold text-md sm:text-xl py-5 w-full dark:bg-primaryDark bg-primaryLight  border-0 outline-none"
                type="text"
                placeholder="What's your question?"
              />
              <Button
                variant="primary"
                color="indigo"
                className="hidden sm:inline py-2 px-6 rounded-md shadow-2xl"
                type="submit"
              >
                Post
              </Button>
            </div>
          </form>
        </section>
        <section className="lg:mx-14">
          <h1 className="font-bold text-2xl underline">Comments</h1>
          <OpinionCard />
          <OpinionCard />
          <OpinionCard />
          <OpinionCard />
          <OpinionCard />
          <OpinionCard />
          <OpinionCard />
        </section>
      </div>
    </>
  );
};

export default QuestionDetails;
