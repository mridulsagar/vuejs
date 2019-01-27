# VueJS

VueJS Official Guide:
https://vuejs.org/v2/guide/

## Lesson 01: The Vue Instance

https://vuejs.org/v2/guide/instance.html


## Lesson 02: Data & Methods

https://vuejs.org/v2/guide/instance.html#Data-and-Methods


## Lesson 3: Data Binding

v-bind:

Here v-bind is a directive and : stands before what we are binding to.

Ex: 
```
<a v-bind:href="website">Visit Our Website</a>
``` 
Here, v stands for Vue. Directive is an instruction that tells VueJS to do something.


## Lesson 4: Events

Event Handling: https://vuejs.org/v2/guide/events.html

## Lesson 5: Event Modifiers

https://vuejs.org/v2/guide/events.html#Event-Modifiers

To address this problem, Vue provides event modifiers for v-on. Recall that modifiers are directive postfixes denoted by a dot.

.stop
.prevent
.capture
.self
.once
.passive

Ex:

```
<!-- the click event's propagation will be stopped -->
<a v-on:click.stop="doThis"></a>

<!-- the submit event will no longer reload the page -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- modifiers can be chained -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- just the modifier -->
<form v-on:submit.prevent></form>

<!-- use capture mode when adding the event listener -->
<!-- i.e. an event targeting an inner element is handled here before being handled by that element -->
<div v-on:click.capture="doThis">...</div>

<!-- only trigger handler if event.target is the element itself -->
<!-- i.e. not from a child element -->
<div v-on:click.self="doThat">...</div>

```

**Order matters when using modifiers because the relevant code is generated in the same order. Therefore using v-on:click.prevent.self will prevent all clicks while v-on:click.self.prevent will only prevent clicks on the element itself.**

## Lesson 06: Key Modifiers

https://vuejs.org/v2/guide/events.html#Key-Modifiers

When listening for keyboard events, we often need to check for common key codes. Vue also allows adding key modifiers for v-on when listening for key events:

```
<!-- only call `vm.submit()` when the `keyCode` is 13 -->
<input v-on:keyup.13="submit">
Remembering all the keyCodes is a hassle, so Vue provides aliases for the most commonly used keys:

<!-- same as above -->
<input v-on:keyup.enter="submit">

<!-- also works for shorthand -->
<input @keyup.enter="submit">
```

Here’s the full list of key modifier aliases:

.enter
.tab
.delete (captures both “Delete” and “Backspace” keys)
.esc
.space
.up
.down
.left
.right
You can also define custom key modifier aliases via the global config.keyCodes object:
```
// enable `v-on:keyup.f1`
Vue.config.keyCodes.f1 = 112
```

## Lesson 7: 2-Way Data Bindings

https://vuejs.org/v2/guide/forms.html

You can use the v-model directive to create two-way data bindings on form input, textarea, and select elements. It automatically picks the correct way to update the element based on the input type. Although a bit magical, v-model is essentially syntax sugar for updating data on user input events, plus special care for some edge cases.

_v-model will ignore the initial value, checked or selected attributes found on any form elements. It will always treat the Vue instance data as the source of truth. You should declare the initial value on the JavaScript side, inside the data option of your component._

_For languages that require an IME (Chinese, Japanese, Korean etc.), you’ll notice that v-model doesn’t get updated during IME composition. If you want to cater for these updates as well, use input event instead._

- Text
```
<input v-model="message" placeholder="edit me">
<p>Message is: {{ message }}</p>
```

- Multiline text
```
<span>Multiline message is:</span>
<p style="white-space: pre-line;">{{ message }}</p>
<br>
<textarea v-model="message" placeholder="add multiple lines"></textarea>
```

## Lesson 8: Computed Property

https://vuejs.org/v2/guide/computed.html#Computed-Properties

In-template expressions are very convenient, but they are meant for simple operations. Putting too much logic in your templates can make them bloated and hard to maintain. For example:
```
<div id="example">
  {{ message.split('').reverse().join('') }}
</div>
```
At this point, the template is no longer simple and declarative. You have to look at it for a second before realizing that it displays message in reverse. The problem is made worse when you want to include the reversed message in your template more than once.

That’s why for any complex logic, you should use a computed property.

Basic Example
```
<div id="example">
  <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>
var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.message.split('').reverse().join('')
    }
  }
})
```
Result:
```
Original message: "Hello"
Computed reversed message: "olleH" 
```
*Instead of a computed property, we can define the same function as a method instead. For the end result, the two approaches are indeed exactly the same. However, the difference is that computed properties are cached based on their dependencies. A computed property will only re-evaluate when some of its dependencies have changed. This means as long as message has not changed, multiple access to the reversedMessage computed property will immediately return the previously computed result without having to run the function again.*

## Lesson 09: Dynamic CSS

## Lesson 10: Conditional Rendering

https://vuejs.org/v2/guide/conditional.html

In Vue, we use the v-if directive to write a conditional block like this:
```
<h1 v-if="ok">Yes</h1>
```
It is also possible to add an “else block” with v-else:
```
<h1 v-if="ok">Yes</h1>
<h1 v-else>No</h1>
```

The v-else-if, as the name suggests, serves as an “else if block” for v-if. It can also be chained multiple times:
```
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>
```
Similar to v-else, a v-else-if element must immediately follow a v-if or a v-else-if element.

Another option for conditionally displaying an element is the v-show directive. The usage is largely the same:
```
<h1 v-show="ok">Hello!</h1>
```
The difference is that an element with v-show will always be rendered and remain in the DOM; v-show only toggles the display CSS property of the element.

Note that v-show doesn’t support the <template> element, nor does it work with v-else.


*v-if is “real” conditional rendering because it ensures that event listeners and child components inside the conditional block are properly destroyed and re-created during toggles.*

*v-if is also lazy: if the condition is false on initial render, it will not do anything - the conditional block won’t be rendered until the condition becomes true for the first time.*

*In comparison, v-show is much simpler - the element is always rendered regardless of initial condition, with CSS-based toggling.*
*Generally speaking, v-if has higher toggle costs while v-show has higher initial render costs. So prefer v-show if you need to toggle something very often, and prefer v-if if the condition is unlikely to change at runtime.*

## Lesson 11: List Rendering - Looping through lists

https://vuejs.org/v2/guide/list.html

We can use the v-for directive to render a list of items based on an array. The v-for directive requires a special syntax in the form of item in items, where items is the source data array and item is an alias for the array element being iterated on:
```
<ul id="example-1">
  <li v-for="item in items">
    {{ item.message }}
  </li>
</ul>
```
```
var example1 = new Vue({
  el: '#example-1',
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})
```
Result:
```
* Foo
* Bar
```

Inside v-for blocks we have full access to parent scope properties. v-for also supports an optional second argument for the index of the current item.

```
<ul id="example-2">
  <li v-for="(item, index) in items">
    {{ parentMessage }} - {{ index }} - {{ item.message }}
  </li>
</ul>
```
```
var example2 = new Vue({
  el: '#example-2',
  data: {
    parentMessage: 'Parent',
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})
```
Result:

```
  * Parent - 0 - Foo
  * Parent - 1 - Bar
```
You can also use of as the delimiter instead of in, so that it is closer to JavaScript’s syntax for iterators:

```
<div v-for="item of items"></div>
```
