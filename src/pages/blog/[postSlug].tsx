import BlogContent from '@/components/blog-content';
import Footer from '@/components/Footer';
import Header from '@/components/header';

import { getPostSlugs, getSinglePost } from '../../../lib/posts';

interface PostProps {
  postData: any;
  featuredImageUrl: string;
}

export async function getStaticProps({
  params,
}: {
  params: { postSlug: string };
}) {
  const postData = await getSinglePost(params.postSlug);
  // eslint-disable-next-line no-console
  let featuredImageUrl =
    'https://www.kashmironline.com/blog/wp-content/uploads/2023/09/unnamed-11.jpg';

  if (postData.featuredImage) {
    featuredImageUrl =
      postData.featuredImage.node.mediaDetails.sizes[0].sourceUrl;
  }

  if (!postData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      postData,
      featuredImageUrl,
    },
    notFound: false,
  };
}

export async function getStaticPaths() {
  const postSlugs = await getPostSlugs();

  return {
    paths: Array.isArray(postSlugs) ? postSlugs.map((s: { slug: string }) => ({
      params: {
        postSlug: s.slug,
      },
    })) : [],
    fallback: 'blocking',
  };
  // const postSlugs = await getPostSlugs();

  // return {
  //   paths: postSlugs.map((s: { slug: string }) => ({
  //     params: {
  //       postSlug: s.slug,
  //     },
  //   })),
  //   fallback: 'blocking',
  // };
}

// eslint-disable-next-line import/export
export default function Blog({ postData, featuredImageUrl }: PostProps) {
  return (
    <div className="w-full bg-default-white text-left font-others-capitalised text-sm text-default-white">
      <Header />
      <div className="container mx-auto">
        <BlogContent postData={postData} featuredImageUrl={featuredImageUrl} />
        <div className="my-4" />
      </div>
      <Footer />
    </div>
  );
}
