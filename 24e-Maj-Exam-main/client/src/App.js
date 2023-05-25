import logo from './logo.svg';
import './App.css';
import library from './dataHandler'

function App() {
  console.log(library)
  return (
    <div className="App">
      <header className="page-header">
        <p>Booksters website</p>
        <div className="login-button">
          <p>Browsing as a guest...</p>
          <button>Sign in</button>
        </div>
      </header>
      <div className="page-content">
        <form>
          <label>
            Search query...
            <input type="text" name="name" />
          </label>
        </form>

        <table>
          <tr>
            <th>Book title</th>
            <th>Book author</th>
            <th>Availability</th>
          </tr>
          <tr>
            <th>lorem ipsum</th>
            <th>lorem ipsum</th>
            <th>2 left</th>
          </tr>
          <tr>
            <th>lorem ipsum</th>
            <th>lorem ipsum</th>
            <th>2 left</th>
          </tr>
          <tr>            
            <th>lorem ipsum</th>
            <th>lorem ipsum</th>
            <th>Out of stock</th>
          </tr>
          <tr>
            <th>lorem ipsum</th>
            <th>lorem ipsum</th>
            <th>2 left</th>
          </tr>
          <tr>
            <th>lorem ipsum</th>
            <th>lorem ipsum</th>
            <th>Out of stock</th>
          </tr>
          <tr>
            <th>lorem ipsum</th>
            <th>lorem ipsum</th>
            <th>2 left</th>
          </tr>
          <tr>
            <th>lorem ipsum</th>
            <th>lorem ipsum</th>
            <th>Out of stock</th>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
