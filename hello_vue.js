var data = {
    message: 'please type!'
}


var app = new Vue({
  el: '#app',
  data: data,
    render: (element) =>{
        return element("ol",
            [
                element("li","item 1"),
                element("li","item 2"),
                element("li","item 3")
            ]
            );
    }
})


// function doAction(event) {
//     data.message = event.target.value;
// }
function doAction() {
    data.message = "You Clicked!!!";
}
