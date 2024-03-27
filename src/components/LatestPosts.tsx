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

export default function LatestPosts(Posts: Posts) {
  const { data } = Posts;
  return (
    <>
      {(Object.keys(data).length < 1 && <span>No Posts Yet</span>) ||
        data.map((post, index) => {
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
    </>
  );
}
