// styles
import styles from './card.module.css';
// next
import Link from 'next/link';
import Image from 'next/image';

export default function Card({ row }) {
  const { id, imgUrl, websiteUrl, name } = row;
  return (
    <Link href={`/coffee-store/${id}`}>
      <a>
        <div className={`glass ${styles.cardWrapper}`}>
          <h2 className={styles.title}>{name}</h2>
          <Image className={styles.cardImage} src={imgUrl} width={290} height={200} />
        </div>
      </a>
    </Link>
  );
}
