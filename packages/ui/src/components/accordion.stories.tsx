import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AccordionChevron } from '.'
import { styled } from '../create'
import * as AccordionComponents from './accordion'
import { Box } from './layout'

export default {
  title: 'ui/Components/Accordion',
  argTypes: {
    type: {
      options: ['single', 'multiple'],
      control: 'inline-radio',
    },
  },
} as ComponentMeta<typeof AccordionComponents['Accordion']>

export const Unstyled: ComponentStory<typeof AccordionComponents['Accordion']> = (args) => (
  <AccordionComponents.Accordion {...args} css={args.css as any}>
    <AccordionComponents.AccordionItem value="1">
      <AccordionComponents.AccordionTrigger>One</AccordionComponents.AccordionTrigger>
      <AccordionComponents.AccordionContent>First content</AccordionComponents.AccordionContent>
    </AccordionComponents.AccordionItem>
  </AccordionComponents.Accordion>
)

Unstyled.args = {
  type: 'single',
}

const UIAccordion = styled(AccordionComponents.Accordion, {
  borderRadius: 6,
  width: 300,
  boxShadow: '$4',
})
const UIItem = styled(AccordionComponents.AccordionItem, {
  '&:first-child': {
    marginTop: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },

  '&:last-child': {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },

  '&:focus-within': {
    boxShadow: `0 0 0 2px $colors$focus`,
  },
})
const Trigger = styled(AccordionComponents.AccordionTrigger, {
  bg: '$uibg',
  justifyContent: 'space-between',
  padding: '0 20px',
  height: 45,
  fontSize: '$5',
  boxShadow: `0 1px 0 $colors$line`,
  '&:hover': { bg: '$uibg2' },
})
const Content = styled(AccordionComponents.AccordionContent, {
  borderBottom: `1px solid $colors$line`,
  bg: '$uibg3',
})

export const Styled: ComponentStory<typeof AccordionComponents['Accordion']> = (args) => (
  <UIAccordion {...args} css={args.css as any}>
    <UIItem value="1">
      <Trigger>
        One
        <AccordionChevron />
      </Trigger>
      <Content>
        <Box css={{ p: '$4' }}>First content</Box>
      </Content>
    </UIItem>

    <UIItem value="2">
      <Trigger>
        Tow
        <AccordionChevron />
      </Trigger>
      <Content>
        <Box css={{ p: '$4' }}>Second content</Box>
      </Content>
    </UIItem>

    <UIItem value="3">
      <Trigger>
        Three
        <AccordionChevron />
      </Trigger>
      <Content>
        <Box css={{ p: '$4' }}>Third content</Box>
      </Content>
    </UIItem>
  </UIAccordion>
)

Styled.args = {
  type: 'multiple',
}
