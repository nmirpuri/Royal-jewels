import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import CatalogSidebar from '../components/CatalogSidebar'
import ProductGrid from '../components/ProductGrid'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <div className={styles.container}>
        <CatalogSidebar />
        <ProductGrid />
      </div>
    </>
  )
}
