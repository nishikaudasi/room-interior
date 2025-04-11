import React from 'react';
import Header from './components/Header';
function DashBoardLayout({children}) {
    return (
    <div><Header/>
    {children}</div>
  )
}

export default DashBoardLayout;