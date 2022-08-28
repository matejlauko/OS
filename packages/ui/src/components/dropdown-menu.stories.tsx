import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button } from './button'
import {
  DropdownMenu as DropdownMenuComponent,
  DropdownMenuGroup,
  DropdownMenuIcon,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from './dropdown-menu'
import { CheckIcon } from './icon'

export default {
  title: 'ui/Components/Dropdown Menu',
  component: DropdownMenuComponent,
  argTypes: {
    onOpenChange: { action: 'onOpenChanged' },
    hasArrow: { control: 'boolean' },
    side: {
      control: 'inline-radio',
      options: ['bottom', 'left', 'right', 'top'],
      defaultValue: 'top',
    },
    sideOffset: { control: 'number', defaultValue: 2 },
    align: {
      control: 'inline-radio',
      options: ['center', 'end', 'start'],
      defaultValue: 'center',
    },
    alignOffset: { control: 'number' },
  },
} as ComponentMeta<typeof DropdownMenuComponent>

const Template: ComponentStory<typeof DropdownMenuComponent> = (args) => (
  <DropdownMenuComponent {...args} css={args.css as any}>
    <Button>Click for menu</Button>
  </DropdownMenuComponent>
)

export const Simple = Template.bind({})
Simple.args = {
  content: (
    <>
      <DropdownMenuItem onSelect={() => alert('Item 1 selected')}>Item</DropdownMenuItem>
      <DropdownMenuItem onSelect={() => alert('Item 2 selected')}>Item 2</DropdownMenuItem>
    </>
  ),
}

export const Grouped = Template.bind({})
Grouped.args = {
  content: (
    <>
      <DropdownMenuGroup>
        <DropdownMenuItem onSelect={() => alert('Item 1 selected')}>Item</DropdownMenuItem>
        <DropdownMenuItem onSelect={() => alert('Item 2 selected')} disabled>
          Item 2
        </DropdownMenuItem>
      </DropdownMenuGroup>

      <DropdownMenuSeparator />

      <DropdownMenuGroup>
        <DropdownMenuLabel>Label</DropdownMenuLabel>
        <DropdownMenuItem onSelect={() => alert('Item 1 selected')}>Item</DropdownMenuItem>
        <DropdownMenuItem onSelect={() => alert('Item 2 selected')}>Item 2</DropdownMenuItem>
      </DropdownMenuGroup>
    </>
  ),
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  content: (
    <>
      <DropdownMenuItem onSelect={() => alert('Item 1 selected')}>Item</DropdownMenuItem>
      <DropdownMenuItem onSelect={() => alert('Item 2 selected')}>Item 2</DropdownMenuItem>
    </>
  ),
}

export const Icons = Template.bind({})
Icons.args = {
  content: (
    <>
      <DropdownMenuItem onSelect={() => alert('Item 1 selected')}>
        <DropdownMenuIcon>
          <CheckIcon />
        </DropdownMenuIcon>
        Item
      </DropdownMenuItem>

      <DropdownMenuItem onSelect={() => alert('Item 2 selected')} disabled>
        <DropdownMenuIcon>
          <CheckIcon />
        </DropdownMenuIcon>
        Item 2
      </DropdownMenuItem>
    </>
  ),
}
