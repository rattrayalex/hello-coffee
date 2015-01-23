console.log "hello!"

React = require('react')
Backbone = require('backbone')

{div, ul, li, input, form, button} = React.DOM

Person = Backbone.Model.extend
  fullName: ->
    @get('firstName') + " " + @get('lastName')

People = Backbone.Collection.extend
  model: Person

peopleStore = new People([
  firstName: "Alex"
  lastName: "Rattray"
,
  firstName: "Freeman"
  lastName: "Murray"
])

AddPersonView = React.createClass
  handleSubmit: (e) ->
    e.preventDefault()
    first = @refs.firstName.getDOMNode().value
    last = @refs.lastName.getDOMNode().value
    @props.people.add({firstName: first, lastName: last})

  render: ->
    form {onSubmit: @handleSubmit},
      input
        type: "text"
        name: "firstName"
        ref: "firstName"
      input
        type: "text"
        name: "lastName"
        ref: "lastName"
      button
        type: "submit"
        ,
        "Submit"

PersonView = React.createClass
  componentDidMount: ->
    @props.person.on "all", =>
      @forceUpdate()

  render: ->
    ul {},
      li {}, "First Name: " + @props.person.get('firstName')
      li {}, "Last Name: " + @props.person.get('lastName')

Body = React.createClass
  componentDidMount: ->
    @props.people.on "add remove reset", =>
      @forceUpdate()

  render: ->
    div {},
      "Helloooo mama World!"
      div {},
        "Add a person: "
        AddPersonView({people: @props.people})
      div {},
        [PersonView({person}) for person in @props.people.models]


rendered = React.render(
  Body {people: peopleStore}
  document.body
)
