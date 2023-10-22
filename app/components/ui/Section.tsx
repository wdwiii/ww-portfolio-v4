import { ContainerProps } from '@mui/material'

export default function Section({
  children,
  sx,
  ...props
}: Omit<ContainerProps, 'maxWidth' | 'bgColor'>) {
  return <section>{children}</section>
}
