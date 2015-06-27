// var BirthdayList = React.createClass({displayName: "BirthdayList",
//   render: function() {
//     var createItem = function(arr) {
//       name = arr[0]
//       birthday = arr[1]
//       return React.createElement("li", null, name + ', ' + birthday);
//     };
//     return React.createElement("ul", null, this.props.items.map(createItem));
//   }
// });

// var BirthdayApp = React.createClass({displayName: "BirthdayApp",
//   getInitialState: function() {
//     return {items: [], name: '', birthday: ''};
//   },

//   onChangeName: function(e) {
//     this.setState({name: e.target.value});
//   },

//   onChangeBirthday: function(e) {
//     this.setState({birthday: e.target.value});
//   },

//   handleSubmit: function(e) {
//     e.preventDefault();
//     this.state.items.push([this.state.name, this.state.birthday]);
//     var nextItems = this.state.items
//     this.setState({items: nextItems, name: '', birthday: ''});
//   },

//   render: function() {
//     return (
//       React.createElement("div", null,
//         React.createElement("h3", null, "Birthday List"),
//         React.createElement(BirthdayList, {items: this.state.items}),
//         React.createElement("form", {onSubmit: this.handleSubmit},
//           React.createElement("h1", null, "Add Birthday"),
//           React.createElement("input", {onChange: this.onChangeName, value: this.state.name, placeholder: "Add Name"}),
//           React.createElement("br"),
//           React.createElement("input", {onChange: this.onChangeBirthday, value: this.state.birthday, placeholder: "dd/mm/yyyy"}),
//           React.createElement("br"),
//           React.createElement("button", null, 'Create Birthday')
//         )
//       )
//     );
//   }
// });
