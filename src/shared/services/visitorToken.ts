import getBrowserFingerprint from 'get-browser-fingerprint'
import jwtEncode from 'jwt-encode'

export const getVisitorToken = () => {
  const userFingerPrint = getBrowserFingerprint()
  const data = {
    token: userFingerPrint,
    type: 'visitor',
  }
  const visitorToken = jwtEncode(data, process.env.NEXTAUTH_SECRET)

  return visitorToken
}
