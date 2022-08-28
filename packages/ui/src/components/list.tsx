import * as React from 'react'
import { styled } from '../create'

export const UIList = styled('ul', {
  listStyle: 'none',
  padding: 0,
  margin: 0,
})

export const List = React.forwardRef<
  HTMLUListElement,
  React.PropsWithChildren<React.ComponentProps<typeof UIList>>
>(function List(props, forwardedRef) {
  return <UIList {...props} css={props.css as any} ref={forwardedRef} />
})

export const ListItem = React.forwardRef<
  HTMLLIElement,
  React.PropsWithChildren<React.LiHTMLAttributes<HTMLLIElement>>
>(function ListItem(props, forwardedRef) {
  return <li {...props} ref={forwardedRef} />
})
