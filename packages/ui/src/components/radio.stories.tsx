import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Label } from '.'
import { HStack, VStack } from './layout'
import { RadioGroup as RadioGroupComponent, RadioGroupItem } from './radio'

export default {
  title: 'ui/Components/Radio',
  component: RadioGroupComponent,
  argTypes: {
    onValueChange: { action: 'changed' },
    css: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof RadioGroupComponent>

export const Radio: ComponentStory<typeof RadioGroupComponent> = (args) => (
  <RadioGroupComponent name="radio fruit" {...args}>
    <VStack gap="sm">
      <HStack>
        <RadioGroupItem value="apple" id="radio-apple" />
        <Label as="label" htmlFor="radio-apple">
          Apple
        </Label>
      </HStack>
      <HStack>
        <RadioGroupItem value="banana" id="radio-banana" />
        <Label htmlFor="radio-banana">Banana</Label>
      </HStack>
      <HStack>
        <RadioGroupItem value="blueberry" id="radio-blueberry" />
        <Label htmlFor="radio-blueberry">Blueberry</Label>
      </HStack>
      <HStack>
        <RadioGroupItem value="grapes" id="radio-grapes" />
        <Label htmlFor="radio-grapes">Grapes</Label>
      </HStack>
      <HStack>
        <RadioGroupItem value="pineapple" id="radio-pineapple" />
        <Label htmlFor="radio-pineapple">Pineapple</Label>
      </HStack>
      <HStack>
        <RadioGroupItem value="disabl" id="radio-disabl" disabled={true} />
        <Label htmlFor="radio-disabl">Disabled</Label>
      </HStack>
    </VStack>
  </RadioGroupComponent>
)
