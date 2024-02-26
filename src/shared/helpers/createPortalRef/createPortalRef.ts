const IS_BROWSER = typeof window !== 'undefined'

export const createPortalRef = ({ id = 'portal-ref' }) => {
  if (!IS_BROWSER) {
    return null
  }

  let modalRoot = document.querySelector(`#${id}`)

  if (!modalRoot) {
    modalRoot = document.createElement('div')
    modalRoot.setAttribute('id', id)
    document.body.appendChild(modalRoot)
  }

  return modalRoot
}
