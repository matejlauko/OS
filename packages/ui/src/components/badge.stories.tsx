import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Alert as AlertComponent } from './alert'

export default {
  title: 'ui/Components/Alert',
  component: AlertComponent,
  argTypes: {
    variant: {
      options: ['success', 'warning', 'error', 'info'],
      control: 'radio',
    },
    as: {
      control: false,
    },
    css: {
      control: false,
    },
  },
} as ComponentMeta<typeof AlertComponent>

export const Alert: ComponentStory<typeof AlertComponent> = (args) => (
  <AlertComponent {...args} css={args.css as any} />
)

Alert.args = {
  children: 'Alert Text',
}
