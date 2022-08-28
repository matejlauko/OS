import { ComponentMeta, ComponentStory } from '@storybook/react'
import { BellIcon, createIcon, iconVariants } from './icon'

export default {
  title: 'ui/Atoms/Icon',
  argTypes: {
    color: {
      options: Object.keys(iconVariants.color),
      control: 'select',
    },
    size: {
      options: Object.keys(iconVariants.size),
      control: 'select',
    },
    as: {
      control: false,
    },
    css: {
      control: false,
    },
  },
  args: {
    size: 'md',
  },
} as ComponentMeta<ReturnType<typeof createIcon>>

export const Icon: ComponentStory<ReturnType<typeof createIcon>> = (args) => (
  <BellIcon {...args} css={args.css as any} />
)
