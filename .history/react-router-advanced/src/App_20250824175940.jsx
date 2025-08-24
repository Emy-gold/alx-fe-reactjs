import ProtectedRoute from './components/ProtectedRoute.jsx';

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

