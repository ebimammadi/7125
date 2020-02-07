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
                <span><b>Search History</b></span>
                <span class="search-record-right" >
                    <a href="#" id="clearSearchHistory">
                        Clear search history
                    </a>
                </span>
            </div>
          </div>
      </div>
      <div class="searchHistoryContainer" id="searchHistoryContainer" >                
    </div>
    `

export const deleteButtonTemplateNode = (title) => {
    return(
        `<div class="extended-box extended" >
            <h1>CSS-wizardry</h1>
            <button class="delete-button">
                ${title}
                <span class="close-x">
                    <span class="slash-x"></span>
                    <span class="backslash-x"></span>
                </span>
            </button>
        </div>`
    )
}

export const searchRecordTemplateNode = (title, id, date) => {
    return( `<div class="search-record-outer search-record" id="${id}">
                <div class="search-record-inner">
                    <span>${title}</span>
                    <span class="search-record-right">
                        <span>
                            ${date}
                        </span> 
                        <span class="close" id="close-${id}" ></span>
                    </span>
                </div>
            </div>`)
}

export const searchComponentTemplateNode = (searchNode,historyNode) => {
    return(
        `<div class="extended-box" >
                <h1>Simple search application</h1>
                ${searchNode} 
                ${historyNode}
        </div>`
    )
}
