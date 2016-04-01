$(function(){
    debugger
    $('.del').click(function(e){
        debugger
        var target = $(e.target)
        var id=target.data('id')
        var tr = $('.item-id-'+id)
        
        $.ajax({
            type:'DELETE',
            URL:'/admin/list?id'+id
        })
        .done(function(result){
            if(result.success===1){
                if(tr.length>0){
                    tr.remove()
                }
            }
        })
    })
})