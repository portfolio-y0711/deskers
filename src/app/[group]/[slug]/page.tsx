import Content from '@/lib/components/detail/Content';
import ContentHeader from '@/lib/components/detail/ContentHeader';
import { getPostBySlug } from '@/data/posts';
import Thumbnail from '@/lib/components/detail/Thumbnail';
import Container from '@/core/layout/Container';

const Page = async ({ params }: any) => {
  const { group, slug } = params;

  const post = await getPostBySlug({ group, slug });
  return (
    <Container>
      <div style={{ maxWidth: 900, margin: 'auto', width: '100%' }}>
        <Thumbnail img={post.thumbnail} />
        <ContentHeader post={post} />
        <Content post={post} />
      </div>
    </Container>
  );
};

export default Page;