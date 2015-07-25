BirthdayForm = React.createClass({
  componentDidMount: function(){
    (function() {
      var triggerBttn = document.getElementById( 'trigger-overlay' );
      var  overlay = document.querySelector( 'div.overlay' );
      var  closeBttn = overlay.querySelector( 'button.overlay-close' );
        transEndEventNames = {
          'WebkitTransition': 'webkitTransitionEnd',
          'MozTransition': 'transitionend',
          'OTransition': 'oTransitionEnd',
          'msTransition': 'MSTransitionEnd',
          'transition': 'transitionend'
        },
        transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
        support = { transitions : Modernizr.csstransitions };

      function toggleOverlay() {
        if( classie.has( overlay, 'open' ) ) {
          classie.remove( overlay, 'open' );
          classie.add( overlay, 'close' );
          var onEndTransitionFn = function( ev ) {
            if( support.transitions ) {
              if( ev.propertyName !== 'visibility' ) return;
              this.removeEventListener( transEndEventName, onEndTransitionFn );
            }
            classie.remove( overlay, 'close' );
          };
          if( support.transitions ) {
            overlay.addEventListener( transEndEventName, onEndTransitionFn );
          }
          else {
            onEndTransitionFn();
          }
        }
        else if( !classie.has( overlay, 'close' ) ) {
          classie.add( overlay, 'open' );
          // $("#name").val("")
          // $("#birthdate").val("")
        }
      }

      triggerBttn.addEventListener( 'click', toggleOverlay );
      closeBttn.addEventListener( 'click', toggleOverlay );
    })();

  },

  componentWillReceiveProps: function(){
    console.log("yello")
  },
  render: function(){
    return (
      <div className="overlay overlay-slidedown">
        <button type="button" className="overlay-close">Close</button>
        <div id="new-form">
          <form id='birthday_form' className='form-horizontal'>
            <fieldset>
              <div className="form-group">
                <label htmlFor="name" className="col-lg-2 control-label">Name</label>
                <div className= "col-lg-10">
                  <input className="form-control"
                    placeholder= "Enter your name"
                    id= "name"
                    type= "text"
                    value= {this.props.name}
                    onChange= {this.props.nameChanged}/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="birthdate" className="col-lg-2 control-label">Birthdate</label>
                <div className= "col-lg-10">
                  <input className="form-control pickadate"
                    placeholder= "Enter your birthdate"
                    id= "birthdate"
                    type= "date"
                    value= {this.props.birthdate}
                    onChange= {this.props.birthdateChanged}/>
                </div>
              </div>
              <div className= "form-group">
                <div className= "col-lg-10 col-lg-offset-2">
                  <input type="button" className= "btn btn-primary" value= "Save" onClick= {this.props.onFormSubmit}/>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    )
  }
})
