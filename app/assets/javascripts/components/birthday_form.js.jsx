$(document).ready(function() {

  var DisplayResult = React.createClass({
    render: function() {
        console.log(this.props);
        return(<div className="form-group">
                            <li>{this.props.results.name}</li>
                            <li>{this.props.results.birthdate}</li>
                 </div>
      )
    }
  });

  var CreateNewBirthdayForm = React.createClass({
    getInitialState: function() {
      return { name: "", birthdate: "" };
    },
    nameChanged: function(event){
      this.setState({ name: event.target.value });
    },
    birthdateChanged: function(event){
      this.setState({ birthdate: event.target.value });
    },
    handleSubmit: function() {
      $(".overlay-close").trigger('click')
      React.render(<DisplayResult results={this.state}/>, document.getElementById('birthday_list'));
      this.setState({name: '', birthdate: ''});
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
        success: this.handleSubmit
      });
    },
    render: function(){
      return (
        <div id='birthday'>
          <form id='birthday_form' className='form-horizontal' onSubmit= {this.handleSubmit}>
            <fieldset>
              <div className="form-group">
                <label htmlFor="name" className="col-lg-2 control-label">
                  Name
                </label>
                <div className= "col-lg-10">
                  <input className="form-control"
                    placeholder= "Enter your name"
                    id= "name"
                    type= "text"
                    value= {this.state.name}
                    onChange= {this.nameChanged}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="birthdate" className="col-lg-2 control-label">
                  Birthdate
                </label>
                <div className= "col-lg-10">
                  <input className="form-control pickadate"
                    placeholder= "Enter your birthdate"
                    id= "birthdate"
                    type= "text"
                    value= {this.state.birthdate}
                    onChange= {this.birthdateChanged}
                  />
                </div>
              </div>
              <div className= "form-group">
                <div className= "col-lg-10 col-lg-offset-2">
                  <input type="button" className= "btn btn-primary" value= "Save"
                    onClick= {this.formSubmitted}
                  />
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      )
    }
  });

  React.render(<CreateNewBirthdayForm/>, document.getElementById('new-form'));
  $(".pickadate").pickadate()
});

