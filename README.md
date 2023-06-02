# class-namer

Introducing "class-namer" - a lightweight npm package designed to simplify the process of creating CSS class chains based on 
a key-value object. With just 10 lines of code, the class-namer offers a minimalistic and efficient solution for generating 
concatenated strings of CSS classes.

With just a single function call, you can effortlessly generate a concatenated string of CSS classes.

The class-namer stands out as a lightweight solution for managing CSS class chains.
It focuses on a single data type and doesn't require additional dependencies,
making it a straightforward and efficient package.

The example usage below perfectly illustrates the power of the class-namer:

```javascript
import toggler from 'class-namer';

const classNames = toggler({
    foo: true,
    bar: false,
    baz: true
});

console.log(classNames);
// Output: "foo baz"
```

As demonstrated, the class-namer intelligently composes a chain of CSS classes based on the provided object.
It selectively includes the class if the associated boolean value is true and excludes it if false.
The resulting string is returned, ready for immediate use in your styles.

### What about React?

Toggler elegantly integrates with React components:

```javascript
import toggler from 'class-namer';

type Props = {active: boolean};

const Example: React.FunctionComponent<Props> = ({active}) => {
    const classNames = toggler({foo: active});
    
    return <div clasName={classNames}>Wow!</div>
};

<Example active={true} /> 

// Output: <div class="foo">Wow!</div>
```

### What about CSS-in-JS (CSS Modules)?

If you're a fan of CSS Modules, you'll love what the class-namer has to offer.<br />
The class-namer seamlessly integrates with CSS Modules, providing a seamless solution for managing class names within your modules.


```css
.foo {...}
```

```javascript
import toggler from 'class-namer';

type Props = {active: boolean};

const Example: React.FunctionComponent<Props> = ({active}) => {
    const classNames = toggler({[styles.foo]: active});
    
    return <div clasName={classNames}>Wow!</div>
};

<Example active={true} /> 

// <div class="foo">Wow!</div>
```

Empower your development workflow with the class-namer and enjoy the simplicity of creating CSS class chains effortlessly.<br />
Say goodbye to cumbersome concatenations and embrace the power of the class-namer - your go-to solution for managing CSS classes with ease.


## Installation

Install with npm or Yarn:

**npm**:

```
npm install @monolithed/class-namer
```

**Yarn**:

```
yarn add @monolithed/class-namer
```

## Contributing
   
Feel free to submit a pull request if you find any bugs. 
Please make sure all commits are properly documented.

## Tests

```
npm test
```

## Publishing

```
npm publish --access public --verbose
```

## License

MIT
