interface Posts {
  data: {
    metadata: {
      id: String;
      date: Date;
      title: String;
    };
    contentUrl: String;
    comments: {
      user: String;
      comment: String;
      date: Date;
    };
    tags: String[];
  }[];
}

export default function LatestPosts(Posts: any) {
  const { data } = Posts;
  return (
    <>
      <div className="w-2/3 sm:w-full flex flex-row justify-between p-2 pt-4 m-auto">
        <h2 className="text-4xl font-bold sm:text-4xl text-slate-900 dark:text-white">
          Latest <span className="hidden sm:inline-block">Posts</span>
        </h2>
        <button className="outline outline-slate-900 outline-1 rounded-md p-2 hover:outline-slate-500 bg-indigo-500">
          <span className="font-medium">
            <a href="/blog">View All</a>
          </span>
        </button>
      </div>
      <div className="w-2/3 m-auto sm:w-full grid sm:grid-flow-row sm:grid-rows-2 sm:grid-cols-3 grid-cols-1 spacing">
        {(Object.keys(data).length < 1 && <span>No Posts Yet</span>) ||
          data.map((post: any, index: any) => {
            const { metadata, contentUrl, comments, tags } = post;
            return (
              <div
                className="p-2 text-slate-700 dark:text-slate-400 font-medium text-ellipsis overflow-hidden whitespace-nowrap"
                key={index}
              >
                <a href="#">{metadata.title}</a>
                <hr />
              </div>
            );
          })}
      </div>
    </>
  );
}
