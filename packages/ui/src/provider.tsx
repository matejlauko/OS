import * as React from 'react'
import { TooltipProvider } from './components'

export const UIProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <TooltipProvider>{children}</TooltipProvider>
}
