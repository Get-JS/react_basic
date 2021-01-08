import React, { Component } from 'react'

const HOC = InputComponent => class extends Component {
  state = {
    count: 0
  }
  componentWillMount() {
    console.log('HOC will Mount');
  }
  update = () => {
    this.setState(prevSate => ({
      count: prevSate.count + 1
    }))
  }
  render() {
    console.log('this.props', this.props)
    console.log('this.state', this.state)
    return (
      <div style={{ 'border': '1px solid' }}>
        <h1>HOC</h1>
        <div style={{ 'border': '1px solid' }}>

          <InputComponent
            {...this.props}
            {...this.state}
            update={this.update}
          />
        </div>
      </div>
    )
  }
}

class Label extends Component {
  componentWillMount() {
    console.log('Label will mount');
  }
  render() {
    return (
      <label onMouseMove={this.props.update}>
        {this.props.children} - {this.props.count}
      </label>
    )
  }
}

const Button = HOC(props => <button onClick={props.update}>{props.children} - {props.count}</button>)
const LabelHOC = HOC(Label)

export default () => {
  return (
    <div>
      <Button>button</Button>
      <hr />
      <LabelHOC>label</LabelHOC>
    </div>
  )
}