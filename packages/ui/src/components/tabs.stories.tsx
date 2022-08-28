import { ComponentMeta, ComponentStory } from '@storybook/react'
import { styled } from '../create'
import * as TabsComponents from './tabs'

export default {
  title: 'ui/Components/Tabs',
  argTypes: {
    orientation: {
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof TabsComponents['Tabs']>

export const Unstyled: ComponentStory<typeof TabsComponents['Tabs']> = (args) => (
  <TabsComponents.Tabs {...args} css={args.css as any}>
    <TabsComponents.TabsList aria-label="Unstyled tabs example">
      <TabsComponents.TabsTrigger value="one">One</TabsComponents.TabsTrigger>
      <TabsComponents.TabsTrigger value="two">Two</TabsComponents.TabsTrigger>
    </TabsComponents.TabsList>

    <TabsComponents.TabsContent value="one">First content</TabsComponents.TabsContent>

    <TabsComponents.TabsContent value="two">Second content</TabsComponents.TabsContent>
  </TabsComponents.Tabs>
)

Unstyled.args = {
  defaultValue: 'one',
}

const UITabs = styled(TabsComponents.Tabs, {
  width: 300,
  boxShadow: '$4',
})

const UIList = styled(TabsComponents.TabsList, {
  borderBottom: '1px solid $colors$accentSolid',
})

const UITrigger = styled(TabsComponents.TabsTrigger, {
  flex: '1',
  p: '$4',
  height: 45,
  bg: '$white',
  fontWeight: '$bold',

  '&[aria-selected="false"]': {
    color: '$mutedText',
  },

  '&[aria-selected="true"]': {
    color: '$accentSolid',
    boxShadow: 'inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor',
  },
})

const UIContent = styled(TabsComponents.TabsContent, {
  p: '$4',
  bg: '$white',
})

export const Styled: ComponentStory<typeof TabsComponents['Tabs']> = (args) => (
  <UITabs {...args} css={args.css as any}>
    <UIList>
      <UITrigger value="one">One</UITrigger>
      <UITrigger value="two">Two</UITrigger>
      <UITrigger value="three">Three</UITrigger>
    </UIList>

    <UIContent value="one">First content</UIContent>

    <UIContent value="two">Second content</UIContent>

    <UIContent value="three">Third content</UIContent>
  </UITabs>
)

Styled.args = {
  defaultValue: 'one',
}
