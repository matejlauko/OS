import * as React from 'react'
import { TooltipProvider } from './tooltip'

const UIProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <TooltipProvider>{children}</TooltipProvider>
}
export default UIProvider
