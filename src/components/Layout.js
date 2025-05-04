import React from 'react'
import SideNav from './SideNav'

const Layout = ({children}) => {
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Side Navigation */}
      <SideNav
        option1={"Marketplace"}
        option2={"Cart"}
        option3={"Purchase History"}
        option4={"Favorite"}
        userType={"Buyer"}
      />

      {/* Main Content */}
      {children}
    </div>
  )
}

export default Layout
