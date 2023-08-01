import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'

export default function Main() {
  return (
    <>
        <Header/>
        <div className="container mt-3">
            <Outlet/>
        </div>
    </>
  )
}
