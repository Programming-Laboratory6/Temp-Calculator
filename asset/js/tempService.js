var tempService = {
    
    takeCall: function(celsius, callback) {
        $.post('services/temp.action.php',
               {celsius: celsius},
               function(data){
                    callback(data);
                });
            
    }
}