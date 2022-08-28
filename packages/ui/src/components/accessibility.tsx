import * as VisuallyHiddenPrimitive from '@radix-ui/react-visually-hidden'
import { styled } from '../create'

export const visuallyHideStyles = {
  position: 'absolute',
  border: '0px',
  width: '1px',
  height: '1px',
  padding: '0px',
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0px, 0px, 0px, 0px)',
  whiteSpace: 'nowrap',
  overflowWrap: 'normal',
}

export const VisuallyHidden = styled(VisuallyHiddenPrimitive.Root)
