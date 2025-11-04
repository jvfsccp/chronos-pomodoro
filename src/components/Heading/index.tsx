type HeadingProps = {
  children: React.ReactNode
}

export function Heading({ children }: HeadingProps) {
  return (
    <h1 className='flex justify-center items-center gap-6 font-bold'>
      {children}
    </h1>
  )
}
