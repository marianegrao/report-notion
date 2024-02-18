'use client'
import styles from './page.module.css'
import { Container } from './style.css'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    console.log(
      `Como o arquivo 'app/page.tsx' possui interação (com UseEffect), 
       necessário usar a flag 'use client' para renderizar sem erros`
    )
  }, [])
  return (
    <main className={styles.main}>
      <div role="heading" aria-level={1} className={Container}>
        <h2>Home</h2>
      </div>
    </main>
  )
}
