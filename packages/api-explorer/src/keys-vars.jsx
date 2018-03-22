const React = require('react');
const PropTypes = require('prop-types');
const Popover = require('react-simple-popover');
const OAuthDropDown = require('./OAuth-template');

class KeyVars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleClick() {
    this.setState({ open: !this.state.open });
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    const loginDropdownID = Math.floor(Math.random() * 1000);
    const id = Math.floor(Math.random() * 1000);

    return (
      <span>
        {!dropdown ? (
          <span
            className="variable-underline"
            role="textbox"
            tabIndex="0"
            onClick={this.handleClick()}
          >
            {!showDropdown ? (
              <span>{value}</span>
            ) : (
              <Popover
                show={this.state.open}
                style="ns-popover-auth-theme"
                placement="bottom|center"
                container={`login${loginDropdownID}`}
                hideWithOutsideClick
                onHide={this.handleClose()}
              >
                {value}
              </Popover>
            )}
          </span>
        ) : (
          <span
            className="variable-underline"
            role="textbox"
            tabIndex="0"
            onClick={this.handleClick()}
          >
            <Popover
              show={this.state.open}
              style="ns-popover-dropdown-theme"
              placement="bottom|right"
              container={`variable${id}`}
              hideWithOutsideClick
              onHide={this.handleClose()}
            >
              {value}
            </Popover>
          </span>
        )}
        {/* Project Picker Dropdown */}
        <script type="text/javascript" id={`variable${id}`}>
          <div id="variableDropdown" className="ns-popover-tooltip">
            <div className="ns-triangle" />
            <div className="triange" />
            <ul>
              {
                for (var name in project_names) {
                  return (
                    <li>
                      <a href=''>{name}</a>
                    </li>
                  )
                }
              }
            </ul>
          </div>
        </script>
        <OAuthDropDown />
      </span>
    );
  }
}

module.exports = KeyVars;

KeyVars.propTypes = {};
