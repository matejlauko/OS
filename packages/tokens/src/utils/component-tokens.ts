import type * as Stitches from '@matejlauko/stitches-react/types'

export type ComponentTokens = Stitches.CSS | { [variant in string]: Stitches.CSS }

function flattenTokens(tokensObj: {}, path = ''): ComponentTokens {
  return Object.entries(tokensObj).reduce((acc, [key, value]) => {
    if (value && typeof value === 'object') {
      acc = { ...acc, ...flattenTokens(value, path ? `${path}_${key}` : key) }
    } else {
      acc[path ? `${path}_${key}` : key] = value as string | number
    }

    return acc
  }, {} as ComponentTokens)
}

export function compileComponentTokens(
  tokensObj: Record<string, ComponentTokens>
): Record<string, ComponentTokens> {
  return Object.fromEntries(
    Object.entries(tokensObj).map(([comp, tokens]) => [comp, flattenTokens(tokens)])
  )
}
