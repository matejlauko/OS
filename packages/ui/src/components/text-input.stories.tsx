import { ComponentMeta, ComponentStory } from '@storybook/react'
import { BaseInput, TextInput as TextInputComponent, textInputVariants } from './text-input'

const VARIANT_OPTIONS = Object.keys(textInputVariants.variant) as ReadonlyArray<
  keyof typeof textInputVariants['variant']
>
const SIZE_OPTIONS = Object.keys(textInputVariants.size) as ReadonlyArray<
  keyof typeof textInputVariants['size']
>
const STATE_OPTIONS = Object.keys(textInputVariants.state) as ReadonlyArray<
  keyof typeof textInputVariants['state']
>

export default {
  title: 'ui/Atoms/Text Input',
  component: TextInputComponent,
  argTypes: {
    variant: {
      options: VARIANT_OPTIONS,
      control: 'select',
    },
    size: {
      options: SIZE_OPTIONS,
      control: 'select',
    },
    state: {
      options: STATE_OPTIONS,
      control: 'select',
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
    variant: 'outline',
    size: 'md',
    state: 'default',
    fullWidth: true,
  },
  decorators: [
    (Story) => (
      <div style={{ minWidth: 500 }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof TextInputComponent>

export const Base: ComponentStory<typeof BaseInput> = (args) => (
  <BaseInput {...args} css={args.css as any} />
)
Base.args = {
  placeholder: 'Input',
}

export const TextInput: ComponentStory<typeof TextInputComponent> = (args) => (
  <TextInputComponent {...args} css={args.css as any} />
)
TextInput.args = {
  placeholder: 'Input',
}
