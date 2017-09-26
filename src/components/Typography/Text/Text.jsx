import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../../utils/safeRest'
import TextSup from './TextSup/TextSup'
import TextSub from './TextSub/TextSub'

import styles from './Text.modules.scss'

/**
 * Inline text as an HTML `<span>` element.
 *
 * <span class="docs--badge__new">new!</span> <span class="docs--badge__version">v0.22.0</span>
 */
const Text = ({ bold, size, invert, children, ...rest }, context) => {
  const textColor = invert ? styles.invertedColor : styles.color

  const classes = `
    ${styles[size]}
    ${bold ? styles.boldFont : styles[`${size}Font`]}
    ${context.inheritColor ? styles.inheritColor : textColor}
  `

  return (
    <span {...safeRest(rest)} className={classes}>
      {children}
    </span>
  )
}

Text.propTypes = {
  /**
   * Embolden text without conveying any special importance or relevance.
   */
  bold: PropTypes.bool,
  /**
   * The font size.
   */
  size: PropTypes.oneOf([
    'base',
    'small',
    'medium',
    'large'
  ]),
  /**
   * Invert the text color to appear light on dark backgrounds.
   */
  invert: PropTypes.bool,
  /**
   * The content. Can be text, other components, or HTML elements.
   */
  children: PropTypes.node.isRequired
}

Text.defaultProps = {
  bold: false,
  size: 'base',
  invert: false
}

Text.contextTypes = {
  inheritColor: PropTypes.bool
}

Text.Sup = TextSup
Text.Sub = TextSub

export default Text
