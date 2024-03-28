import Image from "next/image";
import profilePicture from "@/../public/profile-picture.jpg";
import LatestPosts from "@/components/LatestPosts";
import Posts from "@/data/fakepost.json";

export default function Home() {
  return (
    <>
      <section className="flex flex-col-reverse justify-center sm:flex-row p-6 gap-8">
        <article className="w-2/3 sm:w-1/2 pt-6 m-auto">
          <h2 className="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white">
            Hi, I&apos;m Blake
          </h2>
          <p className="max-w-md text-2x1 mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400 font-medium">
            I&apos;m looking to start my career as a Web Developer.
          </p>
          <p className="max-w-md text-2x1 mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400 font-medium">
            Please enjoy exploring my page and viewing my progress.
          </p>
        </article>
        <Image
          className="w-1/2 rounded-full m-auto"
          alt="personal photo"
          src={profilePicture}
        />
      </section>
      <section>
        <LatestPosts data={Posts} />
      </section>
      <section></section>
    </>
  );
}
