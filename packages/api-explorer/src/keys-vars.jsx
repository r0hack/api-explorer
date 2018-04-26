const React = require('react');
const PropTypes = require('prop-types');
const Popover = require('react-simple-popover');
const Cookie = require('js-cookie');
const OAuthDropDown = require('./OAuth-template');

const user = {
  oauthEnabled: false,
  isAdmin: true,
  user: { email: 'marc@readme.io', name: 'Marc Cuva' },
  loggedIn: true,
  _id: '5ab53abd12d2490074723cff',
  search: {
    token:
      'MGU3NzUwMmUxNGU2N2U5ZjA3M2YzZDRjOTZiYzFmMDU2NjViYjcwMzdlNDA5Yzg3MDZhNmY0ZWNjNTE5ZmIyYXRhZ0ZpbHRlcnM9cHJvamVjdDo1YWIzZjMwZjc5ZWNiMDAwMTI2OWQ0NDIsKGhpZGRlbjpub25lLGhpZGRlbjpmYWxzZSksKHZlcnNpb246bm9uZSx2ZXJzaW9uOjVhYjNmMzEwNzllY2IwMDAxMjY5ZDQ0NSk=',
    filters:
      'tagFilters=project:5ab3f30f79ecb0001269d442,(hidden:none,hidden:false),(version:none,version:5ab3f31079ecb0001269d445)',
    app: 'T28YKFATPY',
    modules: {
      landing: true,
      docs: true,
      examples: true,
      reference: false,
      blog: true,
      discuss: true,
      suggested_edits: true,
    },
  },
};

class KeyVars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      selected: window.localStorage.selected_app ? window.localStorage.selected_app : 0,
      isDefault: true,
      showDropdown: !!this.state.isDefault && !!user.oauthEnabled,
      value: '',
      dropdown: false,
      project_names: [],
      initializing: true,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.select = this.select.bind(this);
    this.updateSelected = this.updateSelected.bind(this);
    this.conditionsValues = this.conditionsValues.bind(this);
  }
  conditionsValues() {
    try {
      const cookie = Cookie.getJSON('user_data');
      if (this.state.selected >= cookie.keys.length) {
        this.setState({
          selected: 0,
          value: cookie.keys[this.state.selected][variableName],
          dropdown: cookie.keys.length > 1,
          project_names: cookie.keys.map(projectName => projectName.name),
        });
      }
    } catch (e) {
      // set to name of variable from api calls
      this.setState({ value: data });
    }
  }

  updateSelected(i) {
    this.setState({
      selected: i,
      value: cookie.keys[i][variableName],
    });
  }

  handleClick() {
    this.setState({ open: !this.state.open });
  }

  handleClose() {
    this.setState({ open: false });
  }

  select(i) {
    this.setState({ selected: (window.localStorage.selected_app = i) });
  }

  render() {
    const loginDropdownID = Math.floor(Math.random() * 1000);
    const id = Math.floor(Math.random() * 1000);

    return (
      <span>
        {!this.state.dropdown ? (
          <span
            className="variable-underline"
            role="textbox"
            tabIndex="0"
            onClick={this.handleClick()}
          >
            {!this.state.showDropdown ? (
              <span>{this.state.value}</span>
            ) : (
              <Popover
                show={this.state.open}
                style="ns-popover-auth-theme"
                placement="bottom|center"
                container={`login${loginDropdownID}`}
                hideWithOutsideClick
                onHide={this.handleClose()}
              >
                {this.state.value}
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
              {this.state.value}
            </Popover>
          </span>
        )}
        {/* Project Picker Dropdown */}
        <script type="text/javascript" id={`variable${id}`}>
          <div id="variableDropdown" className="ns-popover-tooltip">
            <div className="ns-triangle" />
            <div className="triangle" />
            <ul>
              {this.state.project_names.map((name, index) => (
                <li>
                  <a
                    href=""
                    style={{ active: index === this.state.selected }}
                    onClick={this.updateSelected(index)}
                  >
                    {name}
                  </a>
                </li>
              ))}
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
