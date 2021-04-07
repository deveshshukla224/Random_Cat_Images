$("#btn").click(function(){
    $.getJSON("https://aws.random.cat/meow")
        .done(function(data){
            $('#catImg').attr("src", data.file);
        })
        .fail(function(){
            alert("REQUEST IS NOT POSSIBLE");
        })
})
