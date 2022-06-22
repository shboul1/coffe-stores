// styles
import styles from './card.module.css';
// next
import Link from 'next/link';
import Image from 'next/image';

export default function Card({ row }) {
  const { fsq_id, name, imgURL } = row;
  return (
    <Link href={`/coffee-store/${fsq_id}`}>
      <a>
        <div className={`glass ${styles.cardWrapper}`}>
          <h2 className={styles.title}>{name}</h2>
          <Image className={styles.cardImage} src={imgURL} alt={'cardImg'} width={290} height={200} />
        </div>
      </a>
    </Link>
  );
}
