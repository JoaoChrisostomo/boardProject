import Link from "next/link";
import React from "react";
import styles from './styles.module.scss'

export function SupportButton(){
  return(
    <div className={styles.doanteContainer}>
      <Link href="/donate">
        <button>APOIAR</button>
      </Link>
    </div>
  )
}