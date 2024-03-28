export default function LatestProjects() {
  return (
    <>
      <div className="w-2/3 sm:w-full flex flex-row justify-between p-2 pt-6 m-auto">
        <h2 className="text-4xl font-bold sm:text-4xl text-slate-900 dark:text-white">
          Projects
        </h2>
        <button className="outline outline-slate-900 outline-1 rounded-md p-2 hover:outline-slate-500 bg-indigo-500">
          <span className="font-medium">
            <a href="/projects">View All</a>
          </span>
        </button>
      </div>
      <div className="w-2/3 sm:w-full flex flex-col sm:flex-row justify-between pt-6 m-auto">
        <div className="bg-slate-600 h-52 sm: sm:w-1/3 w-full rounded-lg m-2"></div>
        <div className="bg-slate-600 h-52 sm: sm:w-1/3 w-full rounded-lg m-2"></div>
        <div className="bg-slate-600 h-52 sm: sm:w-1/3 w-full rounded-lg m-2"></div>
      </div>
    </>
  );
}
