declare module 'get-browser-fingerprint' {
  interface Options {
    hardwareOnly?: boolean
    enableWebgl?: boolean
    enableScreen?: boolean
    debug?: boolean
  }

  function getBrowserFingerprint(options?: Options): number

  export default getBrowserFingerprint
}
