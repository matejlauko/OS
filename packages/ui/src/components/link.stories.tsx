import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Paragraph } from '.'
import { Link as LinkComponent, LinkBox, LinkOverlay, linkVariants } from './link'
import TextStory from './text.stories'

export default {
  title: 'ui/Atoms/Link',
  component: LinkComponent,
  argTypes: {
    ...TextStory.argTypes,
    tone: {
      options: Object.keys(linkVariants.tone),
      control: 'select',
    },
  },
  args: {
    tone: 'accent',
  },
} as ComponentMeta<typeof LinkComponent>

export const Link: ComponentStory<typeof LinkComponent> = (args) => <LinkComponent {...args} />

Link.args = {
  children: 'Link',
}

export const Overlay: ComponentStory<typeof LinkOverlay> = () => (
  <LinkBox as="article" css={{ p: '$4', borderWidth: 1, borderColor: '$border' }}>
    <LinkOverlay as={LinkComponent} href="/outer">
      Link
    </LinkOverlay>
    <Paragraph>
      Quidem accusamus ut aut amet et odio adipisci. Magnam nisi aut nostrum voluptate sed aut quos.
      Omnis aut et harum optio quidem.
    </Paragraph>
  </LinkBox>
)
