/*
Publisher Subscriber Pattern allows us to subscribe some functionalities for any user defined event in our 
application and later on to execute all subscribed functionalities when that same event gets published. 
Subscriber also has the ability to opt out of any event as per their convenience.
*/ 
var pubSub = (function (){
	var events = {};
	var instance = null;
	function createPubSub(){
		this.subscribe = function(eventName,listenerFn){
			if(events.hasOwnProperty(eventName)){
				events[eventName].push(listenerFn);
			}else{
				events[eventName] = [listenerFn];
			}
			return {
				remove:function(){
					events[eventName] = events[eventName].filter(function(fn){
						return fn!=listenerFn;
					});
				}
			}
		};
		this.publish = function(eventName,payload){
			if(!events.hasOwnProperty(eventName)){
				return;
			}
			events[eventName].forEach(function(listenerFn){
				listenerFn(payload || {});
			});
		}
	}

	return {
		createPubSub:function(){
			if(instance == null){
				instance = new createPubSub();
			}
			return instance;
		}
	}
})();

//Sample Usage
var pubSubInstance = pubSub.createPubSub();
var subscriber1 = pubSubInstance.subscribe('GET_NAME',function(payload){
	console.log("subscriber 1",payload);
});

var subscriber2 = pubSubInstance.subscribe('GET_NAME',function(payload){
	console.log("subscriber 2",payload);
});
var subscriber3 = pubSubInstance.subscribe('GET_NAME',function(payload){
	console.log("subscriber 3",payload);
});

setTimeout(function () {
	pubSubInstance.publish('GET_NAME',{"name":"sandeep"});
	subscriber1.remove();
	subscriber2.remove();
	pubSubInstance.publish('GET_NAME',{"name":"sandeep"});

},1000);