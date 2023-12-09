import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { loadRoutes } from '../services/dynamicRoutes/loadRoutes';

interface RouteDefinition {
  path: string;
  component: React.ReactNode;
}


const GatewayRoutes: React.FC = () => {
  const [routes, setRoutes] = useState<RouteDefinition[]>([]);

  const fetchRoutes = async () => {
    try {
      const loadedRoutes = await loadRoutes();
      setRoutes(loadedRoutes);
    } catch (error) {
      console.error("Error loading routes:", error);
    }
  };
  useEffect(() => {

    fetchRoutes();
  }, []);
  return (

      <Router>
        <Routes>  
          {/* render modules routes */}
          {routes.map((route, index) => (
                    <Route
                      key={index}
                      path={route.path}
                      element={route.component}  />
                  ))}

          <Route path="*" element={<div>default</div>} />
        </Routes>
        </Router>
  );
};

export default GatewayRoutes;
