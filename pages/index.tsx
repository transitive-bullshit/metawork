import React from 'react'

import { Layout } from 'components/Layout/Layout'
import { MetaballVisualization } from 'components/MetaballVisualization/MetaballVisualization'
import { Metaballs } from 'state/metaballs'

import styles from 'styles/index.module.css'

export default function HomePage() {
  const [hasMounted, setHasMounted] = React.useState(false)
  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <Metaballs.Provider>
      <Layout>
        {hasMounted && <MetaballVisualization />}

        <div className={styles.section}>
          <div className={styles.hero}>
            <h1 className={styles.title}>Metawork</h1>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.hero}>
            <h1 className={styles.title}>TEST</h1>
          </div>
        </div>
      </Layout>
    </Metaballs.Provider>
  )
}
