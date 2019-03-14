import React, { PureComponent } from 'react'
import { render } from 'github-buttons'

class GitHubButton extends PureComponent {
  constructor (props) {
    super(props)
    this.$ = React.createRef()
    this._ = React.createRef()
  }
  render () {
    return React.createElement('span', { ref: this.$ }, React.createElement('a', { ...this.props, ref: this._ }, this.props.children))
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
    var _ = this.$.current.appendChild(document.createElement('span'))
    render(_.appendChild(this._.current), function (el) {
      try {
        _.parentNode.replaceChild(el, _)
      } catch (_) {}
    })
  }
  reset () {
    this.$.current.replaceChild(this._.current, this.$.current.lastChild)
  }
}

export default GitHubButton
