import { ComponentMeta, ComponentStory } from '@storybook/react'
import { BellIcon } from './icon'
import { IconButton as IconButtonComponent, iconButtonVariants } from './icon-button'
import { HStack, VStack } from './layout'

const BUTTON_VARIANT_OPTIONS = Object.keys(iconButtonVariants.variant) as ReadonlyArray<
  keyof typeof iconButtonVariants['variant']
>
const BUTTON_SIZE_OPTIONS = Object.keys(iconButtonVariants.size) as ReadonlyArray<
  keyof typeof iconButtonVariants['size']
>

export default {
  title: 'ui/Atoms/IconButton',
  component: IconButtonComponent,
  argTypes: {
    variant: {
      options: BUTTON_VARIANT_OPTIONS,
      control: 'select',
    },
    size: {
      options: BUTTON_SIZE_OPTIONS,
      control: 'select',
    },
    as: {
      control: false,
    },
    css: {
      control: false,
    },
    disabled: {
      control: 'boolean',
    },
    active: {
      control: 'boolean',
    },
  },
  args: {
    variant: 'secondary',
    size: 'md',
    disabled: false,
    active: false,
  },
} as ComponentMeta<typeof IconButtonComponent>

export const IconButton: ComponentStory<typeof IconButtonComponent> = (args) => (
  <IconButtonComponent {...args} css={args.css as any}>
    <BellIcon />
  </IconButtonComponent>
)

export const IconButtonSink: ComponentStory<typeof IconButtonComponent> = () => (
  <HStack>
    {BUTTON_VARIANT_OPTIONS.map((variant) => (
      <VStack key={variant}>
        <IconButtonComponent variant={variant}>
          <BellIcon />
        </IconButtonComponent>
      </VStack>
    ))}
    {BUTTON_SIZE_OPTIONS.map((size) => (
      <VStack key={size}>
        <IconButtonComponent size={size}>
          <BellIcon />
        </IconButtonComponent>
      </VStack>
    ))}
  </HStack>
)
