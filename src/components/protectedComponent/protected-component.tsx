'use client'

import { AuthContext } from '@/contexts/authContext'
import { redirect } from 'next/navigation'
import React, { ReactNode, useContext,  } from 'react'

type ChilProps = {
    children: ReactNode
}

function ProtectedComponent({children}: ChilProps) {
    const auth = useContext(AuthContext)

    if(!auth?.isAuthenticate) redirect('/login');
        
    // useEffect(() => {
    //     if(!auth?.isAuthenticate) redirect('/')

    // }, [auth?.isAuthenticate]) 

    if(!auth?.isAuthenticate) {
        return <div>Loading...</div>
    }

  return <>{children}</>
  
}

export default ProtectedComponent
