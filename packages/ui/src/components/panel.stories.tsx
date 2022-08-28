import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Panel as PanelComponent } from './panel'

export default {
  title: 'ui/Components/Panel',
  component: PanelComponent,
  argTypes: {
    as: {
      control: false,
    },
    css: {
      control: false,
    },
  },
} as ComponentMeta<typeof PanelComponent>

export const Panel: ComponentStory<typeof PanelComponent> = (args) => (
  <PanelComponent {...args} css={args.css as any} />
)
