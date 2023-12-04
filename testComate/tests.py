# 调用千帆大模型能力
import requests
import json
import keys

API_KEY = keys.get_API_key()
SECRET_KEY = keys.get_secret_key()

"""
调用AI助手写一篇短篇小说，并输出结果。

Args:
    无需传入参数。

Returns:
    无返回值，输出结果为AI助手生成的短篇小说文本。

"""
def main():
    # 构建访问AI助手的URL
    url = "https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/ernie_bot_8k?access_token=" + get_access_token()

    # 构建请求体
    payload = json.dumps({
        "messages": [
            {
                "role": "user",
                "content": "我想写一篇短篇小说，应该学习些什么内容"
            }
        ],
        "system": "你是一个优秀的短篇小说家，且很擅长教授别人写短篇小说",
        "disable_search": False,
        "enable_citation": True
    })

    # 构建请求头
    headers = {
        'Content-Type': 'application/json'
    }

    # 发起POST请求，调用AI助手生成回复
    response = requests.request("POST", url, headers=headers, data=payload)

    # 输出AI助手生成的文本
    print(response.text)
    

def get_access_token():
    """
    使用 AK，SK 生成鉴权签名（Access Token）
    :return: access_token，或是None(如果错误)
    """
    # 定义请求的URL
    url = "https://aip.baidubce.com/oauth/2.0/token"
    # 定义请求的参数
    params = {"grant_type": "client_credentials", "client_id": API_KEY, "client_secret": SECRET_KEY}
    # 使用POST方法发送请求，并将返回的JSON结果中获取access_token字段的值转换为字符串后返回
    return str(requests.post(url, params=params).json().get("access_token"))

if __name__ == '__main__':
    main()
