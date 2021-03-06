/* 
 This file was generated by Dashcode and is covered by the 
 license.txt included in the project.  You may edit this file, 
 however it is recommended to first turn off the Dashcode 
 code generator otherwise the changes will be lost.
 */
var dashcodePartSpecs = {
    "backstatus": { "view": "DC.Text" },
    "button": { "creationFunction": "CreateButton", "leftImageWidth": 10, "onclick": "showBack", "rightImageWidth": 10, "text": "Settings" },
    "done": { "creationFunction": "CreateGlassButton", "onclick": "showFront", "text": "Done" },
    "language": { "creationFunction": "CreatePopupButton", "leftImageWidth": 5, "name": "langSelect", "onchange": "setLang", "options": ["Lang", ["Ruby", ".rb"], ["Python", ".py"], ["PHP", ".php"], ["Java", ".java"], ["HTML", ".html"], ["JavaScript", ".js"], ["C++", ".cpp"], ["C", ".c"], ["HAML", ".haml"], ["CoffeeScript", ".coffee"], ["Perl", ".pl"], ["Go", ".go"], ["C#", ".cs"], ["ERB", ".erb"], ["CSS", ".css"]], "rightImageWidth": 16 },
    "login": { "creationFunction": "CreateButton", "leftImageWidth": 5, "onclick": "authorize", "rightImageWidth": 5, "text": "Login" },
    "logout": { "creationFunction": "CreateButton", "leftImageWidth": 5, "onclick": "deauthorize", "rightImageWidth": 5, "text": "Logout" },
    "pwordReq": { "text": "* Required", "view": "DC.Text" },
    "send": { "creationFunction": "CreateButton", "leftImageWidth": 5, "onclick": "send", "rightImageWidth": 5, "text": "Create Gist" },
    "statustext": { "view": "DC.Text" },
    "text1": { "text": "Username", "view": "DC.Text" },
    "text2": { "text": "Password", "view": "DC.Text" },
    "unameReq": { "text": "* Required", "view": "DC.Text" },
    "user": { "view": "DC.Text" }
};








