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

