const { Component } = require("react")

class Mycomponent extends Component {
  state = {
    selectedName: 'mike'
  };
  onClick = e => {
    const selectedName = e.currentTarget.dataset.name;
    this.setState({selectedName});
  };
  render() {
    const {selectedName} = this.state;
    return (
      <div>
        <button onClick={this.onClick} data-name="mike">mike change</button>
        <button onClick={this.onClick} data-name="jone">jone change</button>
        {`selectedName is ${selectedName}`}
      </div>
    );
  }
}

// * dataset 이름에는 대문자가 들어갈 수 없다 -> (->로 작성하면 camel case로 읽을 수 있다.
// * data-favoriate-name => favorateName
