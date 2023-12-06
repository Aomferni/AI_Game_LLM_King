const request = require('request')
const config = require('./config'); 
const axios = require('axios');  

var dialogue1 = "在一个不情不愿的婚礼现场，作为新娘，心中装着另一个人，但必须虚与委蛇，她内心自说自话着";
var prompt_assessment = "**你是一个友好度给分系统**，会根据用户话语的友好度给出 -2~2 分，**仅返回分数，不要评论！！！不要文字！！！**；比如 '你混蛋' = -2";
var prompt_dialogue_generation = "**你是一个台词生成器**，会根据给定的上下文生成台词，**只给出台词，不需要句号和双引号**，**不超过20个字，只给出一个版本**";

async function countValue(message) {
    var options = {
        'method': 'POST',
        'url': config.ER4_0_URL,
        'headers': {
                'Content-Type': 'application/json'
        },
        body: JSON.stringify({
                "messages": [
                    {
                        "role": "user",
                        "content": message
                    }
                ],
                "system": prompt_assessment,
                "disable_search": false,
                "enable_citation": false
        })

    };

    try {
        const response = await request(options);
        return JSON.parse(response.body).result;
    } catch (error) {
        throw new Error(error);
    }
}

async function dialogueGenerate(context, callback) {
    var options = {
        'method': 'POST',
        'url': config.ER4_0_URL,
        'headers': {
                'Content-Type': 'application/json'
        },
        body: JSON.stringify({
                "messages": [
                    {
                        "role": "user",
                        "content": context
                    }
                ],
                "system": prompt_dialogue_generation,
                "disable_search": false,
                "enable_citation": false
        })

    };

    // request(options, function (error, response) {
    //     if (error) throw new Error(error);
    //     console.log( JSON.parse(response.body).result);
    // });
    // 发起请求
    request(options, function (error, response) {
        if (error) {
            // 如果出现错误，通过回调函数传递错误信息
            callback(error, null);
        } else {
            // 如果请求成功，通过回调函数传递返回结果
            const result = JSON.parse(response.body).result;
            callback(null, result);
        }
    });
}

module.exports = {
    countValue,
    dialogueGenerate
};
// console.log(countValue("你真没用"));
// // countValue("我好无聊");
// dialogueGenerate(dialogue1);
// window.open('index.html', '_blank');