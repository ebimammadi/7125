/**
    this file is for the variables and functions creating the template literals used in the application
    for more readability I separated them in this file
 */

export const autoCompleteNode =
    `<div class="autocomplete" >
        <input 
            class="input" 
            type="search" 
            name="search" 
            id="search"
            placeholder="Search a country name ..." 
            autocomplete="off"
        />
        <div id="autoCompleteContainer" class="autocomplete-items" >
        </div>
    </div>`

export const searchHistoryTemplateNode =
    `<div class="searchHistoryContainer" id="searchHistoryBar" >
        <div class="search-record-outer"  >
            <div class="search-record-inner">
              Search History
              <button class="clear-button transparent-button" id="clearSearchHistory">
                Clear search history
              </button>
            </div>
          </div>
      </div>
      <div class="searchHistoryContainer" id="searchHistoryContainer" >                
      </div>
      <p><br><br>Note: It is a test application, and the arrow key functionality is not added yet!</p>
    `

export const deleteButtonTemplateNode = (title) => {
    return(
        `<div class="extended-box extended" >
            <h1>CSS-wizardry (Pure CSS)</h1>
            <button class="delete-button">
                ${title}
              <span class="white-circle">
                <span class="x">
                </span>
              </span>
            </button>
        </div>`
    )
}

export const searchRecordTemplateNode = (title, id, date) => {
    return( `<div class="search-record-outer search-record" id="${id}">
                <div class="search-record-inner">
                    <span>${title}</span>
<!--                    <span >-->
                        <date datetime="${date}" class="search-record-right">
                            ${date}
                        </date> 
<!--                        <span class="close" id="close-${id}" ></span>-->
                        <button class="transparent-button x x-size-small bg-gray" id="close-${id}" ></button>
<!--                    </span>-->
                </div>
            </div>`)
}

export const searchComponentTemplateNode = (searchNode,historyNode) => {
    return(
        `<div class="extended-box" >
                <h1>Simple JavaScript search application</h1>
                ${searchNode} 
                ${historyNode}
        </div>`
    )
}
