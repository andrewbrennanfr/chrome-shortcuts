export function handleKeyDown({ key, target }: KeyboardEvent): void {
    if (!(target instanceof HTMLElement)) return

    if (key === "ArrowUp" || key === "ArrowDown") return console.log(target, key)

    const value =
        "value" in target && typeof target.value === "string"
            ? target.value
            : target.isContentEditable
            ? target.innerHTML
            : ""

    if (/^;[a-zA-Z_]{2,}$/.test(value)) console.log(target, value)
}
