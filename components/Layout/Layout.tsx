import React from 'react'

import { Head } from '../Head/Head'
// import { NavHeader } from '../NavHeader/NavHeader'
// import { NavFooter } from '../NavFooter/NavFooter'

import styles from './styles.module.css'

export const Layout: React.FC<{
  title?: string
  description?: string
  twitter?: string
  socialImage?: string
}> = ({ children, title, description, twitter, socialImage }) => {
  return (
    <>
      <Head
        title={title}
        description={description}
        twitter={twitter}
        socialImage={socialImage}
      />

      <div className={styles.body}>
        {/* <NavHeader /> */}

        <main className={styles.main}>{children}</main>

        {/* <NavFooter /> */}
      </div>
    </>
  )
}
