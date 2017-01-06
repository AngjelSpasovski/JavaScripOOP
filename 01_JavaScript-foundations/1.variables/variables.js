/* JavaScripr VARIABLES*/

/*1. Basics*/
/*****************************************************************/
	var color = "red";

	var myDivBasic = document.getElementById("myDivBasic");
	myDivBasic.style.background = "black";
	myDivBasic.style.color ="#ffffff";
/*****************************************************************/

/*2. Names*/
/*****************************************************************/
	// Имињата на вариаблите мора да започнуваат со A-Z, a-z, _ или $
	// Несмеат никако да почнуваат со број

	// Valid Variables
	var car = "Toyota";
	var Color = "blue";
	var _myUnderscoreVariable = "something";
	var $SpecialNameDolar = 1;
	var a123345667 = "Moze i vaka da pocnuva so bukva";


	// Invalid Variables
	/*
		var 3color = "read green blue";
		var winning% = 30;
		var person-name = "Jim";
		var @you = "are awesome";
	*/

	// Резервирани зборови кои НЕ СМЕЕМЕ да ги иницијализираме
	/*
		var if; 		var else; 		var debugger;
		var finnaly; 	var continue; 	var default; 
		var switch; 	var brake; 		var delete;
		var case; 		var catch;		var do;
		var for;		var in;			var instanceof;
		var new;		var return;		var this;
		var throw;		var try;		var typeof;
		var var;		var void;		var while;
		var with;
	*/

	// Можни Feature резервирани зборови кои може да се користат во новитеверзии
	/*
		var class;		var export;		var extend;		var super;
	*/

	// Исто како и овие резервирани зборови кои на некои browser-и можное да равотат
	/*
		var package;	var yield;		var protected;	var let;
		var private;	var static;		var public;
	*/
/*****************************************************************/

/*3. Null and undefined*/
/*****************************************************************/
	// Null & undefined are folse values
	// SAME but DIFFERENT
console.log("#_3 - Null and undefined ------------------");
	// креираме неиницијализирна вариабла.
	var myUndefinedVar;

	// кога ќе ја извршиме во конзола вариаблата ќе има вредност 'undefined'.
	// 'undefined' претставува вредност која никогаш не е дефинирана.
	console.log(typeof myUndefinedVar);

	// вака тестираме дали навивстина вариаблата е string "undefined".
	// кога ќе се изврши споредбата ќе добиеме резултат "true".
	console.log(typeof myUndefinedVar === "undefined");

	// ПОГРЕШНО тестирање дали е "undefined" со споредба на "keyword undefined".
	// можно е некаде во кодот да тој keyword биде иницијализиран и да се направи конфузија.
	console.log(typeof myUndefinedVar === undefined);
	

	// ова ќе испечати "Else" затоа што вредността на myUndefinedVar e "undefined".
	if(myUndefinedVar){
		console.log("True (myUndefinedVar)");
	} else {
		console.log("False (myUndefinedVar)");
	}
	
	// сетираме null вредност.
	var myNullVar = null;

	// И ова ќе испечати "Else" затоа што вредността на myNullVar e "null".
	// И бидејќи и дветевредности се негативни вредности, затоа конзолата од "else" се извршува.
	if(myNullVar){
		console.log("True (myNullVar)");
	} else {
		console.log("False (myNullVar)");
	}
	
console.log("==========");
	if(myUndefinedVar == null){
		console.log("True (myUndefinedVar == null)");
	} else {
		console.log("False (myUndefinedVar == null)");
	}
	// но,кога ќе напраиме проверка(===) а не споредба(==) ќе видиме дека тие се исти,но различни.
	if(myUndefinedVar === null){
		console.log("True (myUndefinedVar === null)");
	} else {
		console.log("False (myUndefinedVar === null)");
	}
console.log("==========");
/*****************************************************************/

/*4. Scope */
/*****************************************************************/
console.log("#_4 - Scope ------------------");
	
	var world = "World!"

	function sayHello(){
		var hello = "Hello ";
		console.log(hello + world);
	}
	sayHello();

	// ќе се изврши овој повик бидејки world е глобална вариабла
	console.log("Povik na variablata world: " + world);
	
	// ќе појави грешка со порака "hello is not defined" бидејки е локална вариабла на sayHello функцијата.
	console.log("Povik na variablata hello: ne e vozmozen bidejki e lokalna variabla na sayHello()");


	var world2 = "World2"

	function sayHello2(){
		var hello2 = "Hello2 "

		function inner(){
			var extra = " Everybody2 !!!"
			console.log(hello2 + world2 + extra);
		}
		inner();
	}
	sayHello2();

	console.log("var world2 e globalna variabla nadvor od sayHello()");
	console.log("var hello2 e lokalna variabla vo sayHello()");
	console.log("var hello2 e globalna variabla nadvor od inner()");
	console.log("var extra e lokalna variabla vo inner()");

/*****************************************************************/

/*5. Shadowing */
/*****************************************************************/
console.log("#_5 - Shadowing ------------------");
	// Two variable in two different scopes share same name
	// Секогаш кога декларираме глобална вариабла, 
	// треба да си ја декларираме со резервираниот збор var
	var myColor = "blue";
	console.log("myColor pred myFunct() : " + myColor);
	
	// Глобална вариабла 
	var myNumber = 32;

	function myFunct(){
		var myColor = "green";
		// ПОГРЕШНО!!!
		// декларираме глобална вариабла внатре во child функција
		// Ако сакаме да е глобална ќе ја декларираме надвор од функцијата.
		// myNumber = 32; 
		console.log("myColor vnatre vo myFunct() : " + myColor);
	}
	myFunct(); // повик на функцијата

	// овде се повикува повторно глобалната вариабла myColor.
	// Безразлика дали ја имаме некаде локално иницијализирано со исто име 
	// некаде во некоја друга функција.
	console.log("myColor AFTER myFunct() : " + myColor);
	console.log("myNumber AFTER myFunct() : " + myNumber);

/*****************************************************************/

/*6. Hoisting */
/*****************************************************************/
console.log("#_6 - Hoisting ------------------");
	// function scope
	function doSomething(doit){
		var someColor = "red";
		var someNumber;
		if(doit){
			var someColor = "green";
			// вариаблата која е креирана во if-от е глобална вариабла во таа функција
			// и ја менува глобално вредността ако условот е исполнет.
			// Исто како да е напишана вариаблата без клучниот збор var.
			someNumber = 10;
			console.log("Color in if(){} " + someColor);
		}
		console.log("Color AFTER if(){} " + someColor + " " + someNumber);
	}
	doSomething(true);
	doSomething(false);