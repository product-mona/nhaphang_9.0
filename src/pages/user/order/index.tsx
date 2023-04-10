import { UserLayout } from '@/components/layouts'
import { NextPageWithLayout } from '@/types'
import React from 'react'

const UserOrder : NextPageWithLayout = () => {
  return (
    <div>
      <div>UserOrder page</div>
    </div>
  )
}

UserOrder.Layout = UserLayout;

export default UserOrder;


