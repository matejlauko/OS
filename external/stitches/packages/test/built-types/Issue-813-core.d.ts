import * as Stitches from '@matejlauko/stitches-core'
export declare const config: {
    prefix: ''
    media: {}
    theme: {
      colors: {
        primary: string
      }
    }
    themeMap: import('@matejlauko/stitches-core/types/config').DefaultThemeMap
    utils: {
      bg: (value: Stitches.PropertyValue<'backgroundColor'>) => {
        color: {
          readonly [Stitches.$$PropertyValue]: 'backgroundColor'
        }
      }
      c: (value: Stitches.ScaleValue<'colors'>) => {
        color: {
          readonly [Stitches.$$ScaleValue]: 'colors'
        }
      }
    }
    sheet: import('@matejlauko/stitches-core/types/sheet').SheetGroup
  },
  css: <
    Composers extends (
      | string
      | import('@matejlauko/stitches-core/types/util').Function
      | {
          [name: string]: unknown
        }
    )[],
    CSS = import('@matejlauko/stitches-core/types/css-util').CSS<
      {},
      {
        colors: {
          primary: string
        }
      },
      import('@matejlauko/stitches-core/types/config').DefaultThemeMap,
      {
        bg: (value: Stitches.PropertyValue<'backgroundColor'>) => {
          color: {
            readonly [Stitches.$$PropertyValue]: 'backgroundColor'
          }
        }
        c: (value: Stitches.ScaleValue<'colors'>) => {
          color: {
            readonly [Stitches.$$ScaleValue]: 'colors'
          }
        }
      }
    >
  >(
    ...composers: {
      [K in keyof Composers]: string extends Composers[K]
        ? Composers[K]
        : Composers[K] extends string | import('@matejlauko/stitches-core/types/util').Function
        ? Composers[K]
        : import('@matejlauko/stitches-core/types/stitches').RemoveIndex<CSS> & {
            variants?:
              | {
                  [x: string]: {
                    [x: string]: CSS
                    [x: number]: CSS
                  }
                }
              | undefined
            compoundVariants?:
              | (('variants' extends keyof Composers[K]
                  ? Composers[K][keyof Composers[K] & 'variants'] extends infer T
                    ? {
                        [Name in keyof T]?:
                          | import('@matejlauko/stitches-core/types/util').String
                          | import('@matejlauko/stitches-core/types/util').Widen<
                              keyof Composers[K][keyof Composers[K] & 'variants'][Name]
                            >
                          | undefined
                      }
                    : never
                  : import('@matejlauko/stitches-core/types/util').WideObject) & {
                  css: CSS
                })[]
              | undefined
            defaultVariants?:
              | ('variants' extends keyof Composers[K]
                  ? Composers[K][keyof Composers[K] & 'variants'] extends infer T_1
                    ? {
                        [Name_1 in keyof T_1]?:
                          | import('@matejlauko/stitches-core/types/util').String
                          | import('@matejlauko/stitches-core/types/util').Widen<
                              keyof Composers[K][keyof Composers[K] & 'variants'][Name_1]
                            >
                          | undefined
                      }
                    : never
                  : import('@matejlauko/stitches-core/types/util').WideObject)
              | undefined
          } & CSS &
            (Composers[K] extends infer T_2
              ? {
                  [K2 in keyof T_2]: K2 extends 'compoundVariants' | 'defaultVariants' | 'variants'
                    ? unknown
                    : K2 extends keyof CSS
                    ? CSS[K2]
                    : unknown
                }
              : never)
    }
  ) => import('@matejlauko/stitches-core/types/styled-component').CssComponent<
    import('@matejlauko/stitches-core/types/styled-component').StyledComponentType<Composers>,
    import('@matejlauko/stitches-core/types/styled-component').StyledComponentProps<Composers>,
    {},
    CSS
  >
export declare const colorValue1: Stitches.PropertyValue<'backgroundColor', typeof config>
export declare const colorValue2: Stitches.PropertyValue<'backgroundColor', typeof config>
export declare const colorToken: Stitches.ScaleValue<'colors', typeof config>
export declare const box: import('@matejlauko/stitches-core/types/styled-component').CssComponent<
  never,
  {},
  {},
  import('@matejlauko/stitches-core/types/css-util').CSS<
    {},
    {
      colors: {
        primary: string
      }
    },
    import('@matejlauko/stitches-core/types/config').DefaultThemeMap,
    {
      bg: (value: Stitches.PropertyValue<'backgroundColor'>) => {
        color: {
          readonly [Stitches.$$PropertyValue]: 'backgroundColor'
        }
      }
      c: (value: Stitches.ScaleValue<'colors'>) => {
        color: {
          readonly [Stitches.$$ScaleValue]: 'colors'
        }
      }
    }
  >
>
