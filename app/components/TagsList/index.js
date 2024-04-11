import { TagIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import styles from './styles.module.css'

export default async function TagsList({ tags }) {
  return tags.length ? (
    <div className={styles.tags}>
      <TagIcon className="svg-icon" />
      <ul className={styles.list}>
        {tags.map((tag) => (
          <li key={tag.id}>
            <Link className={styles.link} href={`notes/tag/${tag.name}`}>
              {tag.name} <sup>{tag.count}</sup>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  ) : null
}
