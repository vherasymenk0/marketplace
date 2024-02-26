'use client'

import { Box, Stack } from '@mui/material'
import 'keen-slider/keen-slider.min.css'
import { ReactNode } from 'react'

import { SliderOptions, useSlider } from './hooks/useSlider'
import { useStyles } from './Slider.styles'
import { defaultKeyExtractor } from './Slider.utils'

export interface SliderProps<TData> {
  keyExtractor?: (item: TData) => string | number
  data: TData[]
  options?: SliderOptions
  renderSlide: (item: TData) => ReactNode
  withDots?: boolean
}

export const Slider = <TData extends Record<string, unknown>>({
  data,
  keyExtractor = defaultKeyExtractor,
  renderSlide,
  options,
  withDots,
}: SliderProps<TData>) => {
  const styles = useStyles()
  const { sliderRef, instanceRef, currentSlide } = useSlider(options)

  return (
    <Box sx={styles.container}>
      <Box ref={sliderRef} className="keen-slider">
        {data.map((item) => {
          const key = keyExtractor(item)

          return (
            <Box key={key} className="keen-slider__slide" sx={styles.slide}>
              {renderSlide(item)}
            </Box>
          )
        })}
      </Box>

      {withDots ? (
        <Stack sx={styles.dots}>
          {[...Array(instanceRef.current?.track?.details?.slides?.length).keys()].map((idx) => {
            return (
              <Box
                key={idx}
                className={`${currentSlide === idx ? 'active' : ''}`}
                sx={styles.dot}
              />
            )
          })}
        </Stack>
      ) : null}
    </Box>
  )
}
