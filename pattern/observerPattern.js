function Subject(){
	this.observers = [];
}

Subject.prototype.addObserver = function(observer){
	this.observers.push(observer);
};

Subject.prototype.removeObserver = function(observer){
	this.observers = this.observers.filter(function(item){
		return item !== observer;
	});
};

Subject.prototype.notifyObservers = function(state){
	this.observers.forEach(function(observer){
		observer.update(state);
	});
};


//Sample Usage
function Stock(stockData){
	this.stockData = stockData;
}

Stock.prototype = new Subject();
Stock.prototype.constructor = Stock;
Stock.prototype.updateStock = function(stockData){
	this.stockData = stockData;
	this.notifyObservers(stockData);
}
Stock.prototype.notify = function(){
	this.notifyObservers(this.stockData);
}

function broker(){
	this.stock = null;
}

broker.prototype.update = function(updatedStock){
	this.stock = updatedStock;
	console.log("broker got updated stock", this.stock);
};

function InvestmentFirm(){
	this.currentStock = null;
}

InvestmentFirm.prototype.update = function(updatedStock){
	this.currentStock = updatedStock;
	console.log("InvestmentFirm got updated stock", this.currentStock);
};

var stock = new Stock({google:45.6,apple:50.7});
var smallBroker = new broker();
var bigInvestmentFirm = new InvestmentFirm();
stock.addObserver(smallBroker);
stock.addObserver(bigInvestmentFirm);
stock.notify();
setTimeout(function(){
	stock.updateStock({google:47.1,apple:51});
},1000);


