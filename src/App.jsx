import React from 'react';
import ReactDOM from 'react-dom';
var ons = require('onsenui');
var Ons = require('react-onsenui');

window.fn = {};
window.fn.toggleAccordion = function(el) {
  var oCN = el.childNodes;
  var oCN0 = oCN[0].childNodes[0];
  var oCN1 = oCN[0].childNodes[1];
  oCN0.classList.toggle("active");
  oCN1.classList.toggle("show");
}
window.fn.toggleList = function(el) {
  var oPN1 = el.target.parentNode;
  var oCNS1 = oPN1.childNodes;
  var oCNS2 = oCNS1[0].childNodes;
  var oIcon = oCNS2[0];

  fn.toggleIcon(oIcon);
  fn.togglePanel(oPN1);
}
window.fn.toggleListIcon = function(el) {
  var oIcon = el.target;
  var oPN1 = el.target.parentNode;
  var oPN2 = oPN1.parentNode;

  fn.toggleIcon(oIcon);
  // Pass Recipe Title
  fn.togglePanel(oPN2);
}
window.fn.toggleIcon = function(el) {
  if (el === undefined) {
    return false;
  }
  var oIcon = el;
  
  if (oIcon.classList.contains('zmdi-plus') === true) {
    oIcon.classList.add('zmdi-minus');
    oIcon.classList.remove('zmdi-plus');
  } else {
    oIcon.classList.add('zmdi-plus');
    oIcon.classList.remove('zmdi-minus');
  }
}
window.fn.togglePanel = function(el) {
  //  Get Accordion, then act accordingly...
  var oPN1 = el.parentNode;
  var oPN2 = oPN1.parentNode;
  var oCN = oPN2.childNodes;
  var oCN0 = oCN[0].childNodes[0];
  var oCN1 = oCN[0].childNodes[1];

  oCN0.classList.toggle("active");
  oCN1.classList.toggle("show");
}

const Ingredients = () => {
  return (
    <div className="recipe-ingredients">
      <Ons.ListHeader>Ingredients</Ons.ListHeader>
      <div className="ingredients-content">
        <Ons.ListItem>Item 1</Ons.ListItem>
        <Ons.ListItem>Item 2</Ons.ListItem>
        <Ons.ListItem>Item 3</Ons.ListItem>
        <Ons.ListItem>Item 4</Ons.ListItem>
      </div>
    </div>
  )
}

const Methods = () => {
  return (
    <div className="recipe-methods">
      <Ons.ListHeader>Method</Ons.ListHeader>
      <div className="methods-content">
        <Ons.ListItem>Item 1</Ons.ListItem>
        <Ons.ListItem>Item 2</Ons.ListItem>
        <Ons.ListItem>Item 3</Ons.ListItem>
        <Ons.ListItem>Item 4</Ons.ListItem>
      </div>
      <div className="recipe-methods-spacer" />
    </div>
  )
}

const RecipeContent = () => {
  return (
    <div className="panel">
      <Ingredients />
      <Methods />
    </div>
  )
}

const renderRow = (index) => {
  return (
      // <Ons.ListItem className="accordion" onclick="fn.toggleAccordion(this)" key={index}>
      <Ons.ListItem className="accordion" key={index}>
        <div className="recipe-title">
          <div className="recipe-title-left" onClick={(event) => fn.toggleList(event)}>
            <Ons.Icon  onClick={(event) => fn.toggleListIcon(event)} icon='md-plus' size={{'default': 26, material: 24}} style={{position: 'relative', top: '4px', left: '-34px'}}/>
            {`Item ${index + 1}`}
          </div>
          <div className="recipe-title-b1"><Ons.Button className="accordion-outer-button"><Ons.Icon icon='md-edit' /></Ons.Button></div>
          <div className="recipe-title-b2"><Ons.Button className="accordion-outer-button" modifier='cta'><Ons.Icon icon='md-delete' /></Ons.Button></div>
        </div>
        <RecipeContent />
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
          <section className="standard-margin">
            <div className="new-recipe-control">New Recipe: <Ons.Button className="accordion-outer-button"><Ons.Icon icon='md-file-plus' /></Ons.Button></div>
            <Accordion />
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
          <section className="standard-margin">
            <ContactDetails />
          </section>
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
