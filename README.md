# Droplist Plugin for jQuery

Droplist is a tiny (2k minified) plugin that converts a breadcrumb trail or folder tree (or any `<ul>` for that matter) in to a dynamic dropdown menu, but only when you've run out of horizontal space.

## Demo

Examples available at [brianrhea.github.io/droplist](http://brianrhea.github.io/droplist)

## How to Use

 - Download and include the javascript source in your document: `/path/to/jquery.droplist.min.js`
 - As well as the css: `/path/to/jquery.droplist.min.css`
 - Droplist uses Underscore.js, so if you're not already using it, be sure to include it as well. `//cdnjs.cloudflare.com/ajax/libs/underscore-contrib/0.1.4/underscore-contrib.min.js`
 - Add `droplist` as a class to any `<ul>` in the document
 - Specify a width for the `<ul class="droplist">` in your own css source, i.e.:

```css
.droplist {
  width: 200px;
}
```
 - Call .droplist()

```javascript
$(document).ready(function(){
  $('.droplist').droplist();
});
```

## Options

**overflow**

Where should Droplist enforce the defined width and create the dropdown?

```
default: 'left'
options: 'left', 'right'
```

**ellipsis**

What should Droplist show after the last visible `<li>`? Set to `false` to hide the ellipsis.

```
default: '&#8230;'
options: 'string', false
```

**dropicon**

If you're using the [Font Awesome](http://fontawesome.io) icon library, Droplist allows you to pass in a font-awesome class that will be used for the dropdown icon. If you aren't using FA, don't worry, Droplist defaults to false and will use a caret. If you are, and want to use a particular icon, just pass the [icon class](http://fontawesome.io/icons/) and Droplist will take care of the rest.

```
default: false
options: 'fa-toggle-down', 'fa-toggle-right', 'fa-plus-square', etc
```

#### Example

The following code tells Droplist to overflow on the right, hide the ellipsis, and use Font Awesome's fa-toggle-right icon as the dropdown.

```javascript
$('.droplist').droplist({
  overflow: 'right',
  ellipsis: false,
  dropicon: 'fa-toggle-right'
});
```

## Acknowledgements

Big ups to the very talented [Brett Wagner](http://www.bmwagner.com/) for the inspiration and UI design. We both hope this plugin makes your day a little easier.

## License

All code licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php). In other words you are basically free to do whatever you want. Please don't remove my name from the source code, but who does that anyway?