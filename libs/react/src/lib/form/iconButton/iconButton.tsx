import { ReactNode, MouseEvent } from 'react'
import { ButtonType } from '@sebgroup/extract'

interface IconButtonInterface {
  children: ReactNode
  type?: ButtonType
  onClick: (event: MouseEvent) => void
  'aria-expanded'?: boolean
  'aria-controls'?: string
}

const IconButton = ({ children, onClick, ...props }: IconButtonInterface) => {
  return (
    <button
      className="icon"
      onClick={onClick}
      aria-controls={props['aria-controls']}
      aria-expanded={props['aria-expanded']}
      type={props.type ?? 'button'}
    >
      {children}
    </button>
  )
}

export default IconButton
