var tempController = {
    
    init: function() {
        tempController.setForm();
    },
    
    setForm: function() {
        var form = document.querySelector('form');
        form.addEventListener('submit', function(event){
            tempController.calculeTemp(form);
            event.preventDefault();
        });
    },
    
    calculeTemp: function(form) {
        
        var celsius = form.celsius.value,
            data = 0;
            
        var callback = function(data) {
            tempController.showResult(data);
        };
        
        tempService.takeCall(celsius, callback);    
    },
    
    showResult: function(data) {
        var spanResult = document.querySelector('.result');
		spanResult.innerHTML = data;
    }
}
    
tempController.init();