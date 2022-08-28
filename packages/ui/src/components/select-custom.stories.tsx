import { ComponentMeta, ComponentStory } from '@storybook/react'
import {
  Select as SelectComponent,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
} from './select-custom'

export default {
  title: 'ui/Components/Select Custom',
  component: SelectComponent,
} as ComponentMeta<typeof SelectComponent>

export const Select: ComponentStory<typeof SelectComponent> = () => (
  <SelectComponent>
    <SelectTrigger>Select</SelectTrigger>

    <SelectContent>
      <SelectGroup>
        <SelectLabel>Fruits</SelectLabel>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="grapes">Grapes</SelectItem>
        <SelectItem value="pineapple">Pineapple</SelectItem>
      </SelectGroup>

      <SelectSeparator />

      <SelectGroup>
        <SelectLabel>Vegetables</SelectLabel>
        <SelectItem value="aubergine">Aubergine</SelectItem>
        <SelectItem value="broccoli">Broccoli</SelectItem>
        <SelectItem value="carrot" disabled>
          Carrot
        </SelectItem>
        <SelectItem value="courgette">Courgette</SelectItem>
        <SelectItem value="leek">leek</SelectItem>
      </SelectGroup>

      <SelectSeparator />

      <SelectGroup>
        <SelectLabel>Meat</SelectLabel>
        <SelectItem value="beef">Beef</SelectItem>
        <SelectItem value="chicken">Chicken</SelectItem>
        <SelectItem value="lamb">Lamb</SelectItem>
        <SelectItem value="pork">Pork</SelectItem>
      </SelectGroup>
    </SelectContent>
  </SelectComponent>
)
