// next
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './coffe-store.module.css';
import { GetCoffeStores } from '../../lib/GetCoffeStore';
export async function getStaticProps(StaticProps) {
  const {
    params: { id },
  } = StaticProps;
  const coffeStores = await GetCoffeStores();
  return {
    props: {
      coffeStore: coffeStores.find((coffeStore) => coffeStore.fsq_id.toString() == id),
    },
  };
}

export async function getStaticPaths() {
  const coffeStores = await GetCoffeStores();
  return {
    paths: coffeStores.map((coffeStore) => ({
      params: { id: coffeStore.fsq_id.toString() },
    })),
    fallback: true,
  };
}

export default function CoffeeStore({ coffeStore }) {
  const router = useRouter();

  if (router.isFallback) {
    return 'Loading ...';
  }
  const { name, location, imgURL } = coffeStore;
  return (
    <div className={styles.container}>
      <Link href={'/'}>
        <a>← Back To Home</a>
      </Link>
      <h2 className={styles.title}>{name}</h2>
      <div className={styles.coffeStoreWrapper}>
        <Image className={styles.image} src={imgURL} width={600} height={360} alt={name} />
        <div className={`${styles.coffeInfo} glass`}>
          <div className={styles.iconWrapper}>
            <Image alt="img" className={styles.icon} src="/static/icons/location.svg" width="24" height="24" />
            <div className={styles.info}>{location.address}</div>
          </div>
          <div className={styles.iconWrapper}>
            <Image alt="img" className={styles.icon} src="/static/icons/star.svg" width="24" height="24" />
            <div className={styles.info}>{location.postcode}</div>
          </div>

          <button className={styles.voteBtn}>Up Vote!</button>
        </div>
      </div>
    </div>
  );
}
