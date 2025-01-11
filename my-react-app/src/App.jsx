import AppRoutes from './routes/AppRoutes';

/**
 * The top-level App component.
 * Renders the routes inside a simple container.
 */
function App() {
  return (
    <div>
      {/* All routes are handled in AppRoutes */}
      <AppRoutes />
    </div>
  );
}

export default App;
