
new function (n) {
    this.socket = '';
    this.start = function (ws) {
        this.socket = new WebSocket(ws);
        this.socket.onopen = function (evt) {
            console.log('connect to server');
  
        }
        this.socket.onclose = function (data) {
            console.log('Close to server');
            $.notify("Mất kết nối tới máy chủ... Đang chờ kết nối lại.", "error");
            setTimeout(function () {
                location.reload();
            }, 3000);
        }
        this.socket.onerror = function (data) {
            console.log('khong the ket noi');
            $.notify("Mất kết nối tới máy chủ... Đang chờ kết nối lại.", "error");
            setTimeout(function () {
                location.reload();
            }, 3000);
        }
        
    }
  
    n.dn = this;
}(window, document);
