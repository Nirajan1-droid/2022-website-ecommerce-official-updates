from twilio.rest import Client
client = Client("ACbf88048240aaef154dee187ef186d22f","e497bd4ce0e8dbd7e9bda9e617fb0b87")
 
 
# python version is synchronous
# that's why we can iterate 

for msg in client.messages.list():
    print(f"deleting:{msg.body}")
    msg.delete()
#    print(msg.body)
#it is for creating thing 
# msg = client.messages.create(
#     to="+9779749411747",
#     from_="+19593000406",
#     body="hello from python"
# )

# f let you print the variable that are available in scope with the expression passed into it just like the template plate in js $ pass garne word thyo 

print(f"created a new message:{msg.sid}")