import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Select as SelectComponent } from './select'

export default {
  title: 'ui/Components/Select',
  component: SelectComponent,
  argTypes: {
    onValueChange: { action: 'changed' },
    css: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof SelectComponent>

export const Select: ComponentStory<typeof SelectComponent> = (args) => (
  <SelectComponent aria-label="select fruit" {...args}>
    <option value="" selected={true} disabled={true}>
      Select fruit
    </option>
    <option value="apple">Apple</option>
    <option value="banana">Banana</option>
    <option value="blueberry">Blueberry</option>
    <option value="grapes">Grapes</option>
    <option value="pineapple">Pineapple</option>
  </SelectComponent>
)
