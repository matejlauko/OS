import { ComponentMeta, ComponentStory } from '@storybook/react'
import { HoverCard as HoverCardComponent } from './hover-card'

export default {
  title: 'ui/Components/Hover Card',
  component: HoverCardComponent,
  argTypes: {
    asChild: {
      control: false,
    },
  },
} as ComponentMeta<typeof HoverCardComponent>

export const HoverCard: ComponentStory<typeof HoverCardComponent> = (args) => (
  <HoverCardComponent {...args} css={args.css as any}>
    <div>hover me</div>
  </HoverCardComponent>
)

HoverCard.args = {
  content: 'HoverCard',
}
