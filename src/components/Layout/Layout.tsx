import { Outlet } from 'react-router-dom'
import { Header } from '../Header/header'

export function Layout(){
  return(
    <>
      <Header/>
      <Outlet/>
    </>
  )
}