import React, { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { DataTable } from '../components/DataTable'
import { AddForm } from '../components/AddForm'
const Home: NextPage = () => {
  const [edit, setEdit] = useState<null | number>(null)

  const onEdit = (id: number) => {
    setEdit(id)
  }

  return (
    <div className="container justify-content-center align-items-center">
      <Head>
        <title>Case 2</title>
        <meta name="description" content="case2" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <AddForm edit={edit} editDone={() => setEdit(null)} />
        <DataTable onEdit={onEdit} />
      </main>
    </div>
  )
}

export default Home
