import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Heading as HeadingComponent, headingVariants } from './heading'
import TextStory from './text.stories'

export default {
  title: 'ui/Atoms/Text',
  component: HeadingComponent,
  argTypes: {
    ...TextStory.argTypes,
    variant: {
      options: Object.keys(headingVariants.variant),
      control: 'select',
    },
  },
} as ComponentMeta<typeof HeadingComponent>

export const Heading: ComponentStory<typeof HeadingComponent> = (args) => (
  <HeadingComponent {...args} css={args.css as any} />
)

Heading.args = {
  children: 'Heading',
}
