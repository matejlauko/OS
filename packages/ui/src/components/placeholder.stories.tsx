import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Placeholder as PlaceholderComponent } from './placeholder'

export default {
  title: 'ui/Components/Placeholder',
  component: PlaceholderComponent,
  argTypes: {
    as: {
      control: false,
    },
    css: {
      control: false,
    },
  },
} as ComponentMeta<typeof PlaceholderComponent>

export const Placeholder: ComponentStory<typeof PlaceholderComponent> = (args) => (
  <PlaceholderComponent {...args} css={args.css as any} />
)

Placeholder.args = {
  width: 200,
  height: 40,
}
