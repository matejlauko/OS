import { ComponentMeta, ComponentStory } from '@storybook/react'
import { List as ListComponent, ListItem } from './list'

export default {
  title: 'ui/Atoms/List',
  component: ListComponent,
  argTypes: {
    as: {
      control: false,
    },
    css: {
      control: false,
    },
  },
} as ComponentMeta<typeof ListComponent>

export const List: ComponentStory<typeof ListComponent> = (args) => (
  <ListComponent {...args} css={args.css as any}>
    <ListItem>Item 1</ListItem>
    <ListItem>Item 2</ListItem>
    <ListItem>Item 3</ListItem>
  </ListComponent>
)
