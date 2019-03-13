import React, { PureComponent } from 'react'
import { render } from 'github-buttons'

class GitHubButton extends PureComponent {
  constructor (props) {
    super(props)
    this.ref = props.ref || React.createRef()
  }
  render () {
    return React.createElement('a', { ...this.props, ref: this.ref }, this.props.children)
  }
  componentDidMount () {
    this.paint()
  }
  componentWillUpdate () {
    this.reset()
  }
  componentDidUpdate () {
    this.paint()
  }
  componentWillUnmount () {
    this.reset()
  }
  paint () {
    (function ($el, _) {
      render($el.parentNode.insertBefore(_, $el).appendChild($el), function (el) {
        try {
          _.replaceChild(el, $el)
        } catch (_) {}
      })
    })(this.ref.current, this._ = document.createElement('span'))
  }
  reset () {
    this._.parentNode.replaceChild(this.ref.current, this._)
  }
}

export default GitHubButton
