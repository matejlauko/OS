import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Tooltip } from '.'
import { BaseButton, Button, buttonVariants as buttonVariants } from './button'
import { SourceIcon } from './icon'
import { HStack, VStack } from './layout'

const VARIANT_OPTIONS = Object.keys(buttonVariants.variant) as ReadonlyArray<
  keyof typeof buttonVariants['variant']
>
const TONE_OPTIONS = Object.keys(buttonVariants.tone) as ReadonlyArray<
  keyof typeof buttonVariants['tone']
>
const SIZE_OPTIONS = Object.keys(buttonVariants.size) as ReadonlyArray<
  keyof typeof buttonVariants['size']
>

export default {
  title: 'ui/Atoms/Button',
  component: Button,
  argTypes: {
    variant: {
      options: VARIANT_OPTIONS,
      control: 'select',
    },
    tone: {
      options: TONE_OPTIONS,
      control: 'select',
    },
    size: {
      options: SIZE_OPTIONS,
      control: 'select',
    },
    disabled: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
    as: {
      control: false,
    },
    css: {
      control: false,
    },
  },
  args: {
    variant: 'secondary',
    tone: 'neutral',
    size: 'md',
  },
} as ComponentMeta<typeof Button>

export const Base: ComponentStory<typeof BaseButton> = (args) => (
  <BaseButton {...args} css={args.css as any} />
)
Base.args = {
  children: 'Button',
}

export const Basic: ComponentStory<typeof Button> = (args) => (
  <Button {...args} css={args.css as any} />
)
Basic.args = {
  children: 'Button',
}

export const IconBefore: ComponentStory<typeof Button> = (args) => (
  <Button {...args} iconBefore={<SourceIcon />} css={args.css as any} />
)
IconBefore.args = {
  children: 'Button',
}

export const IconAfter: ComponentStory<typeof Button> = (args) => (
  <Button {...args} iconAfter={<SourceIcon />} css={args.css as any} />
)
IconAfter.args = {
  children: 'Button',
}
export const WTooltip: ComponentStory<typeof Button> = (args) => (
  <Tooltip content="Tooltip">
    <Button {...args} css={args.css as any} />
  </Tooltip>
)
WTooltip.args = {
  children: 'Button',
}

export const ButtonSink: ComponentStory<typeof Button> = () => (
  <VStack>
    <HStack>
      {VARIANT_OPTIONS.map((variant) => (
        <VStack key={variant}>
          {TONE_OPTIONS.map((tone) => (
            <Button size="sm" key={tone} variant={variant} tone={tone}>
              {variant} {tone}
            </Button>
          ))}
        </VStack>
      ))}
    </HStack>

    <HStack>
      {VARIANT_OPTIONS.map((variant) => (
        <VStack key={variant}>
          {TONE_OPTIONS.map((tone) => (
            <Button key={tone} variant={variant} tone={tone}>
              {variant} {tone}
            </Button>
          ))}
        </VStack>
      ))}
    </HStack>

    <HStack>
      {VARIANT_OPTIONS.map((variant) => (
        <VStack key={variant}>
          {TONE_OPTIONS.map((tone) => (
            <Button size="lg" key={tone} variant={variant} tone={tone}>
              {variant} {tone}
            </Button>
          ))}
        </VStack>
      ))}
    </HStack>

    <HStack>
      {VARIANT_OPTIONS.map((variant) => (
        <VStack key={variant}>
          {TONE_OPTIONS.map((tone) => (
            <Button iconBefore={<SourceIcon />} size="sm" key={tone} variant={variant} tone={tone}>
              {variant} {tone}
            </Button>
          ))}
        </VStack>
      ))}
    </HStack>

    <HStack>
      {VARIANT_OPTIONS.map((variant) => (
        <VStack key={variant}>
          {TONE_OPTIONS.map((tone) => (
            <Button iconBefore={<SourceIcon />} key={tone} variant={variant} tone={tone}>
              {variant} {tone}
            </Button>
          ))}
        </VStack>
      ))}
    </HStack>

    <HStack>
      {VARIANT_OPTIONS.map((variant) => (
        <VStack key={variant}>
          {TONE_OPTIONS.map((tone) => (
            <Button iconBefore={<SourceIcon />} size="lg" key={tone} variant={variant} tone={tone}>
              {variant} {tone}
            </Button>
          ))}
        </VStack>
      ))}
    </HStack>
  </VStack>
)
