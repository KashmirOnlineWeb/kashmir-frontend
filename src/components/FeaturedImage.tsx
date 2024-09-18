import Image from 'next/image';
import Link from 'next/link';

import type { IPost } from '@/pages/blog';

interface FeaturedImageProps {
  post: IPost;
}

export default function FeaturedImage({
  post,
}: FeaturedImageProps): JSX.Element {
  let img: {
    src: string;
    width: number;
    height: number;
  } = {
    src: '',
    width: 0,
    height: 0,
  };

  const defaultFeaturedImage: string =
    'https://www.kashmironline.com/blog/wp-content/uploads/2023/09/unnamed-11.jpg';
  const defaultWidth: number = 300;
  const defaultHeight: number = 200;

  if (post.featuredImage) {
    const size = post.featuredImage.node.mediaDetails.sizes[0];
    // eslint-disable-next-line no-console

    img = {
      src: size?.sourceUrl,
      width: size?.width,
      height: size?.height,
    };
  } else {
    img = {
      src: defaultFeaturedImage,
      width: defaultWidth,
      height: defaultHeight,
    };
  }

  return (
    <Link href={`/blog/${post.slug}`}>
      <Image
        src={img.src}
        width={img.width}
        height="200"
        alt={post.title as string}
        className="rounded-xl object-cover"
      />
    </Link>
  );
}
