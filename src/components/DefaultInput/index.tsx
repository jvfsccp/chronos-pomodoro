type DefaultInputProps = {
  id: string
  labelText: string
} & React.ComponentProps<'input'>

export function DefaultInput({
  id,
  type,
  labelText,
  ...rest
}: DefaultInputProps) {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input
        className='bg-transparent w-md border-2 border-transparent outline-none text-center p-4  border-b-2 border-b-primary text-default transition-all ease-in-out duration-100 placeholder:text-gray-500 placeholder:text-xl placeholder:italic focus:border-2 focus:border-primary focus:outline-primary focus:rounded-xl disabled:border-b-2 disabled:border-b-disabled disabled:text-muted'
        type={type}
        id={id}
        {...rest}
      />
    </>
  )
}
