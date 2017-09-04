(function(){
    var n = "ime"
	function Person(name){
	var _this ={}
	_this._name = name;
	_this.sayHello = function(){
		alert("PHello"+_this._name+n);
	}
	return _this;
    }
    window.Person = Person;
}())

function Teacher(name){
	var _this = Person(name);
	var surperSay = _this.sayHello;
	_this.sayHello = function(){
        surperSay.call(_this);
		alert("Thello"+_this._name);
	}
	return _this;
}

var t = Teacher("iwen");
t.sayHello();