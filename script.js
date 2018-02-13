/*
FOR THE CALENDAR PAGE 
1. get the day of the month (ie 1, 15, 31) for the current day
2. get the day of the month for the following day (ie 2, 16, 1)
3. include this information in the headers 

The first two points are achieved through the DATE object
The last one is achieved through the TEXTCONTENT method

## 1&2: The date object

To manage date-related information javascript can leverage a series of getter and setter
methods based on the object *Date*

In our example we will use the *Date* object to 
1. get the instance for the current date object;
2. set an instance of this object to a precise date. 

This to allow for the consideration of today and tomorrow alike.
Simply adding one to today may in fact cause issues whenever it is the last day of the month (ie 2, 16, 32) and using the object we
can use the precise correct information.

To resolve issue number #1  we create a new instance of the date object, getting the coordinates for the current date.

> var today = new Date();

Afterwords we retrieve the day of the month, which is the only information we require, through the appropriate method.
Consider [date instances](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) for further information.

> var dayOfTheMonth = today.getUTCDate();

To resolve #2 the process it's a bit more lengthy, but not by that much.

Simply put, create a new instance of the date object

> var tomorrow = new Date();

Set said instance to the current day of the month plus one, which returns the instance for the date of tomorrow.

> tomorrow.setDate(dayOfTheMonth + 1);

Afterwords use the same method used earlier to retrieve the day of the month. This time for the new date instance.

> var dayOfTheMonthTomorrow = tomorrow.getUTCDate();


## 3: The textContent method

This method is rather self explanatory. It is applied to a header or other element containing text to change its contents.

Simply select the element through the querySelector and change the text of each header individually.

In our instance we will change the text to display the current and following day of the month,

> document.querySelector("#today").textContent= dayOfTheMonth;
> document.querySelector("#tomorrow").textContent= dayOfTheMonthTomorrow;

*/

var today = new Date();
var dayOfTheMonth = today.getUTCDate();

var tomorrow = new Date();
tomorrow.setDate(dayOfTheMonth + 1);
var dayOfTheMonthTomorrow = tomorrow.getUTCDate();

document.querySelector("#today").textContent= dayOfTheMonth;
document.querySelector("#tomorrow").textContent= dayOfTheMonthTomorrow;
