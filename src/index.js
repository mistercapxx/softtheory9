import message from './message';


class Message{
    showMessage() {
        alert(message());
    }
}
const mess = new Message();
mess.showMessage();
// const mess = message();
// alert(mess);