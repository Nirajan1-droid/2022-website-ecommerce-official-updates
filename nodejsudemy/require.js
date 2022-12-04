curl 'https://api.twilio.com/2010-04-01/Accounts/ACbf88048240aaef154dee187ef186d22f/Messages.json' -X POST \
--data-urlencode 'To=+9779847106343' \
--data-urlencode 'MessagingServiceSid=MGec7a72be4871922f8c840255a108ca6f' \
--data-urlencode 'Body=hello from API through twilio.com' \
-u ACbf88048240aaef154dee187ef186d22f:[AuthToken]