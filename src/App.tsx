// App.tsx
import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './router'; // 导入路由配置

function App() {
  const routing = useRoutes(routes);
  return (
    <div>
      {routing}
    </div>
  );
}

export default App;
