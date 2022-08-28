import { createMemo } from '../utility/createMemo.js'
import { define } from '../utility/define.js'

import { toCssRules } from '../convert/toCssRules.js'
import { toHash } from '../convert/toHash.js'

const createGlobalCssFunctionMap = createMemo()

/** Returns a function that applies global styles. */
export const createGlobalCssFunction = (/** @type {object} */ config, /** @type {Sheet} */ sheet) =>
  createGlobalCssFunctionMap(config, () => (/** @type {Style[]} */ ...styles) => {
    const render = () => {
      for (let style of styles) {
        style = (typeof style === 'object' && style) || {}

        let uuid = toHash(style)

        if (!sheet.rules.global.cache.has(uuid)) {
          sheet.rules.global.cache.add(uuid)

          // support @import rules
          if ('@import' in style) {
            let importIndex = [].indexOf.call(sheet.sheet.cssRules, sheet.rules.themed.group) - 1

            // wrap import in quotes as a convenience
            for (let importValue of /** @type {string[]} */ ([].concat(style['@import']))) {
              importValue =
                importValue.includes('"') || importValue.includes("'")
                  ? importValue
                  : `"${importValue}"`

              sheet.sheet.insertRule(`@import ${importValue};`, importIndex++)
            }

            delete style['@import']
          }

          toCssRules(style, [], [], config, (cssText) => {
            sheet.rules.global.apply(cssText)
          })
        }
      }

      return ''
    }

    return define(render, {
      toString: render,
    })
  })

/** @typedef {{ [name: string]: number | string | void | Style }} Style */
/** @typedef {{ rules: { [name: string]: { apply(): void, cache: Set<string> } }, sheet: { insertRule(): number } }} Sheet */
