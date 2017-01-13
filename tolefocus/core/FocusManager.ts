import { FocusGroup } from "./FocusGroup";

export const focusGroupAttributeName = "focusGroup";
export const focusOrderAttributeName = "focusOrder";
export const focusableTagNames = ["a", "select", "button", "input", "textarea"];

export class FocusManager {
    root = new FocusGroup(null, null);

    focusNext(currentElement: HTMLElement) {
        const {group} = this.root.locateElementRecursively(currentElement);
        if (group) {
            const element = group.getNextElement(currentElement);
            if (element) {
                element.focus();
            }
        }
    }

    focusPrior(currentElement: HTMLElement) {
        const {group} = this.root.locateElementRecursively(currentElement);
        if (group) {
            const element = group.getPriorElement(currentElement);
            if (element) {
                element.focus();
            }
        }
    }
}

export const focusManager = new FocusManager();
