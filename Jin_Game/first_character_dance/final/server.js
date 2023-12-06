const express = require('express');
const path = require('path');
// const fetch = require('node-fetch');
// const { fetch } = await import('node-fetch');
const cheerio = require('cheerio');
const qianfan = require('./qianfan'); 
async function init() {
    const { fetch } = await import('node-fetch');
    // 你的代码逻辑
}

init();

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

app.get('/updateContent', async (req, res) => {
    try {
        const context = req.query.context;  // 从请求中获取参数
    // const context = "在一个不情不愿的婚礼现场，作为新娘，心中装着另一个人，但必须虚与委蛇，她内心自说自话着";
        // 调用 dialogueGenerate 函数
        qianfan.dialogueGenerate(context, function(error, result) {
        // 将结果更新到名为"大婚台词"的元素
        res.send(result);
      });
  
    } catch (err) {
      res.status(500).send('Failed to update content');
    }
});

// 启动服务器
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});