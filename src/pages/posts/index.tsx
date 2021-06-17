import Head  from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Creating mono</strong>
            <p>Lorem ipsum dolor sit amet. Proin faucibus elit quis lorem eleifend, fermentum viverra turpis venenatis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos.</p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Creating mono</strong>
            <p>Lorem ipsum dolor sit amet. Proin faucibus elit quis lorem eleifend, fermentum viverra turpis venenatis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos.</p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Creating mono</strong>
            <p>Lorem ipsum dolor sit amet. Proin faucibus elit quis lorem eleifend, fermentum viverra turpis venenatis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos.</p>
          </a>
        </div>
      </main>
    </>
  )
}