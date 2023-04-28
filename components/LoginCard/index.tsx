import Input from "../Input"
import PrimaryButton from "../PrimaryButton"
import propsInterface from "./props-interface"

const LoginCard = (props: propsInterface) => {
  return (
    <div className="bg-gray-100 rounded-md shadow-lg px-8 pt-6 pb-8 mb-4">
      <form>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <Input id="email" type="email"></Input>
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
          <Input id="password" type="password"></Input>
        </div>
        <PrimaryButton buttonText="Login" />
      </form>
    </div>
  )
}

export default LoginCard