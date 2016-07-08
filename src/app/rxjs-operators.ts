/*
Enable RxJS Operators
The RxJS library is quite large. 
Size matters when we build a production application and deploy it to mobile devices. 
We should include only those features that we actually need.
Accordingly, Angular exposes a stripped down version of Observable in the rxjs/Observable module.
That version that lacks most of the rxjs operators such as the map method.
It's up to us to add the operators we need.
We could add every RxJS operators with a single import statement. 
While that is the easiest thing to do, we'd pay a penalty in extended launch time and application size.
The full library is big. We might only use a few operators in our app.
Instead, we'll import each Observable operator and static class method, one-by-one.
Make a custom Observable implementation tuned precisely to our requirements. 
We'll put the import statements in one app/rxjs-operators.ts file.  That is this file.
*/

//import 'rxjs/Rx'; //adds ALL RxJS statics & operators to Observable

//Import just the rxjs statics and operators we need for THIS app.

//Statics
import 'rxjs/add/observable/throw';

//Operators
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
//these below were in the http client example on angular.io. not used in my project
//import 'rxjs/add/operator/debounceTime';
//import 'rxjs/add/operator/distinctUntilChanged';
//import 'rxjs/add/operator/switchMap';




