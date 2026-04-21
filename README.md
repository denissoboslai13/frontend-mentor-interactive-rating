# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://github.com/denissoboslai13/frontend-mentor-interactive-rating)
- Live Site URL: [Add live site URL here](https://denissoboslai13.github.io/frontend-mentor-interactive-rating/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/)
- [React-Hotkeys](https://github.com/greena13/react-hotkeys/tree/master)
- [Tailwind](https://tailwindcss.com/)
- [Motion](https://motion.dev/)

### What I learned

Alright, i had fun with this, i challenged myself to learn how to do keyboard controls, and while not perfect, i definitely think its workable, and im glad i got to try it out.

```tsx
const keyMap = {
  rateOne: "1",
  rateTwo: "2",
  rateThree: "3",
  rateFour: "4",
  rateFive: "5",
  submit: "s",
  back: ["esc", "backspace", "del"],
};
```

```js
const handlers = {
  rateOne: () => {
    setSelected(1);
  },
  rateTwo: () => {
    setSelected(2);
  },
  rateThree: () => {
    setSelected(3);
  },
  rateFour: () => {
    setSelected(4);
  },
  rateFive: () => {
    setSelected(5);
  },
  submit: () => {
    setSubmitted(1);
  },
  back: () => {
    setSubmitted(0);
    setSelected(0);
  },
};
```

```tsx
<HotKeys keyMap={keyMap} handlers={handlers}>
```

### Continued development

Im pretty sure i will use keyboard controls more in the future so, i guess thats a good place to continue improving

### Useful resources

- [Radial Gradient Explanation](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/gradient/radial-gradient) - Since theres a faint gradient on the top of the card, i wanted to properly recreate it, and i also learned how radial gradients work, neat.

## Author

- Frontend Mentor - [@denissoboslai13](https://www.frontendmentor.io/profile/denissoboslai13)
