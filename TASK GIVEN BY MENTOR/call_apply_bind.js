//METHODS OF JAVASCRIPT:-
  //CALL(),
  //APPLY(),
  //BIND() are methods of javascript
  
  //these three methods are used to control the invocation of the function

  //CALL() & APPLY() were introduced in ECMAScript 3
  //BIND() introduced in ECMAScript 5

  //CALL():-
    //The first parameter calls the function using the "this" value which is inside a object
    //Rest of the parameters are aruguements to the function that is being called
      var details = {name : "RAGAVENDIRAN"};

      var schooling = function(school_name, year_passing, batch){
          return `${this.name} studied in ${school_name} passed out year is ${year_passing} belonging to the batch ${batch}`;
      };

      console.log("CALL METHOD :", schooling.call(details, "DON BOSCO SCHOOL", "2014", "21"));
    
  //APPLY():-
    //It works same as the CALL() method 
    //Only difference is that the second parameter in the APPLY() accepts an array.
    var details = {name : "RAGAVENDIRAN"};

    var schooling_details = ["DON BOSCO SCHOOL", "2014", "21"]

    var schooling = function(school){
        return `${this.name} studied in ${school[0]} passed out year is ${school[1]} belonging to the batch ${school[2]}`;
    };

    console.log("APPLY METHOD :", schooling.call(details, schooling_details));

    //BIND():-
      //Incase of blind it returns a bound function with the context which will be invoked later
        var details = {name : "RAGAVENDIRAN"};

        var schooling_details = ["DON BOSCO SCHOOL", "2014", "21"]

        var schooling = function(school){
            return `${this.name} studied in ${school[0]} passed out year is ${school[1]} belonging to the batch ${school[2]}`;
        };
        
        var bound = schooling.bind(details);

        console.log("BIND METHOD :", bound(schooling_details))

