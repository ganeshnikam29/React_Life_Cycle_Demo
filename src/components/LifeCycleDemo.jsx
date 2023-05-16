import React from 'react';
import { Button } from './Button';

class LifeCycleDemo extends React.Component {
  constructor(props) {
    console.log('Constructur called');
    super(props);
    this.state = {
      hello: 'React',
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDrivedStatefromProps Called');
    // console.log(props, state);
    switch (props.lang) {
      case 'EN':
        return { greetings: 'Hello' };
      case 'FR':
        return { greetings: 'Salute' };
      case 'SP':
        return { greetings: 'Hola' };
      default:
        return { greetings: 'Hi' };
    }
  }

  shouldComponentUpdate(nextState, nextProps) {
    console.log('shouldComponentUpdate called');
    // console.log('nextState', nextState);
    // console.log('this.props', this.props);
    if (this.props.lang !== nextState.lang) {
      return true;
    }
    return false;
  }

  componentDidMount() {
    console.log('componentDidMount Called');
  }

  componentDidUpdate() {
    console.log('ComponentDidUpdate Called');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount Called');
  }

  render() {
    console.log('Render Called');
    return (
      <>
        <h1>
          {this.state.greetings} {this.state.hello}
        </h1>
      </>
    );
  }
}

export class TranslateDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'EN',
    };
    this.changeLang = this.changeLang.bind(this);
  }

  changeLang(newLang) {
    this.setState({ lang: newLang });
  }

  render() {
    return (
      <>
        <div
          style={{
            border: '1px solid black',
            padding: '10px',
            borderRadius: '6px',
          }}
        >
          <LifeCycleDemo lang={this.state.lang} />
          <h3> Current Language: {this.state.lang}</h3>
        </div>
        <div style={{ display: 'flex' }}>
          <Button
            classNames="primary"
            handleClick={() => this.changeLang('EN')}
          >
            English
          </Button>
          <Button
            classNames="primary"
            handleClick={() => this.changeLang('FR')}
          >
            French
          </Button>
          <Button
            classNames="primary"
            handleClick={() => this.changeLang('SP')}
          >
            Spanish
          </Button>
        </div>
      </>
    );
  }
}
