ES5-JS-CSP-TEST
-------------------

Attempt at using facebook regenerator to get the js-csp lib from https://github.com/ubolonton/js-csp running
on old (pre 0.11.x) nodejs versions.

## So far :

* Copying all the source code from js-csp, and requiring the 'csp.js' file (after transform) works

~~~
npm install
grunt
node build/es5/index-ok.js
~~~

* Trying to transform the 'bundled' version of js-csp does not work

~~~
npm install
grunt
node build/es5/index-ko.js
~~~

## Next steps

* Issue open :  https://github.com/ubolonton/js-csp/issues/8
