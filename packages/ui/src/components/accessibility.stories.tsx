import { ComponentMeta, ComponentStory } from '@storybook/react'
import * as React from 'react'
import { VisuallyHidden as VisuallyHiddenComponent } from './accessibility'

export default {
  title: 'ui/Helpers/Accessibility',
  as: {
    control: false,
  },
  css: {
    control: false,
  },
} as ComponentMeta<React.ComponentType<React.PropsWithChildren<unknown>>>

export const VisuallyHidden: ComponentStory<typeof VisuallyHiddenComponent> = (args) => (
  <VisuallyHiddenComponent {...args} css={args.css as any} />
)

VisuallyHidden.args = {
  children: 'Hidden Text',
}
