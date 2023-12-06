const request = require('request')
const config = require('./config'); 
const ER4_0_URL = 'https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/completions_pro?access_token=';

var dialogue1 = "在一个不情不愿的婚礼现场，作为新娘，心中装着另一个人，但必须虚与委蛇，她内心自说自话着";
var prompt_assessment = "**你是一个友好度给分系统**，会根据用户话语的友好度给出 -2~2 分，**仅返回分数，不要评论！！！不要文字！！！**；比如 '你混蛋' = -2";
var prompt_dialogue_generation = "**你是一个台词生成器**，会根据给定的上下文生成台词，**只给出台词**，**不超过20个字**";

async function countValue(message) {
    var options = {
        'method': 'POST',
        'url': ER4_0_URL + await getAccessToken(),
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
    // request(options, function (error, response) {
    //     if (error) throw new Error(error);
    //     console.log( JSON.parse(response.body).result);
    // });
}

async function dialogueGenerate(context) {
    var options = {
        'method': 'POST',
        'url': 'https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/completions_pro?access_token=' + await getAccessToken(),
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

    request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log( JSON.parse(response.body).result);
    });
}

/**
 * 使用 AK，SK 生成鉴权签名（Access Token）
 * @return string 鉴权签名信息（Access Token）
 */
function getAccessToken() {

    let options = {
        'method': 'POST',
        'url': 'https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=' + config.AK + '&client_secret=' + config.SK,
    }
    return new Promise((resolve, reject) => {
        request(options, (error, response) => {
            if (error) { reject(error) }
            else { resolve(JSON.parse(response.body).access_token) }
        })
    })
}

module.exports = {
    countValue,
    dialogueGenerate
};
// console.log(countValue("你真没用"));
// // LLMCountValue("我好无聊");
// dialogueGenerate(dialogue1);