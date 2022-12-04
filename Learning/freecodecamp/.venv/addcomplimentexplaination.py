@app.route("/add-compliment", methods=["POST"])
#when add-compliment function get called then the method for data rendering is POST
# add-compliment is the function which we need to create
#we are sending the message and we've already accessed the ID and Token 
# sender , reciver and the body is necessary which is the name in the html , api connect ko lagi name id nai use garinxa 


def add_compliment():
    # sender = request.values.get('sender', 'Someone')
    
    sender = request.values.get('sender','Someone')

    receiver = request.values.get('receiver', 'Someone')
    compliment = request.values.get('compliment', 'wonderful')
    to = request.values.get('to')
    body = f'{sender} says: {receiver} is {compliment}. See more compliments at {request.url_root}'
    send_message(to, body)
    flash('Your message was successfully sent')
    return redirect(url_for('index'))

