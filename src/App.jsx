import React from 'react'
//  import ReactDOM from 'react-dom'
var ons = require('onsenui')
var Ons = require('react-onsenui')

const capitalize = (s) => {
    return s && s[0].toUpperCase() + s.slice(1);
}

class ItemDetail extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      enableEdit: this.props.enableEdit || false,
      type: this.props.type || 'ingredient',
      ingredient: [{id: 0, id_rel: 0, ingredient: ''}],
      method: [{id: 0, id_rel: 0, description: '', step: 0}]
    }
  }

  handleEdit () {
    this.setState(() => {
      return {...this.state,
      enableEdit: true,};
    });
  }

  render() {
    const { enableEdit, type } = this.state;

    if (enableEdit) {
      return(
        <ons-row>
          <ons-col width="92px">
            <Ons.Button onClick={() => this.handleEdit()} className="details-outer-button"><Ons.Icon icon="md-long-arrow-down" /></Ons.Button>
            <Ons.Button onClick={() => this.handleDelete(index)} className="details-outer-button"><Ons.Icon icon="md-long-arrow-up" /></Ons.Button>
          </ons-col>
          <ons-col width="calc(100% - (92px * 2))">

            <Ons.Input
              value={'gooby'}
              onChange={this.handleUsernameChange}
              modifier="underbar"
              float
              placeholder={type}
            ></Ons.Input>

          </ons-col>
          <ons-col width="92px">
            <Ons.Button onClick={() => this.handleEdit()} className="details-outer-button"><Ons.Icon icon="md-check" /></Ons.Button>
            <Ons.Button onClick={() => this.handleDelete(index)} className="details-outer-button" modifier="cta"><Ons.Icon icon="md-close" /></Ons.Button>
          </ons-col>
        </ons-row>
      )
    } else {
      return (
        <ons-row>
          <ons-col>
            <Ons.ListItem>
              Hellom
            </Ons.ListItem>
          </ons-col>
          <ons-col width="92px">
            <Ons.Button onClick={() => this.handleEdit()} className="details-outer-button"><Ons.Icon icon="md-edit" /></Ons.Button>
            <Ons.Button onClick={() => this.handleDelete(index)} className="details-outer-button" modifier="cta"><Ons.Icon icon="md-delete" /></Ons.Button>
          </ons-col>
        </ons-row>
      )
    }
  }
}

class RecipeDetails extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      type: props.typeOfDetails,
      ingredients: [{id: 0, id_rel: 0, ingredient: ''}],
      methods: [{id: 0, id_rel: 0, description: '', step: 0}]
    }
  }

  handleAdd () {
    alert('blah')
  }

  render() {
    const { type, ingredients, methods } = this.state
    console.log(this.props)
    return (
      <div className={`recipe-${type}`}>
        <ons-row>
          <ons-col>
            <Ons.ListHeader>{capitalize(type)}</Ons.ListHeader>
          </ons-col>
        </ons-row>
        <div className={`${type}-content`}>
          <ItemDetail />
        </div>
        <ons-row>
          <ons-col>
            <div className={`${type}-content`}>
              <Ons.ListItem modifier="nodivider">
                <Ons.Button className="details-outer-button" onClick={() => this.handleAdd()}><Ons.Icon icon="md-file-plus" /></Ons.Button>
              </Ons.ListItem>
          </div>
          </ons-col>
        </ons-row>
      </div>
    )
  }
}

const RecipeContent = (props) => {
  return (
    <div className="panel">
      <RecipeDetails typeOfDetails={'ingredients'} addDetail={props.addIngredient} />
      <div className="recipe-contents-spacer" />
      <RecipeDetails typeOfDetails={'methods'} addDetail={props.addMethod} />
      <div className="recipe-contents-spacer" />
    </div>
  )
}

class Recipe extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      recipe: {
        title: '',
        ingredient: [{id: 0, id_rel: 0, ingredient: ''}],
        method: [{id: 0, id_rel: 0, description: '', step: 0}]
      },
      actions: {
        save: false,
        cancel: false
      }
    }
    this.addIngredient = this.addIngredient.bind(this);
    this.addMethod = this.addMethod.bind(this);
    this.actionCancel = this.actionCancel.bind(this);
  }

  addIngredient () {
    alert('addIngredient');
  }

  addMethod () {
    alert('addMethod');
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
            <p>
              <Ons.Input
                value={this.state.recipe.title}
                onChange={this.handleUsernameChange}
                modifier="underbar"
                float
                placeholder="Recipe Title"
                />
            </p>

            <div className="control-form-content-height">
              <RecipeContent
                allowEdit={true}
                addIngredient={() => this.addIngredient}
                addMethod={()=>this.addMethod}
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
        <div key={index} className="main-page-recipe-list-item">
          <ons-row vertical-align="center">
            <ons-col width="2em">
                <Ons.Icon className="cursor-pointer showRecipeIcon" icon="md-plus" size={{'default': 26, material: 24}} onClick={ () => this.handleExpand(index) } />
            </ons-col>
            <ons-col>
              {`Item ${index + 1}`}
            </ons-col>
            <ons-col width="92px">
              <Ons.Button onClick={() => this.handleEdit(index)} className="accordion-outer-button cursor-pointer"><Ons.Icon icon="md-edit" /></Ons.Button>
              <Ons.Button onClick={() => this.handleDelete(index)} className="accordion-outer-button cursor-pointer" modifier="cta"><Ons.Icon icon="md-delete" /></Ons.Button>
            </ons-col>
          </ons-row>
        </div>
      )
    } else {
      return(
        <div key={index} className="main-page-recipe-list-item">
          <ons-row vertical-align="center">
            <ons-col width="2em">
              <Ons.Icon className="cursor-pointer showRecipeIcon" icon="md-minus" size={{'default': 26, material: 24}} onClick={ () => this.handleExpand(index) }/>
            </ons-col>
            <ons-col>
              {`Item ${index + 1}`}
            </ons-col>
            <ons-col width="92px">
              <Ons.Button onClick={() => this.handleEdit(index)} className="accordion-outer-button"><Ons.Icon icon="md-edit" /></Ons.Button>
              <Ons.Button onClick={() => this.handleDelete(index)} className="accordion-outer-button" modifier="cta"><Ons.Icon icon="md-delete" /></Ons.Button>
            </ons-col>
            <ons-col width="100%">
              <hr />
            </ons-col>
            <ons-col width="100%">
              <RecipeContent />
            </ons-col>
            <ons-col width="100%">
              <hr />
            </ons-col>
          </ons-row>
        </div>
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
        contentToDisplay: 'recipe'
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
          <Recipe />
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
