// eslint-disable-next-line import/prefer-default-export

/**
 *
 * Generates class name for given component. It is used by AdminJS core to append namespaced
 * classes.
 *
 * ### example
 *
 * ```javascript
 * import { cssClass } from '@adminjs/design-system'
 *
 * cssClass('Icon', 'my-regular-class-name')
 * // returns: 'adminjs_Icon my-regular-class-name'
 * ```
 *
 *
 * @param {string | Array<string>} className
 * @param {string}                [regularClass]
 * @memberof module:@adminjs/design-system
 */
export const cssClass = (className: string | Array<string>, regularClass?: string): string => {
  let names: Array<string> = []
  if ((className as any).join) {
    names = className as Array<string>
  } else {
    names = [className as string]
  }
  const parsed = names.map((name) => `adminjs_${name}`)
  if (regularClass) {
    parsed.push(regularClass)
  }

  return parsed.join(' ')
}

export default cssClass
