import React from 'react'
import { IconStyle } from './assets/iconfont/iconfont'
import { GlobalStyle } from './style'
import { renderRoutes } from 'react-router-config';//renderRoutes 读取路由配置转化为 Route 标签
import routes from './routes/index.js'
import { HashRouter } from 'react-router-dom'
import './App.less'

function App() {
  return (
    <HashRouter>
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      <div className="app">
        {renderRoutes(routes)}
      </div>
    </HashRouter>
  );
}

export default App;
