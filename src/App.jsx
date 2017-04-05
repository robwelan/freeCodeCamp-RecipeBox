import React from 'react';
import ReactDOM from 'react-dom';
var ons = require('onsenui');
var Ons = require('react-onsenui');


window.fn = {};
window.fn.toggle = function(el) {
//  el.classList.toggle("active");
  var oCN = el.childNodes;
  var oCN0 = oCN[0].childNodes[0];
  var oCN1 = oCN[0].childNodes[1];
  oCN0.classList.toggle("active");
  oCN1.classList.toggle("show");
}

// import HomePage from './HomePage';
// import SettingsPage from './SettingsPage';
//
// export default class App extends React.Component {
//   renderTabs() {
//     return [
//       {
//         content: <HomePage />,
//         tab: <Tab label='Home' icon='md-home' />
//       },
//       {
//         content: <SettingsPage />,
//         tab: <Tab label='Settings' icon='md-settings' />
//       }
//     ]
//   }
//
//   render() {
//     return (
//       <Tabbar initialIndex={0} renderTabs={this.renderTabs.bind(this)} />
//     );
//   }
// }
//

const Ingredients = () => {
  return (
    <div className="panel">
        <div className="ingredients-title">Ingredients</div>
          <Ons.ListItem tappable>Item 1</Ons.ListItem>
          <Ons.ListItem tappable>Item 2</Ons.ListItem>
          <Ons.ListItem tappable>Item 3</Ons.ListItem>
          <Ons.ListItem tappable>Item 4</Ons.ListItem>
      </div>
  )
}

const renderRow = (index) => {
  return (
      <Ons.ListItem className="accordion" tappable onclick="fn.toggle(this)" key={index}>
        <div className="recipe-title">
          <div className="recipe-title-left">{`Item ${index + 1}`}</div>
          <div className="recipe-title-b1"><Ons.Button className="accordion-outer-button"><Ons.Icon icon='md-edit' /></Ons.Button></div>
          <div className="recipe-title-b2"><Ons.Button className="accordion-outer-button" modifier='cta'><Ons.Icon icon='md-delete' /></Ons.Button></div>
        </div>
        <Ingredients />
      </Ons.ListItem>
    )
}

const Accordion = (props) => {

  let index = 1;

  return (
    <Ons.LazyList
          length={100}
          renderRow={renderRow}
          calculateItemHeight={() => ons.platform.isAndroid() ? 48 : 44}
        />
  )
}

const ContactDetails = (props) => {
  return (
    <section className="standard-margin">
      <Ons.Row verticalAlign={'top'}>
        <Ons.Col width={'50%'}>
          <h5>About The Creature</h5>
          <p>I'm a JavaScript enthusiast who:</p>
          <ol className='ol-contact'>
            <li>teaches JavaScript, CSS and HTML to others</li>
            <li>develops Apps and web sites using cool tech</li>
          </ol>
        </Ons.Col>
        <Ons.Col width={'50%'}>
          <h5>Ways To Contact Me</h5>
          <ul className="contact-list">
            <li><a href="https://twitter.com/RobWelan" target="_blank"><i className="contact-icon fa fa-twitter" aria-hidden="true"></i>Twitter</a></li>
            <li><a href="https://plus.google.com/u/0/+RobWelan" target="_target"><i className="contact-icon fa fa-google-plus-official" aria-hidden="true"></i>Google+</a></li>
            <li><a href="https://github.com/robwelan" target="_blank"><i className="contact-icon fa fa-github" aria-hidden="true"></i>GitHub</a></li>
            <li><a href="https://gitlab.com/robwelan" target="_blank"><i className="contact-icon fa fa-gitlab" aria-hidden="true"></i>GitLab</a></li>
            <li><a href="https://www.linkedin.com/in/robwelan" target="_blank"><i className="contact-icon fa fa-linkedin" aria-hidden="true"></i>LinkedIn</a></li>
            <li><a href="https://www.freecodecamp.com/robwelan" target="_blank"><i className="contact-icon fa fa-free-code-camp" aria-hidden="true"></i>freeCodeCamp</a></li>
          </ul>
        </Ons.Col>
      </Ons.Row>
    </section>
  )
}
class MyTab extends React.Component {
  constructor(props) {
    super(props)
  }
  renderToolbar() {
    return (
      <Ons.Toolbar>
        <div className='center'>{this.props.title}</div>
      </Ons.Toolbar>
    )
  }
  render() {
    const strPage = this.props.title.toLowerCase()

    if (strPage === 'recipe box') {
      return (
        <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
          <Accordion />
          <section className="standard-margin">
            <h1>Hello World</h1>
            <p>
              This is the <strong>{this.props.title}</strong> tab.
            </p>
          </section>
        </Ons.Page>
      )
    }
    if (strPage ==='logs') {
      return (
        <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
          <section className="standard-margin">
            <h1>Logs</h1>
            <ul className="logs-detail">
              <li>-log-</li>
            </ul>
          </section>
        </Ons.Page>
      )
    }
    if (strPage === 'contact details') {
      return (
        <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
          <ContactDetails />
        </Ons.Page>
      )
    }
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
        <section className="standard-margin">
          <h1>Hello World</h1>
          <p>If you got here, no page matched.</p>
        </section>
      </Ons.Page>
    )
  }
}

class MyPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0
    }
  }
  renderTabs() {
    return [{
      content: <MyTab title='Recipe Box' key='content-home' />,
      tab: <Ons.Tab label='Recipe Box' icon='md-pages' key='tab-home' />
    },
    {
      content: <MyTab title='Logs' key='content-logs' />,
      tab: <Ons.Tab label='Logs' icon='md-view-toc' key='tab-logs' />
    },
    {
      content: <MyTab title='Contact Details' key='content-contact' />,
      tab: <Ons.Tab label='Contact' icon='md-account' key='tab-contact' />
    }]
  }
  render() {
    return ( <
      Ons.Tabbar index = {
        this.state.index
      }
      onPreChange = {
        (event) => {
          if (event.index != this.state.index) {
            this.setState({
              index: event.index
            })
          }
        }
      }
      renderTabs = {
        this.renderTabs.bind(this)
      }
    />
  )
}
}

export { MyPage }
// ons.ready(function() {
//   ReactDOM.render(<MyPage />, document.getElementById('app'))
// })
