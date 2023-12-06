# 前言
这是一个为了参加百度智能云，千帆大模型的游戏开发比赛——《寻找游戏大模王》而创作的作品。
1. 这是个非常简单粗暴的demo，还有很多内容因为作者的技术当前的技术有限，没有能很好地实现，但是已经有了雏形，且时间已经不足了；


# 游戏介绍
根据想写的小说改编，只做了第一章节的简单几页，讲的是一个新娘在婚礼上心不在焉，通过对话可以探索到她曾经是舞后、在法国、日本都曾学习舞蹈，还当过翻译女官，但其实心中另有他人，如果探索的心力值变成负数，就会梦醒，发现自己身处四面透风的马厩当中，即将熬不过这个冬天...

# 开发环境
1. impress.js
2. node.js
3. baidu comate
4. zaiwen.top GPT3.5-16k
5. macOS
6. 《网页游戏开发秘笈》-第二章的源代码的基础上魔改

# 项目文件介绍
1. Jin_Game/ 是游戏主目录，进入到final/子目录下，就可以看到全部的源代码，其中还有很多没有删除的内容
2. references/ 中是参考的资料以及一些笔记
3. some_try/ 是一些最开始使用 comate + 千帆接口测试 以及用 GPT 直接编写的游戏代码，但是因为时间不够，我就只是测试了一下我的需求是否可以通过网页游戏满足

# 游戏演示
1. [演示视频 & 创作过程]()会发到B站上的
2. 所有的源代码都在这里了，除了key相关的内容，需要大家使用自己的key
   1. 在 JIn_Game/final/ 目录下，创建一个config.js文件，内容如下：
   ```javascript
   // config.js
    module.exports = {
        AK: "你的千帆AK",
        SK: "你的千帆SK",
        ER4_0_URL: "https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/completions_pro?access_token=你的access_token"
    };
    ```
    2. 之后就可以在finall/目录下运行node server.js，就可以看到 `Server is running at http://localhost:3000/`，然后打开浏览器输入这个地址，就可以看到游戏了