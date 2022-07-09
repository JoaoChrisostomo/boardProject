import React from 'react'
import Head from 'next/head'
import styles from './styles.module.scss'
import { SupportButton } from '../../components/SupportButton'

import { FiPlus, FiCalendar, FiEdit2, FiTrash, FiClock } from 'react-icons/fi'

export default function Board(){
  return(
    <>
    <Head>
      <title>Minhas tarefas - Board</title>
    </Head>
    <main className={styles.container}>
      <form>
        <input 
          type="text"
          placeholder=""
        />
        <button type="submit">
          <FiPlus size={25} color="#17181f"/>
        </button>
      </form>

      <h1>Você tem 2 tarefas</h1>

      <section>
        <article className={styles.taskList}>
          <p>Aprender criar projetos usando NextJS e aplicando firebase com backend.</p>
          <div className={styles.actions}>
            <div>
              <div>
                <FiCalendar size={20} color="#FFb800" />
                <time>17 Julho 2021</time>
              </div>
              <button>
                <FiEdit2 size={20} color="#FFF" />
                <span>Editar</span>
              </button>
            </div>  
            <button>
              <FiTrash size={20} color="#FF3636" />
              <span>Excluir</span>
            </button>
          </div>
        </article>
      </section>
    </main>

    <div className={styles.vipContainer}>
      <h3>Obrigado por apoiar esse projeto.</h3>
      <FiClock size={20} color="#FFF"/>
      <time>
        Última doação foi a 3 dias.
      </time>
    </div>

    <SupportButton />
    </>
  )
}