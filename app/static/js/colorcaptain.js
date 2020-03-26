function read_clipboard() {
    var result;
    navigator.clipboard.readText().then(text => {
        colors = text.split(' ')
        $('#colors').empty()
        for (i=0; i<colors.length; i++){
            $('#colors').append('<div class="color col"></div>')
            $('div.color:eq(-1)').css("background", colors[i])
        }
    })
    
}

$('#readClipboard').click( function(e){
    read_clipboard()
})