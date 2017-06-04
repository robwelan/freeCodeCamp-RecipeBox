import React from 'react'
//  import ReactDOM from 'react-dom'
var ons = require('onsenui')
var Ons = require('react-onsenui')

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

const renderToolbar = (props) => {
    return (
      <Ons.Toolbar>
        <div className="center">{props}</div>
      </Ons.Toolbar>
    )
}

const setActive = (listItemIndex) => {
alert(listItemIndex)
  this.props.handleItemSelect(listItemIndex);
}

class Accordion extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      expandRecipe: null
    }
    this.renderRow = this.renderRow.bind(this);
  }

  renderRow (index) {
    const { expandRecipe } = this.state

    if (expandRecipe !== index) {
      return(
        <Ons.ListItem key={index}>
          <div className="recipe-container">
            <div className="recipe-title">

              <div className="recipe-title-left" onClick={ () => this.handleExpand(index) }>
                <Ons.Icon className="showRecipeIcon" icon="md-plus" size={{'default': 26, material: 24}} />
                <span className="recipe-title-position">{`Item ${index + 1}`}</span>
              </div>
              <div className="recipe-title-b1"><Ons.Button onClick={() => this.handleEdit(index)} className="accordion-outer-button"><Ons.Icon icon="md-edit" /></Ons.Button></div>
              <div className="recipe-title-b2"><Ons.Button onClick={() => this.handleDelete(index)} className="accordion-outer-button" modifier="cta"><Ons.Icon icon="md-delete" /></Ons.Button></div>
            </div>
          </div>
        </Ons.ListItem>
      )
    } else {
      return(
        <Ons.ListItem key={index}>
          <div className="recipe-container">
            <div className="recipe-title">

              <div className="recipe-title-left" onClick={ () => this.handleExpand(index) }>
                <Ons.Icon className="showRecipeIcon" icon="md-minus" size={{'default': 26, material: 24}} />
                <span className="recipe-title-position">{`Item ${index + 1}`}</span>
              </div>
              <div className="recipe-title-b1"><Ons.Button onClick={() => this.handleEdit(index)} className="accordion-outer-button"><Ons.Icon icon="md-edit" /></Ons.Button></div>
              <div className="recipe-title-b2"><Ons.Button onClick={() => this.handleDelete(index)} className="accordion-outer-button" modifier="cta"><Ons.Icon icon="md-delete" /></Ons.Button></div>
            </div>
            <RecipeContent />
          </div>
        </Ons.ListItem>
      )
    }
  }

  handleExpand (index) {
    if (this.state.expandRecipe === index) {
      this.setState({expandRecipe: null})
    } else {
      this.setState({expandRecipe: index})
    }
  }

  handleDelete (index) {
    alert(index)
  }

  handleEdit (index) {
    alert(index)
  }

  render () {
    return (
      <Ons.LazyList
        length={100}
        renderRow={this.renderRow}
        calculateItemHeight={() => ons.platform.isAndroid() ? 48 : 44}
        handleExpand={this.handleExpand.bind(this)}
        handleEdit={this.handleEdit.bind(this)}
        handleDelete={this.handleDelete.bind(this)}
      />
    )
  }
}

