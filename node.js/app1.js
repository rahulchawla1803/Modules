var movie=require('./movie');
//module is exported as an object
movie.god();

// "./" is written before movie as to tell it's in the same directory. "./" is elliminated for only for CORE modules.
//For CUSTOM modules, i.e user defined modules, "./" is retained.

// while exporting god was made equal to the function printGodfather, thus in this module god is used to call printGodfather.

// it is not ./movie.js it is ./movie only. Extension should not be mentioned while importing.

//change god to printGod for method 2