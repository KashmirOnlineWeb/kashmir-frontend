import { useState } from 'react';

import { getPostList } from '../../lib/posts';

interface Post {
  pageInfo: {
    hasNextPage: boolean;
    endCursor?: any;
  };
  nodes: any[];
}

interface LoadMoreProps {
  posts: Post;
  setPosts: React.Dispatch<React.SetStateAction<Post>>;
  taxonomy?: any;
}

export default function LoadMore({
  posts,
  setPosts,
  taxonomy = null,
}: LoadMoreProps): JSX.Element {
  const bT: string = posts.pageInfo.hasNextPage
    ? 'Load more posts'
    : 'No more posts to load';
  const bD: boolean = !posts.pageInfo.hasNextPage;

  const [buttonText, setButtonText] = useState<string>(bT);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(bD);

  const handleOnclick = async (
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): Promise<void> => {
    setButtonText('Loading...');
    setButtonDisabled(true);

    const morePosts = await getPostList(posts.pageInfo.endCursor, taxonomy);

    const updatedPosts: Post = {
      pageInfo: {
        hasNextPage: false,
        endCursor: '',
      },
      nodes: [],
    };

    updatedPosts.pageInfo = morePosts.pageInfo;

    posts.nodes.map((node) => {
      updatedPosts.nodes.push(node);
    });

    morePosts.nodes.map((node: any) => {
      updatedPosts.nodes.push(node);
    });

    setPosts(updatedPosts);

    if (morePosts.pageInfo.hasNextPage) {
      setButtonText('Load more posts');
      setButtonDisabled(false);
    } else {
      setButtonText('No more posts to load');
      setButtonDisabled(true);
    }
  };
  return (
    <button
      className="load-more bg-blue-400 px-4 py-2 font-bold text-slate-900 hover:bg-blue-500"
      onClick={handleOnclick}
      disabled={buttonDisabled}
    >
      {buttonText}
    </button>
  );
}
