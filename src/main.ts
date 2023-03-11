import { handleKeyDown } from "@/events"

export function main(): void {
    document.body.addEventListener("keydown", function (event) {
        if (
            (event.target instanceof HTMLInputElement && event.target.type === "text") ||
            event.target instanceof HTMLTextAreaElement ||
            (event.target instanceof HTMLElement && event.target.isContentEditable)
        )
            handleKeyDown(event)
    })
}
