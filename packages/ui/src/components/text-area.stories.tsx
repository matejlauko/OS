import { ComponentMeta, ComponentStory } from '@storybook/react'
import { TextArea as TextAreaComponent } from './text-area'

export default {
  title: 'ui/Atoms/Field',
  component: TextAreaComponent,
  argTypes: {
    size: {
      options: ['md', 'xl'],
      control: 'inline-radio',
      defaultValue: 'md',
    },
    as: {
      control: false,
    },
    css: {
      control: false,
    },
  },
} as ComponentMeta<typeof TextAreaComponent>

export const TextArea: ComponentStory<typeof TextAreaComponent> = (args) => (
  <TextAreaComponent {...args} css={args.css as any} />
)
