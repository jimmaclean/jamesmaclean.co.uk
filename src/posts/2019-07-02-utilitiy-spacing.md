---
layout: layouts/main.njk
path: "/utility-spacing"
date: "2019-07-02"
title: "Responsive utility CSS spacing"
tags: ['post','CSS','SASS', 'Webpack', 'Tailwind']
excerpt: "Making a set of Tailwind inspired responsive spacing utility classes with SASS"
---

{% from 'spacer.njk' import spacer %}

# {{ title }}

## The problem
When a designer is working on a UI in something like Sketch they will get the spacing to look how they want, normally based on a pre-defined spacing scale.

<div class="side-scroller">
<div class="side-scroller-child">
    {{ spacer('16') }}
    {{ spacer('20') }}
    {{ spacer('24') }}
    {{ spacer('32') }}
    {{ spacer('40') }}
    {{ spacer('48') }}
    {{ spacer('56') }}
    {{ spacer('64') }}
    {{ spacer('72') }}
    {{ spacer('80') }}
    {{ spacer('96') }}
    {{ spacer('128') }}
</div>
</div>

## Fist solution - Spacing SASS variables and a class for each

```SCSS
$space-1: 8px;
$space-2: 16px;
$space-3: 20px;
$space-4: 24px;
$space-5: 32px;
$space-6: 40px;
$space-7: 48px;
$space-8: 56px;
$space-9: 64px;
$space-10: 72px;
```
These are useful for making sure no [magic-numbers](https://css-tricks.com/magic-numbers-in-css/) are used and also for stepping up or down the scale to give more or less space in an intuitive way.

There are a few problems with doing with variables alone:
1. You will write a specific class for  every use, even if al you are doing is adding a little margin.
2. The specific class will need to be set at breakpoints
3. The spacing is the most likely thing to change when a designer is reviewing a UI. Not because its wrong but because of the differences of rendering in design software with sometimes placeholder content and a browser with real content.

## Second solution - Responsive classes
You could make a set of responsive utilities, but unfortunately the spacing on mobile can't just be scaled up in a programmatic way to produce a desktop layout. There is as much art as science to the whitespace and you may even use a completely different layout a larger sizes anyway.

```SCSS
$space-5: 32px;
$space-shrink-factor-sm: 0.8;


.margin-b-5 {
    
    margin-bottom: $space-5 * $space-shrink-factor-small;
    
    @media screen and ( min-width: 640px) {
        margin-bottom: $space-5;
    }

}

```

## Third solution - Fully responsive set of utilities
After reading the [State of CSS 2019](https://2019.stateofcss.com/) I saw that [Tailwindcss](https://tailwindcss.com/) had a very high satisfaction rating. There is an ongoing debate on weather CSS utilities are a good thing or not, but my view is that in some cases they are too useful to ignore. I really loved the syntax of the Tailwind so I made a set of utilities that followed the same [breakpoint]:[utility] format in [Codepen](https://codepen.io/jqim/pen/ydLpVB). 

I wanted to make another version with Webpack as a learning exercise.

Here is how it works ...

### A sass map of your breakpoints
These could be be hooked into an existing set of breakpoints in your frontend code.

```SCSS
$breakpoints:(
  md: 640px,
  lg: 1024px,
  xl: 1200px,
  xxl: 1440px
);
```

### A sass map of your spacing values
I find these are best to be hard-coded as variables as the almost never change once set by a designer. Also sometimes a designer will throw logic to the wind and break the mathematical pattern at certain points because sometimes logic doesn't look visually pleasing.

```SCSS
/* The variables can be used in component .classes */
$space-1: 8px;
$space-2: 16px;
$space-3: 20px;
...

/* The map is for looping over */
$space: (
    1: $space-1,
    2: $space-2,
    3: $space-3,
    ...
);
```
### A breakpoint mixin to use in the loop
You will need a way to programmatically wrap classes in a breakpoint.

```SCSS
@mixin breakpointWrap($screenSize) {
  
  @media screen and ( min-width: map-get($breakpoints, $screenSize) ) {
    @content;
  }
  
};
```

### A loop function to build all the utilities
Then a nested for loop of the breakpoints -> spacing values -> .classes

```SCSS
@each $bpKey, $bgVal in $breakpoints {

  @include breakpointWrap($bpKey){

    @each $sKey, $sVal in $space {
      .#{$bpKey}--m-#{$sKey}{
        margin: $sVal;
      }
        .#{$bpKey}--m-b-#{$sKey}{
          margin-bottom: $sVal;
        }
        ...
        /* + top, left and right */
      
      .#{$bpKey}--p-#{$sKey} {
        padding: $sVal;
      }
        .#{$bpKey}--p-b-#{$sKey} {
        padding-bottom: $sVal;
        }
        ...  
        /* + top, left and right */
    };
    
  };

};
```
I opted to leave the base 'small' size out of the loops so didn't have to include any conditions.


### File size worries

This can produce a surprizing amount of CSS even when you are sure you only included the useful stuff.

{% include 'css-size-calculator.njk' %}

500 css classes and weighted in at about 24kb, which seems like a lot for something so simple.


### Purge css
But you can use [purgecss-webpack-plugin](https://github.com/FullHuman/purgecss-webpack-plugin) to removed unused classes from your source files. I found it takes a few seconds for webpack to do this, so it's probably best left to a production build only. Or this might be better as a NPM script.

Have a look at the working example on [GitHub](https://github.com/jimmaclean/utility-spacing)