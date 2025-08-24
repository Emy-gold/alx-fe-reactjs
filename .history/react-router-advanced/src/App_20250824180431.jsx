import ProtectedRoute from './components/ProtectedRoute.jsx';

function App() {

  <Routes>
    <Route path="/" element={<Home />} />
    <Route
      path="/profile/*"
      element={
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      }
    />
    <Route path="/login" element={<Login />} />
    <Route path="/blog/:id" element={<BlogPost />} />
  </Routes>

}

export default App;

