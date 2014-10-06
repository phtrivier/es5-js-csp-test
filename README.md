ES5-JS-CSP-TEST
-------------------

Attempt at using facebook regenerator to get the js-csp lib from https://github.com/ubolonton/js-csp running
on old (pre 0.11.x) nodejs versions.

This works by using 'regenerator' on the bundled csp.bundled.node.js file.

~~~
npm install
grunt
node build/es5/index-ko.js
~~~

## Next steps

* Issue open to discuss :  https://github.com/ubolonton/js-csp/issues/8 (bundled file works)
* Patch js-csp to use grunt (if that makes sense) and generate an 'es5' version of the nodejs package
