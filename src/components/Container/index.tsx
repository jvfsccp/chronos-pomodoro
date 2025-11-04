type ContainerProps = {
  children: React.ReactNode
}

export function Container({ children }: ContainerProps) {
  return (
    <div className='max-w-8xl mx-0 my-auto'>
      <div className='m-12'>{children}</div>
    </div>
  )
}
