import * as TabsPrimitive from '@radix-ui/react-tabs'
import { styled } from '../create'
import { baseButtonCss } from './button'

const UITabs = styled(TabsPrimitive.Root, {
  display: 'flex',
  flexDirection: 'column',
})

const UIList = styled(TabsPrimitive.List, {
  flexShrink: 0,
  display: 'flex',
})

const UITrigger = styled(TabsPrimitive.Trigger, baseButtonCss, {
  position: 'initial',
  justifyContent: 'center',

  '&:focus': {
    position: 'relative',
  },
})

const UIContent = styled(TabsPrimitive.Content, {
  flexGrow: 1,
  outline: 'none',
})

// Exports
export const Tabs = UITabs
export const TabsList = UIList
export const TabsTrigger = UITrigger
export const TabsContent = UIContent
