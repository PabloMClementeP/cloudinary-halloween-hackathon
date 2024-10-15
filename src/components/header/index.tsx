import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div style={{width:'100%', height:'60px', backgroundColor:'coral', display:'flex', alignItems:'center', padding:'16px'}}>
        <Link href='/' >
         Home
        </Link>
    </div>
  )
}

export default Header