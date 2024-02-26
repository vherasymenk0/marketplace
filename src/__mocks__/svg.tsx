import { SVGProps, forwardRef } from 'react'

const SvgrMock = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, ref) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <svg ref={ref} {...props} />
))

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
SvgrMock.displayName = 'svg'

export default SvgrMock

export const ReactComponent = SvgrMock
