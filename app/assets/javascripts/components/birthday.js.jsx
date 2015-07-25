BirthdayContainer = React.createClass({
  getInitialState: function(){
    return { birthdays: [], name: '', birthdate: '' };
  },

  componentDidMount: function() {
    this.loadBirthdaysFromServer();
  },

  loadBirthdaysFromServer: function(){
    $.ajax({
      url: "/birthdays",
      type: "GET",
      dataType: "JSON",
      contentType: "application/json",
      processData: false,
      success: function(birthdays){
        this.setState({ birthdays: birthdays })
      }.bind(this)
    })
  },

  nameChanged: function(event){
    this.setState({ name: event.target.value });
  },

  birthdateChanged: function(event){
    this.setState({ birthdate: event.target.value });
  },

  formSubmitted: function(event) {
    event.preventDefault();
    $.ajax({
      url: "/birthdays",
      type: "POST",
      dataType: "JSON",
      contentType: "application/json",
      processData: false,
      data: JSON.stringify(this.state),
      success: function (birthday) {
        $(".overlay-close").trigger('click');
        var all_birthdays = this.state.birthdays.concat([birthday]);
        this.setState({birthdays: all_birthdays, name: "", birthdate: ""});
      }.bind(this)
    })
  },

  render: function(){
    return (
      <div>
        <BirthdayList birthdays={this.state.birthdays} />
        <BirthdayForm onFormSubmit={this.formSubmitted} nameChanged={this.nameChanged}
          birthdateChanged={this.birthdateChanged} name={this.state.name} birthdate={this.state.birthdate} />
      </div>
    )
  }
})
