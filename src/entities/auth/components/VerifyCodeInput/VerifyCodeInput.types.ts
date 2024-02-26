export interface Props {
  codeLength?: number
  onVerify: (code: string) => void | Promise<void>
  onlyNumbers?: boolean
}
