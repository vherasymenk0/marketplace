declare module 'jwt-encode' {
  interface BaseOptions {
    alg: 'HS256'
    typ: 'JWT'
  }

  type Options = Partial<BaseOptions> & Record<string, string>

  declare function jwtEncode(data: unknown, secret: string, options?: Options): string

  export default jwtEncode
}
