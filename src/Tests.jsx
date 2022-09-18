import React from 'react'

async function apiRest(){


  const response = await fetch("http://localhost:8000/api/pet/")

  const data = await response.json()

  console.log( data[0].name);

}


apiRest()

export const Pet = () => {
  return (
    <div>apiRest()</div>
  )
}
 