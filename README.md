# Gist OS X Widget (or Gist Paster) Alpha v0.3.1
This is an OS X widget that will take the contents of your clipboard, create a gist, and then place the relevant gist url in your clipboard.

![Screenshot](http://f.cl.ly/items/0F42063X0s2z1D3z042D/Screen%20Shot%202012-06-19%20at%2011.04.57%20AM.png)


![Screenshot 2](http://f.cl.ly/items/1p35132i3d09133v0K24/Screen%20Shot%202012-06-19%20at%2011.05.46%20AM.png)

![Screenshot 3](http://f.cl.ly/items/2j1C3J0c2u393E2V3i3s/Screen%20Shot%202012-06-21%20at%209.53.10%20PM.png)

[Download](https://github.com/ehaughee/Gist-OSX-Widget/downloads)


## Usage

### Anonymous gist Usage
* Copy some text
* Select your syntax from the "Lang" dropdown (optional, defaults to .txt)
* On the widget (in your dashboard) click "Create Gist"
* Wait until you see "Link in clipboard"
* Paste the link

### Authenticated gist Usage
* Copy some text
* On the widget, click the *i* in the bottom right hand corner
* On the back of the widget, type in your username and password then click login
* Wait for the status text to say "Success"
* Click done
* Select your syntax from the "Lang" dropdown if you wish
* Click Create Gist
* Wait until you see "Link in clipboard"
* Paste the link

## Change List

### v0.3.1
* [bugfix] Password field was broken, now fixed (I somehow managed to put a maxLength on the input…)
* [bugfix] UN/PW inputs are now disabled when logged in
* [cleanup] removed a CDN reference to an older version of jQuery (jQuery is no longer included at all)
* [feature] Well kind of.  Made my own hideous icon.  Ugly icon is ugly but at least I don't have to worry about attribution anymore.

### v0.3
* [feature] Added logout functionality
* [feature] Added Java, C#, HAML, ERB, CoffeeScript, Perl, Go, and CSS to the Lang selector

### v0.2.1
* [bugfix] The login function now tells you success or failure like it is supposed to.
* [feature] Added JavaScript, C, and C++ languages to the Lang selector

### v0.2
* [feature] Ability to authenticate for gists so they are created under your account
 * The UI for this needs a lot of work
* [feature] Ability to select from Ruby, Python, PHP, HTML syntaxes
 * Super easy to add more languages, just haven't yet.

## Todo
* More syntax language selections