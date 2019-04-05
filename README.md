# Cobalt2 Theme for VS Code

[![Version](https://vsmarketplacebadge.apphb.com/version/wesbos.theme-cobalt2.svg)](https://marketplace.visualstudio.com/items?itemName=wesbos.theme-cobalt2)

![Preview](https://raw.githubusercontent.com/wesbos/cobalt2-vscode/cobalt2-updates/images/ss.png)


# Installation

1. Open **Extensions** sidebar panel in VS Code. `View → Extensions`
2. Search for `Cobalt2` - find the one by **Wes Bos** - there are a few other half-baked ones so make sure you have the right one!
3. Click **Install** to install it.
4. Click **Reload** to reload the your editor
5. Code > Preferences > Color Theme > **Cobalt2**
6. Optional: Use the recommended settings below for best experience

## Recommended Settings

```js
{
  "workbench.colorTheme": "Cobalt2",
  // The Cursive font is operator Mono, it's $200 and you need to buy it to get the cursive
  "editor.fontFamily": "Operator Mono, Menlo, Monaco, 'Courier New', monospace",
  "editor.fontSize": 17,
  "editor.lineHeight": 25,
  "editor.letterSpacing": 0.5,
  "files.trimTrailingWhitespace": true,
  "editor.fontWeight": "400",
  "prettier.eslintIntegration": true,
  "editor.cursorStyle": "line",
  "editor.cursorWidth": 5,
  "editor.cursorBlinking": "solid",
  // Very important: Install this plugin: https://github.com/be5invis/vscode-custom-css
  // You'll need to change this to a file URI scheme on your computer: https://en.wikipedia.org/wiki/File_URI_scheme
  // Mac/Linux: file:///Users/YOUR-PC-USERNAME/.vscodestyles.css
  // Windows: file:///C:/Users/YOUR-PC-USERNAME/.vscodestyles.css
  "vscode_custom_css.imports": [
    "file:///Users/wesbos/.vscodestyles.css"
  ],
  "editor.renderWhitespace": "all",
}
```

## Important: CSS Hacks For Extra Sweet Editor
Some things in VS Code can't be controlled by settings, but you can install [this plugin](https://github.com/be5invis/vscode-custom-css), then make a file on your computer that will hold your custom CSS, I like to make one in my root called `~/.vscodestyles.css` and then put this everything in [cobalt2-custom-hacks.css](./cobalt2-custom-hacks.css) into your file.

Once done, open your command palette and select enable **custom CSS and JS**

![Custom CSS/JS Hack](https://d3vv6lp55qjaqc.cloudfront.net/items/0B37352D3s2A2e33353c/Screen%20Shot%202017-09-15%20at%2011.02.49%20AM.png?X-CloudApp-Visitor-Id=26998&v=7ff79bcc)

Finally reload your editor and the Custom CSS should be taking. You can test this by typing into file - the dirty circle should be yellow not white.

**_Note: Reloading custom CSS and JS after every VSCode update is a must!_**

## Contributing
This is a bit weird, but to get some sort of live feedback for when editing a theme. Please let me know if you have a saner way of doing it

1. Open this repo in your terminal and type `npm install`
1. Start to watch for change on the repo with `npm start` - this runs a nodemon task for you and will automatically recompile any changes
1. Open this repo in VS Code
1. Open your command palette and hit type **VSIX**. Select the one that says **Extensions: Install from VSIX...**
1. Load the VSIX file that was created a few steps back
1. Set your editor to use _this_ Cobalt2 theme - it might help to change the name in package.json to something like "Cobalt2 Dev" so you can differentiate from the Cobalt2 you've installed from the marketplace. If you get confused, just delete all traces of Cobalt2 and then load the VSIX.
1. Go to the debug sidebar `View → Debug`
1. Press the green arrow beside "Launch Extension"
1. This will then open a second window.
1. Make a change, and then hit the refresh button on your debug toolbar - this is in your first editor - not the one that poped open.
1. Wait a sec, your changes should now be reflected!

Whew. Again, if you have an easier way to style these things, let me know!

## I don't like something

First, this theme is new so if something is funky, please open an issue.

These are the things we have control over. If you would like to change something, you can either open a PR and see if I'd like it added, or override the colours in your own settings.json file.

https://code.visualstudio.com/docs/getstarted/theme-color-reference

## Put Cobalt2 in other places!

* [Sublime Text](https://github.com/wesbos/cobalt2)
* [Atom](https://github.com/wesbos/Cobalt2-atom)
* [iTerm2](https://github.com/wesbos/Cobalt2-iterm)
* [Hyper Term](https://github.com/wesbos/hyperterm-cobalt2-theme)
* [Alfred](https://github.com/wesbos/Cobalt2-Alfred-Theme)
* [Slack](https://github.com/wesbos/Cobalt2-Slack)

## Color pallette
- ![#122738](https://placehold.it/20/122738/000000?text=+) `#122738`
- ![#0d3a58](https://placehold.it/20/0d3a58/000000?text=+) `#0d3a58`
- ![#ffc600](https://placehold.it/20/ffc600/000000?text=+) `#ffc600`
- ![#0088ff](https://placehold.it/20/0088ff/000000?text=+) `#0088ff`
- ![#ff9d00](https://placehold.it/20/ff9d00/000000?text=+) `#ff9d00`
- ![#193549](https://placehold.it/20/193549/000000?text=+) `#193549`
- ![#aaaaaa](https://placehold.it/20/aaaaaa/000000?text=+) `#aaaaaa`
- ![#15232d](https://placehold.it/20/15232d/000000?text=+) `#15232d`
- ![#ff7200](https://placehold.it/20/ff7200/000000?text=+) `#ff7200`
- ![#243e51](https://placehold.it/20/243e51/000000?text=+) `#243e51`
- ![#1f4662](https://placehold.it/20/1f4662/000000?text=+) `#1f4662`
- ![#234e6d](https://placehold.it/20/234e6d/000000?text=+) `#234e6d`
- ![#0050a4](https://placehold.it/20/0050a4/000000?text=+) `#0050a4`
- ![#a22929](https://placehold.it/20/a22929/000000?text=+) `#a22929`
- ![#3c9f4a](https://placehold.it/20/3c9f4a/000000?text=+) `#3c9f4a`
- ![#26506d](https://placehold.it/20/26506d/000000?text=+) `#26506d`
- ![#3b5364](https://placehold.it/20/3b5364/000000?text=+) `#3b5364`
- ![#ff628c](https://placehold.it/20/ff628c/000000?text=+) `#ff628c`
- ![#3ad900](https://placehold.it/20/3ad900/000000?text=+) `#3ad900`
- ![#8dffff](https://placehold.it/20/8dffff/000000?text=+) `#8dffff`
- ![#80fcff](https://placehold.it/20/80fcff/000000?text=+) `#80fcff`
- ![#fb94ff](https://placehold.it/20/fb94ff/000000?text=+) `#fb94ff`
- ![#ff628c](https://placehold.it/20/ff628c/000000?text=+) `#ff628c`
- ![#9effff](https://placehold.it/20/9effff/000000?text=+) `#9effff`
- ![#e1efff](https://placehold.it/20/e1efff/000000?text=+) `#e1efff`
- ![#ffee80](https://placehold.it/20/ffee80/000000?text=+) `#ffee80`
- ![#a5ff90](https://placehold.it/20/a5ff90/000000?text=+) `#a5ff90`
- ![#ffb454](https://placehold.it/20/ffb454/000000?text=+) `#ffb454`


## Thanks

Thanks to Roberto Achar for doing much of the initial porting to VS Code.

