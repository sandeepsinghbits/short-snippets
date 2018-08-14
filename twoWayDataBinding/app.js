(function() {
    var elements = document.querySelectorAll('[two-way-bind]');
    var  scope = {};
    elements.forEach(function(element) {
    	var propertyName = element.getAttribute('two-way-bind');
        bindPropToScope(propertyName);
        if(element.type === 'text'){    
            element.onkeyup = function(){
                scope[propertyName] = element.value;
            }
        };

        function bindPropToScope(prop){
            if(!scope.hasOwnProperty(prop)){
                var value;
                Object.defineProperty(scope, prop, {
                    set: function (newValue) {
                        value = newValue;
                        elements.forEach(function(element){
                            if(element.getAttribute('two-way-bind') === prop){
                                if(element.type === 'text'){
                                    element.value = newValue;
                                }
                                else if(!element.type){
                                    element.innerHTML = newValue;
                                }
                            }
                        });
                    },
                    get: function(){
                        return value;
                    },
                    enumerable: true
                });
            }
        }
    });

    changeUserName = function() {
        scope.fname = 'firstname changed';
    }

   
})();