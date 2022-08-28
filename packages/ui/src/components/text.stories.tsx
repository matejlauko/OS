import { ComponentMeta, ComponentStory } from '@storybook/react'
import { textVariants } from '.'
import { HStack, VStack } from './layout'
import { Paragraph as ParagraphComponent, Text as TextComponent } from './text'

const TEXT_VARIANT_OPTIONS = Object.keys(textVariants.variant) as ReadonlyArray<
  keyof typeof textVariants['variant']
>
const TEXT_COLOR_OPTIONS = Object.keys(textVariants.color) as ReadonlyArray<
  keyof typeof textVariants['color']
>
const TEXT_SIZE_OPTIONS = Object.keys(textVariants.size) as ReadonlyArray<
  keyof typeof textVariants['size']
>

export default {
  title: 'ui/Atoms/Text',
  component: TextComponent,
  argTypes: {
    variant: {
      options: Object.keys(textVariants.variant),
      control: 'select',
    },
    color: {
      options: Object.keys(textVariants.color),
      control: 'select',
    },
    weight: {
      options: Object.keys(textVariants.weight),
      control: 'inline-radio',
    },
    caps: {
      control: 'boolean',
    },
    size: {
      options: Object.keys(textVariants.size),
      control: 'inline-radio',
    },
    align: {
      options: Object.keys(textVariants.align),
      control: 'inline-radio',
    },
    as: {
      control: false,
    },
    css: {
      control: false,
    },
  },
  args: {
    caps: false,
  },
} as ComponentMeta<typeof TextComponent>

export const Text: ComponentStory<typeof TextComponent> = (args) => (
  <TextComponent {...args} css={args.css as any} />
)

Text.args = {
  children: 'Text',
}

export const TextSink: ComponentStory<typeof TextComponent> = () => (
  <HStack>
    <VStack>
      {TEXT_VARIANT_OPTIONS.map((variant) => (
        <TextComponent variant={variant} key={variant}>
          variant {variant}
        </TextComponent>
      ))}
    </VStack>

    <VStack>
      {TEXT_COLOR_OPTIONS.map((color) => (
        <TextComponent color={color} key={color}>
          color {color}
        </TextComponent>
      ))}
    </VStack>

    <VStack>
      <TextComponent weight="normal">weight normal</TextComponent>
      <TextComponent weight="medium">weight medium</TextComponent>
    </VStack>

    <VStack>
      <TextComponent caps>caps</TextComponent>
    </VStack>

    <VStack>
      {TEXT_SIZE_OPTIONS.map((size) => (
        <TextComponent size={size} key={size}>
          size {size}
        </TextComponent>
      ))}
    </VStack>
  </HStack>
)

export const Paragraph: ComponentStory<typeof ParagraphComponent> = (args) => (
  <ParagraphComponent {...args} css={args.css as any} />
)

Paragraph.story = {
  argTypes: {
    readable: {
      caps: {
        control: 'boolean',
      },
    },
  },
  args: {
    children:
      'Cum dolorem possimus qui aut dolore est fugiat ut explicabo. Dolor odio ullam quia exercitationem dolore architecto harum. Rem illum eum. Qui et magni totam quisquam maiores. Qui aut vitae voluptas. Nihil quis quia qui doloribus non.',
    readable: false,
    caps: false,
  },
}