const ContactDetails = (props) => {
  return (
    <section className="standard-margin">
      <Ons.Row verticalAlign={'top'}>
        <Ons.Col width={'45%'}>
          <h5>About The Creature</h5>
          <p>I'm a JavaScript enthusiast who:</p>
          <ol className="ol-contact">
            <li>teaches JavaScript, CSS and HTML to others</li>
            <li>develops Apps and web sites using cool tech</li>
          </ol>
        </Ons.Col>
        <Ons.Col width={'10%'}></Ons.Col>
        <Ons.Col width={'45%'}>
          <h5>Ways To Contact Me</h5>
          <ul className="contact-list">
            <li>
              <a href="https://twitter.com/RobWelan" target="_blank">
                <i className="contact-icon fa fa-twitter" aria-hidden="true" />
                Twitter
              </a>
            </li>
            <li>
              <a href="https://plus.google.com/u/0/+RobWelan" target="_blank">
                <i className="contact-icon fa fa-google-plus-official" aria-hidden="true" />
                Google+
              </a>
            </li>
            <li>
              <a href="https://github.com/robwelan" target="_blank">
                <i className="contact-icon fa fa-github" aria-hidden="true" />
                GitHub
              </a>
            </li>
            <li>
              <a href="https://gitlab.com/robwelan" target="_blank">
                <i className="contact-icon fa fa-gitlab" aria-hidden="true" />
                GitLab
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/robwelan" target="_blank">
                <i className="contact-icon fa fa-linkedin" aria-hidden="true" />
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://www.freecodecamp.com/robwelan" target="_blank">
                <i className="contact-icon fa fa-free-code-camp" aria-hidden="true" />
                freeCodeCamp
              </a>
            </li>
          </ul>
        </Ons.Col>
      </Ons.Row>
    </section>
  )
}
class NewRecipe extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      newRecipe: {
        title: '',
        ingredients: [],
        method: []
      },
      actions: {
        save: false,
        cancel: false
      }
    }
  }

  renderRow (row, index) {
    const x = 40 + Math.round(5 * (Math.random() - 0.5)),
          y = 40 + Math.round(5 * (Math.random() - 0.5))

    const names = ['Max', 'Chloe', 'Bella', 'Oliver', 'Tiger', 'Lucy', 'Shadow', 'Angel']
    const name = names[Math.floor(names.length * Math.random())]

    return (
      <Ons.ListItem key={index}>
        <div className="left">
          <img src={`http://placekitten.com/g/${x}/${y}`} className="list-item__thumbnail" />
        </div>
        <div className="center">
          {name}
        </div>
      </Ons.ListItem>
    )
  }

  actionCancel () {
    this.setState({
      ...this.state.actions,
      actions: {
        cancel: true
      }
    });
  }

  render () {
    const { actions } = this.state

    if (actions.cancel === false && actions.save === false) {
      return (
        <Ons.Page renderToolbar={() => renderToolbar('New Recipe')}>
          <section className="standard-margin">
            <section style={{textAlign: 'center'}}>
              <p>
                <Ons.Input
                  value={this.state.newRecipe.title}
                  onChange={this.handleUsernameChange}
                  modifier="underbar"
                  float
                  placeholder="Recipe Title"
                  />
              </p>
            </section>
            <div className="control-form-content-height">
              <Ons.List
                dataSource={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
                renderRow={this.renderRow}
                renderHeader={() => <Ons.ListHeader>Cute cats</Ons.ListHeader>}
                />
            </div>
            <section style={{textAlign: 'right'}}>
              <Ons.Button style={{margin: '10px 0px 0px 0px'}} modifier='cta'>Save and Close</Ons.Button>
              <Ons.Button  onClick={this.actionCancel.bind(this)} style={{margin: '10px 0px 0px 10px'}} modifier='outline'>Cancel</Ons.Button>
            </section>
          </section>
        </Ons.Page>
      )
    }
    else if (actions.cancel === true) {
      return (<MyTab title='Recipe Box' key='content-home' />)
    }
  }
}

class MyTab extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      actions: {
        contentToDisplay: 'list'
      }
    }
  }
  actionCreateNewRecipe () {
    this.setState({
      ...this.state.actions,
      actions: {
        contentToDisplay: 'newRecipe'
      }
    });
  }
  render () {
    const strPage = this.props.title.toLowerCase()
    const { actions: { contentToDisplay } } = this.state

    if (strPage === 'recipe box') {
      if (contentToDisplay === 'list') {
        return (
          <Ons.Page renderToolbar={() => renderToolbar(this.props.title)}>
            <section className="standard-margin">
              <div className="new-recipe-control">Create New Recipe: <Ons.Button onClick={this.actionCreateNewRecipe.bind(this)} className="accordion-outer-button"><Ons.Icon icon="md-file-plus" /></Ons.Button></div>
              <Accordion/>
            </section>
          </Ons.Page>
        )
      } else {
        return (
          <NewRecipe />
        )
      }
    }
    if (strPage === 'logs') {
      return (
        <Ons.Page renderToolbar={() => renderToolbar(this.props.title)}>
          <section className="standard-margin">
            <ul className="logs-detail">
              <li>-log-</li>
            </ul>
          </section>
        </Ons.Page>
      )
    }
    if (strPage === 'contact details') {
      return (
        <Ons.Page renderToolbar={() => renderToolbar(this.props.title)}>
          <section className="standard-margin">
            <ContactDetails />
          </section>
        </Ons.Page>
      )
    }
    return (
      <Ons.Page renderToolbar={() => renderToolbar(this.props.title)}>
        <section className="standard-margin">
          <h1>Hello World</h1>
          <p>If you got here, no page matched.</p>
        </section>
      </Ons.Page>
    )
  }
}

class MyPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      index: 0
    }
  }

    renderTabs () {
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
  render () {
    return (
                <Ons.Tabbar index={
                  this.state.index
                }
                  onPreChange = {
                    (event) => {
                      if (event.index !== this.state.index) {
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
