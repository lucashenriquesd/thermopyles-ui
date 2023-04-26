import PrimaryButton from "../PrimaryButton"
import propsInterface from "./props-interface"

const LoginCard = (props: propsInterface) => {
  return (
    <div>
      <div className="flex justify-center items-center mb-4">
        <img src="fullLogo.svg" alt="Pawlicy Advisor Logo" />
      </div>
      <div className="bg-white rounded-lg shadow-lg px-8 pt-6 pb-8 mb-4">
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
            />
          </div>
          <PrimaryButton />
        </form>
      </div>
    </div>
  )
}

export default LoginCard