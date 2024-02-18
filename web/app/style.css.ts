import { style } from '@vanilla-extract/css'

export const Container = style({
  color: 'red',
  width: '100%',
  height: '100%'
})

export const Card = style({
  backgroundColor: 'gray',
  borderRadius: 6,
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
  width: '100vw',
  height: '100vh'
})
