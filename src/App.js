import BookContextProvider from "./contexts/BookContext";
import NavBar from "./components/NavBar";
import BookList from "./components/BookList";
import NewBookForm from "./components/BookForm";
import AuthProvider from "./contexts/AuthContext";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <BookContextProvider>
          <AuthProvider>
            <NavBar />
            <BookList />
            <NewBookForm />
          </AuthProvider>
        </BookContextProvider>
      </Router>
    </div>
  );
}

export default App;
