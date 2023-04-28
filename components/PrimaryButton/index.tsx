import propsInterface from "./props-interface"

const PrimaryButton = (props: propsInterface) => {
  const defaultClassName = `
    bg-red-500
    hover:bg-red-700
    text-yellow-300
    font-bold
    py-2
    px-4
    rounded
    focus:outline-none
    focus:shadow-outline
    w-full
  `

  return (
    <button
      className={defaultClassName}
      type="button"
      onClick={props.onClick}
    >
      {props.buttonText}
    </button>
  )
}

export default PrimaryButton