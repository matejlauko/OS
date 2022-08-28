import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Switch as SwitchComponent } from './switch'

export default {
  title: 'ui/Components/Switch',
  component: SwitchComponent,
  argTypes: {
    onCheckedChange: {
      control: 'action',
    },
    disabled: {
      control: 'boolean',
    },
    asChild: {
      control: false,
    },
    as: {
      control: false,
    },
    css: {
      control: false,
    },
  },
} as ComponentMeta<typeof SwitchComponent>

export const Switch: ComponentStory<typeof SwitchComponent> = (args) => (
  <SwitchComponent {...args} />
)
