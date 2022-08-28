export type RuleGroup = CSSRule

export type RuleGroupNames =
  | 'themed'
  | 'global'
  | 'styled'
  | 'onevar'
  | 'resonevar'
  | 'allvar'
  | 'inline'

export type SheetGroup = {
  sheet: DocumentOrShadowRoot
  rules: CSSRuleList
  reset: () => void
  toString: () => string
}
