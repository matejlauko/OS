import { ComponentMeta } from '@storybook/react'
import * as React from 'react'
import * as Tokens from '@matejlauko/tokens'
import { Color } from '@matejlauko/ui'

export default {
  title: 'ui/Tokens',
  parameters: {
    layout: 'padded',
  },
} as ComponentMeta<React.ComponentType<React.PropsWithChildren<unknown>>>

const baseColors = Object.keys(Tokens.baseLightColors) as Color[]
const lightColors = Object.keys(Tokens.lightColors) as Color[]
const semanticColors = Object.keys(Tokens.semanticColors) as Color[]

const errorColors = Object.keys(Tokens.lightThemeTokens.colors).filter(
  (col) => col.includes('error') || col.includes('destroy')
) as Color[]

const successColors = Object.keys(Tokens.lightThemeTokens.colors).filter(
  (col) => col.includes('success') || col.includes('go')
) as Color[]

export const Colors = () => (
  <HStack>
    <div>
      <h2>Base</h2>
      <VStack>
        {baseColors.map((col) => (
          <UIColor key={col} color={col} />
        ))}
      </VStack>
    </div>

    <div>
      <h2>Light</h2>
      <VStack>
        {lightColors.map((col) => (
          <UIColor key={col} color={col} />
        ))}
      </VStack>
    </div>

    <div>
      <h2>Semantic</h2>
      <VStack>
        {semanticColors.map((col) => (
          <UIColor key={col} color={col} />
        ))}
      </VStack>
    </div>

    <div>
      <h2>Error</h2>
      <VStack>
        {errorColors.map((col) => (
          <UIColor key={col} color={col} />
        ))}
      </VStack>
    </div>

    <div>
      <h2>Success</h2>
      <VStack>
        {successColors.map((col) => (
          <UIColor key={col} color={col} />
        ))}
      </VStack>
    </div>
  </HStack>
)

const UIColor = ({ color }: { color: Color }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <div
      style={{
        background: `${Tokens.lightThemeTokens.colors[color]}`,
        width: '40px',
        height: '40px',
        borderRadius: '6px',
      }}
    />
    {color}
  </div>
)

const HStack: React.FC<React.PropsWithChildren> = (props) => (
  <div style={{ display: 'flex', gap: '60px' }} {...props} />
)
const VStack: React.FC<React.PropsWithChildren> = (props) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }} {...props} />
)
