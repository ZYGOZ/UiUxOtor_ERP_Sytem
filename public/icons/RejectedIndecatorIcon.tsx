import * as React from "react"
import { SVGProps } from "react"
const RejectedIndecatorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={6}
    height={20}
    fill="none"
    {...props}
  >
    <rect width={6} height={20} fill="#E64F53" rx={3} />
  </svg>
)
export default RejectedIndecatorIcon
