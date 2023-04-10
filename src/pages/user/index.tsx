import { UserLayout } from '@/components/layouts'
import { NextPageWithLayout } from '@/types'
import router from 'next/router'
import React from 'react'

const User : NextPageWithLayout = () => {
  return (
    <div>
      <div>User page</div>
      <h1 onClick={() => router.push('/user/order')}>User order</h1>

    </div>
  )
}

User.Layout = UserLayout;


export default User;