import styles from './styles.module.css'

export default function LoadMoreButton({ hasNextPage, isLoading, handleLoadMore }) {
  if (!hasNextPage && !isLoading) return null
  return (
    <button className={styles.loadmore} onClick={handleLoadMore} disabled={isLoading} type="button">
      {isLoading ? 'Загрузка...' : 'Загрузить ещё'}
    </button>
  )
}
