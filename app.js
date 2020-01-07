$(document).ready(function(){
    $('#buscar').on('click',function(){
        var letra = $('#palabra').val();
        console.log(letra);

        $.ajax({
            type: "GET",
            url: "https://www.flickr.com/services/feeds/photos_public.gne?tags="+letra+"&tagmode=any&format=json&jsoncallback=?",
            data: "data",
            dataType: "json",
            success: function(response){
                console.log(response);
                $.each(response.items, function (i, elemento) { 
                    var imagen = elemento.media.m;
                    $('#contenido').append(`
                        <div class="col-3 my-3">
                            <img src="${imagen}" alt="" class="img-fluid">
                        </div>
                    `)
                });
            }
        });
    });
});