import { KeenSliderOptions, useKeenSlider } from 'keen-slider/react'
import { useState } from 'react'

export type SliderOptions = KeenSliderOptions

export const useSlider = (options?: SliderOptions) => {
  const initialSlide = options?.initial ?? 0
  const [currentSlide, setCurrentSlide] = useState(initialSlide)
  const [isCreated, setIsCreated] = useState(false)

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: initialSlide,
    slideChanged: (slider) => {
      setCurrentSlide(slider.track.details.rel)
    },
    created: () => setIsCreated(true),
    ...options,
  })

  return {
    currentSlide,
    isCreated,
    instanceRef,
    sliderRef,
  }
}
