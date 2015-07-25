BirthdayList = React.createClass({
  render: function() {
    return (
      <div id='birthday-list'>
        {
          this.props.birthdays.map(function(birthday) {
            return (<BirthdayRow birthday={birthday}/>)
          })
        }
      </div>
    );
  }
})

BirthdayRow = React.createClass({
deleteBirthday: function(){
  var record_id = this.props.id
  $.ajax({
    url: "birthdays/record_id",
    type: "DELETE"
  })
},
  render: function(){
    return (
      <table border = "1" className="form-group">
        <tr>
          <td>{this.props.birthday.name}</td>
          <td>{this.props.birthday.birthdate}</td>
          <td> Edit </td>
          <td className = "delete"> Delete </td>
        </tr>
      </table>
    )
  }
})

