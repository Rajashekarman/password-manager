import './App.css'

const App = () => (
  <div className="bg-container">
    <img
      src="
https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png "
      alt="app logoś"
    />
    <div className="top-container">
      <div className="pwd-container">
        <h1 className="heading">Add New Password</h1>
        <form type="submit">
          <img
            src="
https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
            alt="website"
          />
          <input type="text" placeholder="Enter Website" />
          <br />
          <img
            src="
https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
            alt="username"
          />
          <input type="text" placeholder="Enter Username" />
          <br />
          <img
            src="
https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
            alt="password"
          />
          <input type="password" placeholder="Enter Password" />
          <br />
          <button type="submit" className="bttn">
            Add
          </button>
        </form>
      </div>
      <img
        src="
https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
        alt="password manager"
        className="image"
      />
    </div>
    <div className="down-container">
      <div className="view-pwd-cont">
        <h1 className="heading">Your Passwords</h1>
        <p>0</p>
        <img
          src="
https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
          alt="search"
        />
        <input type="search" />
        <input type="checkbox" id="checkbox" />
        <label htmlFor="checkbox">Show passwords</label>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        alt="no passwords"
        className="image"
      />
      <p>No Passwords</p>
      {}
    </div>
  </div>
)

export default App
