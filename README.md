# Cobalt2 Theme for VS Code

[![Version](https://vsmarketplacebadge.apphb.com/version/wesbos.theme-cobalt2.svg)](https://marketplace.visualstudio.com/items?itemName=wesbos.theme-cobalt2)  
  
![](https://raw.githubusercontent.com/wesbos/cobalt2-vscode/cobalt2-updates/images/ss.png)


# Installation

1. Install [Visual Studio Code](https://code.visualstudio.com/)
2. Launch Visual Studio Code
3. Choose **Extensions** from menu
4. Search for `vscode-theme-cobalt2` - find the one by **Wes Bos**
5. Click **Install** to install it
6. Click **Reload** to reload the Code
7. File > Preferences > Color Theme > **Cobalt2**

## Recommended Settings

## CSS Hacks
Some things in VS code can't be controlled by settings, but you can install [this plugin](https://github.com/be5invis/vscode-custom-css), then make a file on your computer that will hold your custom CSS, I like to make one in my root called `~/.vscodestyles.css` and then put this in your settings:

```js
"vscode_custom_css.imports": [
    "/Volumes/Macintosh HD/Users/wesbos/.vscodestyles.css"
  ],
```

```css
/* Fat Cursor */
.monaco-editor .cursors-layer.cursor-underline-thin-style > .cursor {
  border-bottom-width: 0;
  border-left-width: 3px;
  border-left-style: solid;
  background: transparent !important;
  box-sizing: border-box;
}

.vs-dark .monaco-workbench > .part.editor > .content > .one-editor-silo > .container > .title .tabs-container > .tab.dirty .close-editor-action {
  background: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' height='16' width='16'%3E%3Ccircle fill='%23ffc600' cx='8' cy='8' r='4'/%3E%3C/svg%3E")
    50% no-repeat;
}
```

## Contributing
TODO

## I wish _____ was _____

These are the things we have control over. If you would like to change something, you can either open a PR and see if I'd like it added, or override the colours in your own settings.json file.

https://code.visualstudio.com/docs/getstarted/theme-color-reference

## Put Cobalt2 in other places!

* [Sublime Text](https://github.com/wesbos/cobalt2)
* [Atom](https://github.com/wesbos/Cobalt2-atom)
* [iTerm2](https://github.com/wesbos/Cobalt2-iterm)
* [Hyper Term](https://github.com/wesbos/hyperterm-cobalt2-theme)
* [Alfred](https://github.com/wesbos/Cobalt2-Alfred-Theme)
* [Slack](https://github.com/wesbos/Cobalt2-Slack)


## Thanks

Thanks to Roberto Achar for doing much of the initial porting to VS Code.
