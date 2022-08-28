import { ComponentMeta, ComponentStory } from '@storybook/react'
import {
  Dialog as DialogComponent,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from './dialog'

export default {
  title: 'ui/Components/Dialog',
  component: DialogComponent,
} as ComponentMeta<typeof DialogComponent>

export const Dialog: ComponentStory<typeof DialogComponent> = () => (
  <DialogComponent>
    <DialogTrigger>
      <button>Open Dialog</button>
    </DialogTrigger>

    <DialogContent>
      <DialogTitle>Dialog</DialogTitle>
      <DialogDescription>Descr</DialogDescription>
    </DialogContent>
  </DialogComponent>
)
