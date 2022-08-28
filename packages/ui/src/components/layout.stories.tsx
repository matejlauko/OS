import { ComponentMeta, ComponentStory } from '@storybook/react'
import * as React from 'react'
import {
  Box as BoxComponent,
  Center as CenterComponent,
  Container as ContainerComponent,
  HStack as HStackComponent,
  VStack as VStackComponent,
} from './layout'

export default {
  title: 'ui/Atoms/Layout',
  argTypes: {
    as: {
      control: false,
    },
    css: {
      control: false,
    },
  },
} as ComponentMeta<React.ComponentType<React.PropsWithChildren<unknown>>>

export const Box: ComponentStory<typeof BoxComponent> = () => (
  <BoxComponent css={{ p: '$8', bg: '$hiContrast' }} />
)

export const Center: ComponentStory<typeof CenterComponent> = (args) => (
  <CenterComponent {...args} css={args.css as any}>
    <BoxComponent css={{ p: '$4', bg: '$hiContrast' }} />
    <p>
      Mollitia nobis maxime suscipit dolorem tempore.
      <br />
      Cumque perferendis quibusdam nihil quae voluptatum similique.
      <br />
      Et reiciendis dolorem dolorem assumenda totam quidem dolorum sunt. Aliquid
    </p>
    <BoxComponent css={{ p: '$4', bg: '$errorBorder' }} />
  </CenterComponent>
)
Center.argTypes = {
  text: { control: 'boolean' },
}

export const Container: ComponentStory<typeof ContainerComponent> = (args) => (
  <ContainerComponent {...args} css={args.css as any}>
    Mollitia nobis maxime suscipit dolorem tempore. Cumque perferendis quibusdam nihil quae
    voluptatum similique. Et reiciendis dolorem dolorem assumenda totam quidem dolorum sunt. Aliquid
    ab sed excepturi dolores ratione. Ipsam doloribus aut. Non fuga aut est. Dicta voluptates nisi
    explicabo nemo ut deleniti impedit aut. Et ea repudiandae mollitia ut quia perferendis dolore.
    Debitis vel tenetur harum natus atque omnis. Non natus et magni culpa repellendus est veritatis.
    Itaque dignissimos sed fugit enim sit consequatur. Neque quia rem quos mollitia et expedita aut
    officia. Quis deleniti soluta quia amet. Itaque impedit pariatur numquam est molestiae suscipit
    hic. Nulla soluta voluptatem. Enim quos veniam. Est adipisci magnam architecto vero.
  </ContainerComponent>
)
Container.argTypes = {}

export const HStack: ComponentStory<typeof HStackComponent> = (args) => (
  <HStackComponent {...args} css={args.css as any}>
    <BoxComponent css={{ p: '$4', bg: '$hiContrast' }} />
    <BoxComponent css={{ p: '$4', bg: '$errorBorder' }} />
    <BoxComponent css={{ p: '$4', bg: '$hiContrast' }} />
  </HStackComponent>
)
HStack.argTypes = {
  gap: { options: ['xs', 'sm', 'md', 'lg'], control: 'radio' },
}

export const VStack: ComponentStory<typeof VStackComponent> = (args) => (
  <VStackComponent {...args} css={args.css as any}>
    <BoxComponent css={{ p: '$4', bg: '$hiContrast' }} />
    <BoxComponent css={{ p: '$4', bg: '$errorBorder' }} />
    <BoxComponent css={{ p: '$4', bg: '$hiContrast' }} />
  </VStackComponent>
)
VStack.argTypes = {
  gap: { options: ['xs', 'sm', 'md', 'lg'], control: 'radio' },
}
