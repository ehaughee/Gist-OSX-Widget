# Gist OS X Widget (or Gist Paster) Alpha v0.2.1
This is an OS X widget that will take the contents of your clipboard, create a gist, and then place the relevant gist url in your clipboard.

![Screenshot](http://f.cl.ly/items/0F42063X0s2z1D3z042D/Screen%20Shot%202012-06-19%20at%2011.04.57%20AM.png)


![Screenshot 2](http://f.cl.ly/items/1p35132i3d09133v0K24/Screen%20Shot%202012-06-19%20at%2011.05.46%20AM.png)

[Download](https://github.com/ehaughee/Gist-OSX-Widget/downloads)


## Usage

### Anonymous gist Usage
* Copy some text
* On the widget (in your dashboard) click Create Gist
* You should see some status messages that ends with "Link in clipboard"
* Paste the link

### Authenticated gist Usage
* Copy some text
* On the widget, click the i in the bottom right hand corner
* On the back of the widget, type in your username and password then click login
* Wait for the status text to say "Success"
* Click done
* Select your syntax from the "Lang" dropdown if you wish
* Click Create Gist
* Wait until you see "Link in clipboard"
* Paste the link

### Todo
* More syntax language selections
* Maybe add the option to set a filename and description, but probably not

## Change List

### v0.2.1
* [bugfix] The login function now tells you success or failure like it is supposed to.
* [feature] Added JavaScript, C, and C++ languages to the Lang selector

### v0.2
* [feature] Ability to authenticate for gists so they are created under your account
 * The UI for this needs a lot of work
* [feature] Ability to select from Ruby, Python, PHP, HTML syntaxes
 * Super easy to add more languages, just haven't yet.


## Attribution
The octocat icon was taken without permission from: http://ericjankowski.com/index.php.  I plan on asking permission but in the mean time I am providing a source since this is a public repository.  Maybe this should go in TODO.