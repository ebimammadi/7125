# WORK TASK #
* NOTE: I have used node.js and webpack to run this server. First you should run `npm install`, then `npm start`, you can see the application running
* For building the application to dist folder run `npm build`
* Finding a free public API was a time-consuming, so I created a simple GET at this address: https://omid.tadbir.net/api.php&search=SEARCH&searchInMiddle=true/false`
* The delay for less stress on the API and capability to search in the middle of the title can be configure at `./src/index.js`
* It was not clear to put the search history just under the autocomplete part, so I considered the autocomplete onto this part, if it is required I can change it.
* Hope that I can have your honest feedback

## File structure
```               
├── src
│   ├── components
|       ├── ButtonComponent.js          - Button Componet
|       ├── SearchComponent.js          - Search Component
|       ├── SearchAutoComplete.js
|       ├── SeacrhHistory.js
|       └── Templates.js                - Template literal JS 
│   ├── images
|       └── favicon.png         
|   ├── styles 
|       ├── ButtonComponent.scss                      
|       ├── main.scss                   - The main responsive part 
|       ├── SearchAutoComplete.scss
|       ├── SeacrhComponents.js
|       └── SeacrhHistory.js
|   ├── templates 
|       └── index.template.html         - It will be used with webpack to create the index.html file in 'dist' folder     
|   └── index.js                        - Main app file                  
├── package.json                        - Packages                                        
├── readme.md                           - PLEASE READ MY COMMENTS FIRST
└── webpack.js                          - Webpack configuration file                       

```
**Please read this document thoroughly** and plan your work accordingly.
When ready, fork the repository and create a feature branch. It is in this branch we
expect your delivery.

This Work Task is divided into three parts:

### 1: CSS-wizardry ###


![alt text](https://raw.githubusercontent.com/hmfe/54321/master/button.png)

Recreate this button using only HTML/CSS and using as few HTML-elements as
possible. (HINT: It is possible to solve this using only one `<button>`)


* You can provide a solution for this separately or as a part of the solution for (3) *
* `Comment: This task is done with <button> element`

### 2: Please answer the questions found in the link below ###
https://sv.surveymonkey.com/r/QCT8SHL

### 3: Implement a simple search application ###

<img src="https://raw.githubusercontent.com/hmfe/54321/master/search.png" style="width: 400px">
Implement a simple search form. The search should use a public REST API of your
choice using JavaScript.

- Search for title, return title (or something like that)
- Display partial search results in a list beneath the search field (Auto complete)
- Display the selected results in an editable list beneath the search component 

  * Selected search result should be saved with date/time stamp (as a
search history)
  * User should be able to delete a result from the list or delete the entire
list.

- The application should be responsive, adapting to changes of the viewport. 

### What we will look at: ###

- HTML5: Semantic markup, SEO optimization, Accessibility
   * Use HTML5 and show us that you have deep knowledge of semantic
markup.

- CSS3: Responsivity, use of pseudo elements, HTML entities and complexity
of solution
  * Surprise us with interesting solutions and show off your skills!
  * NOTE: Solution based on premade CSS frameworks will be completely discarded

- JS: complexity, sanity, comments and security.
  * The search should fetch data for each entry, don’t store a complete
database response in a variable and iterate through that.
  * Sanitize your inputs and don’t stress the API more than necessary.

- General sanity check on structure and solution
  * Show to us that you know - how front-end development should be
done.



When done, push your branch and let us know it’s done by making a pull request.

**Good Luck and have fun!**
