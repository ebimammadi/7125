import * as templateArray from "./templates";
import SearchHistory from "./SearchHistory";

const searchHistory = new SearchHistory();

/**
 * removeSearchRecord function removes the html node from the 'searchHistoryContainer'
 * @param  {string} elementId is the id of the desired node
 */
class SearchAutoComplete{
    /**
     * createHTMLNode function creates the autoComplete input search
     */
    createHTMLNode(){
        return templateArray.autoCompleteNode
    }

    /**
     * createKeyupInputEvent function adds the keyup search event for getting data from the API
     * @param {Number} milliseconds is the number in milliseconds to delay the fetching process from the API
     * @param {boolean} searchInMiddle is a flag to search just starting with the title or it can be in the middle of a title:
     * 'true': in the middle of a title, 'false': only starts with the title
     */
    createKeyupInputEvent(milliseconds,searchInMiddle){
        document.getElementById("search").addEventListener(
            'keyup',
            this.lessStressingFetch(
                ()=> {
                    if (document.getElementById("search").value.trim() != ''){
                        this.fetchDataFromAPI(searchInMiddle)
                    }else {
                        this.removeAutoCompleteItems();
                    }
                },milliseconds
            )
        )
    }

    /**
     * createOnFocusOutEvent function removes the autoCompleteItems
     */
    createOnFocusOutEvent(){
        document.addEventListener("click",  ()=> this.removeAutoCompleteItems() );
    }

    /**
     * createAutoCompleteItems function adds the items to the autoCompleteItems div
     * @param {Array} responseArray is an array of fetched titles
     */
    createAutoCompleteItems(responseArray){
        this.removeAutoCompleteItems();

        const search = document.getElementById("search").value;
        let items = responseArray.map(item => {
            const title = item.title;
            const pattern = new RegExp(search, 'gi');
            const highlightedSubstring = title.replace(pattern, (substring) =>`<b>${substring}</b>`);
            return (`<div value="${title}">${highlightedSubstring}</div>`)
        })
            .join('');

        document.getElementById("autoCompleteContainer").insertAdjacentHTML('beforeend',items);

        const childDivs = document.getElementById('autoCompleteContainer').getElementsByTagName('div');

        for(let i=0; i< childDivs.length; i++ )
        {
            let title = childDivs[i].getAttribute("value");
            childDivs[i].addEventListener('click',() => {
                searchHistory.pushSearchRecord(title);
                this.removeAutoCompleteItems();
                document.getElementById("search").value = "";
            },title)
        }
        document.getElementById("autoCompleteContainer").style.display = "block"
    }

    /**
     * removeAutoCompleteItems function removes the divs from autoCompleteContainer
     * @param {function} fn is a function to be called after milliSeconds
     * @param {Number} milliSeconds is a number for delaying the given function
     */
    removeAutoCompleteItems(){
        document.getElementById("autoCompleteContainer").style.display="none";
        const container = document.getElementById('autoCompleteContainer');
        while(container.childNodes.length>1) {
            container.removeChild(container.lastChild)
        }
    }

    /**
     * lessStressingFetch function delay a given function
     * @param {function} fn is a function to be called after milliSeconds
     * @param {Number} milliSeconds is a number for delaying the given function
     */
    lessStressingFetch(fn, milliSeconds){
        let timer = 0;
        return function(...args) {
            clearTimeout(timer)
            timer =  setTimeout( fn.bind(this, ...args), milliSeconds || 0)
        }
    }

    /**
     * fetchDataFromAPI function fetches data from the API and on success calls the 'createAutoCompleteItems'
     */
    fetchDataFromAPI(searchInMiddle){
        const search = document.getElementById("search").value.trim();
        fetch("https://omid.tadbir.net/api.php?country="+ search +"&searchInMiddle="+searchInMiddle, {
            "method": "GET"
        })
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) this.createAutoCompleteItems(data)
            })
            .catch(err => {
                console.log(err);
            });
    }
}
export default SearchAutoComplete
