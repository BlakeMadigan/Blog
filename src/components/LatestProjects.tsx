export default function LatestProjects() {
  return (
    <>
      <div className="w-5/6 sm:w-full flex flex-row justify-between p-2 pt-6 m-auto">
        <h2 className="text-4xl font-bold sm:text-4xl text-slate-900 dark:text-white">
          Projects
        </h2>
        <button className="outline outline-slate-900 outline-1 rounded-md p-2 hover:outline-slate-500 bg-indigo-500">
          <span className="font-medium">
            <a href="/projects">View All</a>
          </span>
        </button>
      </div>
      <div className="w-5/6 sm:w-full flex flex-col sm:flex-row justify-between pt-6 m-auto">
        <div className="outline outline-2 outline-slate-400 bg-slate-700 h-52 sm: sm:w-1/3 w-full rounded-lg m-2 p-5">
          <span className="text-indigo-300 font-medium">2024</span>
          <h3 className="pt-1 pb-2 font-medium text-xl">My Portfolio Blog</h3>
          <span className="text-slate-300">Description</span>
          <div className="pt-10 flex gap-4">
            <div className="outline outline-slate-400 outline-1 rounded-md p-2 hover:outline-slate-500 bg-indigo-500">
              Article
            </div>
            <div className="outline outline-slate-400 outline-1 rounded-md p-2 hover:outline-slate-500 bg-indigo-500">
              Source
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
