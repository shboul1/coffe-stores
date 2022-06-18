// next
import Link from 'next/link';
import { useRouter } from 'next/router';
import CoffeStoresData from '../../data/coffe-stores-data.json';
export async function getStaticProps(StaticProps) {
  const {
    params: { id },
  } = StaticProps;
  return {
    props: {
      coffeStore: CoffeStoresData.find((coffeStore) => coffeStore.id.toString() == id),
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: CoffeStoresData.map((coffeStore) => ({
      params: { id: coffeStore.id.toString() },
    })),
    fallback: false,
  };
}

export default function CoffeeStore({ coffeStore }) {
  const router = useRouter();
  const {
    query: { id },
  } = router;
  return (
    <div>
      <Link href={'/'}>
        <a>{coffeStore.name}</a>
      </Link>
    </div>
  );
}
