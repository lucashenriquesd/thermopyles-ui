import propsInterface from "./props-interface"

const Button = (props: propsInterface) => {
  const defaultClassName = `
    font-bold
    py-2
    px-4
    rounded
    focus:outline-none
    focus:shadow-outline
    w-full
  `
  let textAndBackgroundDecoration = `
    bg-gray-500
    hover:bg-gray-700
    text-yellow-300
  `
  if (props.type == "primary") {
    textAndBackgroundDecoration = `
      bg-red-500
      hover:bg-red-700
      text-yellow-300
    `
  } else if(props.type == "secondary") {
    textAndBackgroundDecoration = `
      bg-yellow-500
      hover:bg-yellow-700
      text-yellow-300
    `
  }

  const classNames = `${defaultClassName} ${textAndBackgroundDecoration} ${props.className}`

  return (
    <button
      className={classNames}
      type="button"
      onClick={props.onClick}
    >
      {props.buttonText}
    </button>
  )
}

export default Button