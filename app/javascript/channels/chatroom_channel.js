import consumer from "./consumer"

consumer.subscriptions.create("ChatroomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    $('#message-container').append(data.mod_message)
    scroll_bottom()
  }
});

function scroll_bottom(){
  if($('#messages').length>0){
      $('#messages').scrollTop($('#messages')[0].scrollHeight);
  }
}
