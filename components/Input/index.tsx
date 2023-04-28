import propsInterface from "./props-interface"

const Input = (props: propsInterface) => {
  return (
    <input id={props.id} type={props.type}
      className={`
        appearance-none
        border
        rounded
        w-full
        py-2 px-3
        text-yellow-500
        leading-tight
        focus:outline-none
        focus:shadow-outline
      `}
      value={props.value}
      onChange={props.onChange}
    />
  )
}

export default Input