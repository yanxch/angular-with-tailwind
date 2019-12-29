<blog-content>


# Angular State Management - Don't fear the boilerplate
## Fear tight coupling!

<blog-text-container>

Many people rant about the boilerplate   
that is produced when introducing a redux based state management library in an Angular application. All I can respond to that is:

> Don’t fear the boilerplate. Fear tight coupling!

Though, I can understand those people, they are right in some way. State management can become hairy really fast. Especially if your are working in a bigger team with different levels of experience.

I think it’s not the boilerplate that causes the most pain. Sometimes it’s just the lack of clear separation of concerns. The absence of well defined smart- and dumb components. A state that is not well structured or simply too big to be handled by one container component. Complex subscriptions within the components that may combine multiple observables.
Add some side effects on the top. Add the routing information to the state. And suddenly:

![Architecture gone wrong](/assets/architecture.png)

The code is not maintainable anymore. The Redux architecture had promised to solve the complexity of not knowing where the state of the application is coming from, but now it is really hard to follow the flow of data through your app as well. You get angry. You blame your state management decision or the one that made it.

> Please hold on for a moment :)

In this post I present an approach how you can “manage” your state management library. I will use **NgRx** in my examples, but it doesn’t really matter which redux based library you are using. The concept stays the same. Even plain old services could be used to hold your state.

### 1. Use Typescript

This is a no brainer for Angular developers. Once you have got used to it you don’t wanna miss it out any longer. We will use its power to define our typed actions and use them within reducers and effects. So coding errors occur during compile time as we develop and not during runtime. Let’s directly dive into our action types:

```js
/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/*              TYPES                           */
/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
type Type = {
    readonly type: string;
}

type Payload<T> = {
    readonly payload: T;
}

type Action<T>  = Type & Payload<T>;
```

Look at the source on [Github](https://github.com/yanxch/loading-sample).

</blog-text-container>
</blog-content>