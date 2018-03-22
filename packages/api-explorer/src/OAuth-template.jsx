const React = require('react');
const PropTypes = require('prop-types');

function OAuthTemplate({ loginDropdownID }) {
  return (
    <script type="text/javascript" id={`login${loginDropdownID}`}>
      <div id="loginDropdown" className="ns-popover-tooltip">
        <div className="triangle" />
        <div className="ns-triangle" />
        <div className="pad">
          <div className="text-center">
            Authenticate to personalize this page
            <a className="btn btn-primary" href="/outh" target="_self">
              Authenticate
            </a>
          </div>
        </div>
      </div>
    </script>
  );
}

module.exports = OAuthTemplate;

OAuthTemplate.propTypes = {
  loginDropdownID: PropTypes.number.isRequired,
};
