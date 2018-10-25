# -App
用微信小程序结合百度地图SDK接口开发预测当前和未来四天天气的App<br/>
当前项目的结构<br/>
weather           <br/>  
│  app.js                      项目的入口文件 <br/>
│  app.json                     项目的依赖文件<br/>
│  app.wxss                       项目总的样式文件<br/>
│  project.config.json            <br/>  
│<br/>
├─pages                           页面<br/>
│  ├─assets                       图片资源文件<br/>
│  │  └─img<br/>
│  │          bg.png<br/>
│  │<br/>
│  ├─main                        天气预报主要的页面     <br/>
│  │      main.js                       逻辑业务入口文件<br/>
│  │      main.json                       
│  │      main.wxml                       页面的结构文件<br/>
│  │      main.wxss                         页面的样式文件<br/>
│  │
│  └─template                                 模板文件<br/>
│          itemtpl.wxml                       <br/>
│<br/>
└─utils<br>
        util.js<br/>
        结构主要分为上下两大部分：上为当日天气的温度，风向，风力，温馨提示，所在城市<br/>
        下为未来四天的风向，风力，最高温度，最低温度，天气状况

