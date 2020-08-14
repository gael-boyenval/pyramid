---
title: "Buttons"
order: 2
description: "Buttons are used to trigger actions. Their appearance is depending on the type of action required from the user, or the context"
status: "bêta"
---

> Buttons are used to **trigger actions**. Their appearance is depending on the type of action required from the user, or the context.
>
> <cite>Benjamin Franklin</cite>

## Variations

### Color themes

<Highlight theme="info" title="this is an information">

Nullam quis risus eget urna mollis ornare vel eu leo. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Nullam id dolor id nibh ultricies vehicula ut id elit.

```css
.ma-class {
  color: blue;
}
```

</Highlight>

<Highlight theme="warning" title="be extra carefull">

Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum. Curabitur blandit tempus porttitor. Curabitur blandit tempus porttitor.

Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui.

</Highlight>

<Highlight theme="tips" title="did you know ?">

Lorem ipsum dolor sit amet

</Highlight>

We created different color themes to suit what you need in your design.
You can use `primary` (default), `neutral` and `danger` theme in `solid` and `bordered` declination. These declinations can help you to make what's important stand out.

| Color theme | Usage                                                                                   |
| ----------- | --------------------------------------------------------------------------------------- |
| Primary     | For main actions on the page or engaging actions                                        |
| Primary-02  | For main specific actions dedicated to Campus                                           |
| Neutral     | For secondary or minor actions on the page                                              |
| Danger      | For buttons who the following actions is irrevocable, like deleting a product in a cart |

### Sizes

There is 3 sizes for the buttons to create hierarchy and for a better adaptability.

| Size                   | Value        |
| ---------------------- | ------------ |
| **Small**              | 2mu (32px)   |
| **Medium** (_default_) | 3mu (48px)   |
| **Large**              | 3.5mu (56px) |

### Displaying buttons with icons

In the button component, you can also add icons:

- On the left
- On the right
- Icon only

Icons are availables in different sizes depending on the button size. Here you can find which icon you can use for each button size:

| **Button size** | **Icon only**                      | **Icon + text** |
| --------------- | ---------------------------------- | --------------- |
| **Small**       | 1.5mu (24px)                       | 1.5mu (24px)    |
| **Medium**      | 2mu (32px)                         | 1.5mu (24px)    |
| **Large**       | 2.5mu (48px) [_displayed in 40px_] | 2mu (32px)      |

### Width behaviour

A button width can either fit its content or its container.

---

## Do's and don'ts

<DoDont>
  <DoDontBlock text="Always do that it's way better">

```js
const foo = bar
```

  </DoDontBlock>
  <DoDontBlock not text="Don't do that it's no good Jonnhy !">

```js
const foo = baz
function buzz(foo) {
  return "tutu"
}
```

  </DoDontBlock>
</DoDont>

<DoDont full="true">
  <DoDontBlock text="Always do that it's way better">

Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.

  <ul>
    <li>hello</li>
    <li>hello</li>
    <li>hello</li>
    <li>hello</li>
  </ul>

  </DoDontBlock>
  <DoDontBlock not text="Don't do that it's no good Jonnhy !">

Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.

  </DoDontBlock>
</DoDont>

#### You should :

<Do>
  Use solid buttons <b>to highlight the important actions</b>.<br />
</Do>
<Do>Use only one primary button at the time in the user's field of view.</Do>
<Do>
  Use Bordered buttons <b>for minor or secondary actions</b>.<br />
  <small>For example to see more information about a product or service.</small>
</Do>
<Do>
  Always use an <b>accurate wording</b> for the button label. The action which
  follows the mouse click must be comprehensive and reassuring for the user.
  <br />
  <small>
    For example it's better to write "Add to basket" rather than "Add"
  </small>
</Do>
<Do>
  Use icon in button <b>to complete and illustrated the button purpose</b>.
  <br />
</Do>

#### You should not :

<Do not>
  Never use an icon that has no connection or is not explicit enough with the
  label.
</Do>
