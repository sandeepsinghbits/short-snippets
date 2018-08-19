let lruCache = (function(){
	function lruCache(limit){
		this.head = null;
		this.tail = null;
		this.map={};
		this.currentSize = 0;
		this.limit = limit || 10;
	}

	function setHead(node,that){
		var head = that.head;
		if(head){
			head.prev = node;
		}
		node.next = head;
		node.prev = null;
		that.head = node;
		if(that.tail ==null){
			that.tail = node;
		}
	}

	function createNode(key,value){
		return  {
			prev:null,
			next:null,
			key:key,
			value:value
		};
	}

	function removeNode(node,that){
		if(node.prev){
			node.prev.next = node.next;
		}
		if(node.next){
			node.next.prev = node.prev;
		}else{
			that.tail = node.prev;
		}

	}

	lruCache.prototype.retrieve = function(key){
		let node = this.map[key];
		if(node){
			removeNode(node,this);
			setHead(node,this);
			return node.value;

		}else{
			return -1;
		}
	}

	lruCache.prototype.set = function(key,value){
		let node = this.map[key];
		if(node){
			node.value = value;
			removeNode(node,this);
		}else{
			node = createNode(key,value);
			this.map[key] = node;
			if(this.currentSize == this.limit){
				delete this.map[this.tail.key];
				this.tail = this.tail.prev;
				this.tail.next = null;
			}else{
				this.currentSize++;
			}
		}

		setHead(node,this);
		
	};
	lruCache.prototype.clear = function(){
		this.head = null;
		this.tail = null;
		this.map={};
		this.currentSize=0;
	};

	return lruCache;
})();

//sample usage

var cache = new lruCache(3);
cache.set('a','A');
cache.set('b','B');
cache.set('c','C');
cache.retrieve('a');
cache.set('d','D');



