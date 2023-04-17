import React from 'react' 
import Server2Client from '@/components/sercerSide/Server2Client'
import Contact from './Contact'

const index = () => {
  return (
    <Contact myProps={"value"}>
        <Server2Client/>
    </Contact>
  )
}

export default index