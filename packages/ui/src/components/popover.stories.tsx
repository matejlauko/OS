import { ComponentMeta, ComponentStory } from '@storybook/react'
import {
  Popover as PopoverComponent,
  PopoverContent as PopoverContentComponent,
  PopoverTrigger,
} from './popover'

export default {
  title: 'ui/Components/Popover',
  component: PopoverComponent,
  argTypes: {
    defaultOpen: {
      control: 'boolean',
    },
  },
  args: {
    withClose: true,
  },
} as ComponentMeta<typeof PopoverComponent>

export const Popover: ComponentStory<typeof PopoverComponent> = (args) => (
  <PopoverComponent {...args}>
    <PopoverTrigger asChild>
      <button>Open Popover</button>
    </PopoverTrigger>

    <PopoverContentComponent>fds fds fsd fsad fasd fasf sa f</PopoverContentComponent>
  </PopoverComponent>
)
