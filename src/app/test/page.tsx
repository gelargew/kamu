'use client'

const login = async () => {
  const res = await fetch('https://techtest.youapp.ai/api/login', {
    method: 'POST',
    body: JSON.stringify({
      "email": "essentials@mail.com",
      "username": "essentials",
      "password": "password"
    }),
    headers: {
      'Content-Type': 'application/json',
    }
  })
  const data = await res.json()
  console.log(data)
  return data
}

export default function Page() {


  return <main>
    <h1 onClick={login} >TEST</h1>
  </main>
}