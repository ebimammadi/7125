import {deleteButtonTemplateNode} from "./Templates"
/**
 * ButtonComponent component
 */
class ButtonComponent {
    constructor() {
        this.title = "Delete"
         // this.title = "DeleteDeleteDeleteDeleteDeleteDeleteDeleteDeleteDeleteDeleteDelete";
    }
    /**
     * Creates the deleteButton element (CSS button)
     * @return {string} returns the string to a html node
     */
    createHTMLNode() {
        return deleteButtonTemplateNode(this.title)
    }
}
export default ButtonComponent
