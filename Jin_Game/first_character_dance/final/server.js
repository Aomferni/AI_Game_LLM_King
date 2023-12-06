const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const cheerio = require('cheerio');

const app = express();
const port = 3000; // 您可以选择任何您喜欢的端口号

// 指定impress.js项目所在的目录
const impressJsPath = path.join(__dirname, './');

// 设置Express静态文件中间件，用于提供impress.js项目的静态文件
app.use(express.static(impressJsPath));

// 创建路由处理器，用于提供impress.js项目的入口文件
app.get('/', (req, res) => {
  res.sendFile(path.join(impressJsPath, 'index.html')); // 假设您的入口文件为index.html
});

app.get('/modifyContent', async (req, res) => {
    try {
      // 调用在线API
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
  
      // 读取静态HTML文件
      const filepath = path.join(__dirname, 'path_to_your_static_html_file');
      const html = await readFile(filepath, 'utf8');
  
      // 使用cheerio库来修改HTML内容
      const $ = cheerio.load(html);
      $('#target-element').text(data.newContent);  // 将目标元素的内容修改为从API获取的新内容
  
      // 将修改后的HTML发送给浏览器
      res.send($.html());
    } catch (err) {
      res.status(500).send('Failed to modify content');
    }
  });

// 启动服务器
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});