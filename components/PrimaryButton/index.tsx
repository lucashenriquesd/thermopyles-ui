import propsInterface from "./props-interface"

const PrimaryButton = (props: propsInterface) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
      type="button"
    >
      Login
    </button>
  )
}

export default PrimaryButton