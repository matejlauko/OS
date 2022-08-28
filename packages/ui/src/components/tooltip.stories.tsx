import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Tooltip as TooltipComponent } from './tooltip'

export default {
  title: 'ui/Components/Tooltip',
  component: TooltipComponent,
  argTypes: {
    open: {
      control: 'boolean',
    },
    defaultOpen: {
      control: 'boolean',
    },
    asChild: {
      control: false,
    },
  },
} as ComponentMeta<typeof TooltipComponent>

export const Tooltip: ComponentStory<typeof TooltipComponent> = (args) => (
  <TooltipComponent {...args} css={args.css as any}>
    <div>hover me</div>
  </TooltipComponent>
)

Tooltip.args = {
  content: 'Tooltip',
}
