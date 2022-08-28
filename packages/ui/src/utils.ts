import * as Stitches from '@matejlauko/stitches-react'

export const utils = {
  m: (value: Stitches.PropertyValue<'margin'>) => ({
    margin: value,
  }),
  mt: (value: Stitches.PropertyValue<'margin'>) => ({
    marginTop: value,
  }),
  mr: (value: Stitches.PropertyValue<'margin'>) => ({
    marginRight: value,
  }),
  mb: (value: Stitches.PropertyValue<'margin'>) => ({
    marginBottom: value,
  }),
  ml: (value: Stitches.PropertyValue<'margin'>) => ({
    marginLeft: value,
  }),
  mx: (value: Stitches.PropertyValue<'margin'>) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (value: Stitches.PropertyValue<'margin'>) => ({
    marginTop: value,
    marginBottom: value,
  }),
  p: (value: Stitches.PropertyValue<'padding'>) => ({
    padding: value,
  }),
  pt: (value: Stitches.PropertyValue<'padding'>) => ({
    paddingTop: value,
  }),
  pr: (value: Stitches.PropertyValue<'padding'>) => ({
    paddingRight: value,
  }),
  pb: (value: Stitches.PropertyValue<'padding'>) => ({
    paddingBottom: value,
  }),
  pl: (value: Stitches.PropertyValue<'padding'>) => ({
    paddingLeft: value,
  }),
  px: (value: Stitches.PropertyValue<'padding'>) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (value: Stitches.PropertyValue<'padding'>) => ({
    paddingTop: value,
    paddingBottom: value,
  }),
  bg: (value: Stitches.ScaleValue<'colors'>) => ({
    backgroundColor: value,
  }),
  size: (value: Stitches.PropertyValue<'width'>) => ({
    width: value,
    height: value,
  }),
  weight: (value: Stitches.ScaleValue<'fontWeights'>) => ({
    fontWeight: value,
  }),
}
