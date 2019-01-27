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

