type ContainerProps = {
  children: React.ReactNode
}

export function Container({ children }: ContainerProps) {
  return (
    <div className='flex items-center justify-center mx-0 my-auto'>
      <div className='m-12'>{children}</div>
    </div>
  )
}
