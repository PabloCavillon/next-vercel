import { FC, ReactNode } from "react"

interface Props {
  children: ReactNode;
}

export const DarkLayout: FC<Props> = ({children}) => {
  return (
    <div style={{
        backgroundColor: 'rgba(255,255,255,0.3)',
        padding:'10px',
        borderRadius: '5px',
    }}>
        <h3>Dark-Layout</h3>
        <div>
            {children}
        </div>
    </div>
  )
}
