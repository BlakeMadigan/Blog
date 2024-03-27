import Image from "next/image";
import profilePicture from "@/../public/profile-picture.jpg";
import LatestPosts from "@/components/LatestPosts";
import RecentProjects from "@/components/RecentProjects";
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
      <section className="w-2/3 sm:w-full flex flex-row justify-between p-2 pt-4 m-auto">
        <h2 className="text-4xl font-bold sm:text-4xl text-slate-900 dark:text-white">
          Latest <span className="hidden sm:inline-block">Posts</span>
        </h2>
        <button className="outline outline-slate-900 outline-1 rounded-md p-2 hover:outline-slate-500 bg-indigo-500">
          <span className="font-medium">
            <a href="/blog">View All</a>
          </span>
        </button>
      </section>
      <section className="w-2/3 m-auto sm:w-full grid sm:grid-flow-row sm:grid-rows-2 sm:grid-cols-3 grid-cols-1 spacing">
        {/* redo this shit sections are out of wack */}
        <LatestPosts data={Posts} />
      </section>
    </>
  );
}
