import tweepy
import json
import sys

args = sys.argv
num = int(args[1])

json_open = open('./src/python/data.json', 'r')
json_load = json.load(json_open)

# メッセージの設定
tweet_content = json_load['data']['wiki'][num]['text'][:100]
tweet_content += "\n\n"
tweet_content += "答え"
tweet_content += "\n"
tweet_content += "https://bit.ly/3rkfH7L"
tweet_content += "\n"
tweet_content += json_load['data']['wiki'][num]['url']
print(tweet_content)
 
# 各種APIキーを設定
api_key ="dTPf8qMB9Ysf45RDaU7aUL2tH"
api_secret_key ="PQOhVheq5ceMHFO2K7qt5YWV76yiRksxO1wc8B7x2F1L6BWdl3"
access_token="1463847942612209670-kj5O8X5jV85UQCgMiacynbf4fMpasn"
access_token_secret="VPcixYgDsAqUdE9KE6ZDCUi29IJD7FyAwLSU9AVuJMpvH"

# Twitterオブジェクトの生成
auth = tweepy.OAuthHandler(api_key , api_secret_key)
auth.set_access_token(access_token, access_token_secret)
api = tweepy.API(auth)

# ツイートの実行
api.update_status(tweet_content)