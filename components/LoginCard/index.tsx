import { useState } from "react"
import Input from "../Input"
import Button from "../Button"
import propsInterface from "./props-interface"

const LoginCard = (props: propsInterface) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [jwt, setJwt] = useState("")

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:3006/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      })

      const { jwt } = await res.json()
      localStorage.setItem("jwt", jwt)
      setJwt(jwt)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="bg-gray-100 rounded-md shadow-lg px-8 pt-6 pb-8 mb-4">
      <form>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <Input id="email" type="email" value={email} onChange={(e: any) => setEmail(e.target.value)} />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
          <Input id="password" type="password" value={password} onChange={(e: any) => setPassword(e.target.value)} />
        </div>
        <Button type="primary" buttonText="Login" onClick={handleSubmit} className="mb-6" />
        <Button type="secondary" buttonText="Reset Password" />
      </form>
    </div>
  )
}

export default LoginCard