import { handleKeyDown } from "@/events"

describe("handleKeyDown", function () {
    const log = jest.spyOn(console, "log")
    log.mockImplementation()

    afterEach(function () {
        jest.clearAllMocks()
    })

    describe("handles a keydown event", function () {
        describe("with the key", function () {
            test("arrow up", function () {
                // Given
                const input = document.createElement("input")

                const event = new KeyboardEvent("keydown")
                Object.defineProperties(event, {
                    key: { value: "ArrowUp" },
                    target: { value: input },
                })

                // When
                handleKeyDown(event)

                // Then
                expect(log).toBeCalledTimes(1)

                expect(log).nthCalledWith(1, input, "ArrowUp")
            })

            test("arrow down", function () {
                // Given
                const input = document.createElement("input")

                const event = new KeyboardEvent("keydown")
                Object.defineProperties(event, {
                    key: { value: "ArrowDown" },
                    target: { value: input },
                })

                // When
                handleKeyDown(event)

                // Then
                expect(log).toBeCalledTimes(1)

                expect(log).nthCalledWith(1, input, "ArrowDown")
            })
        })

        describe("with the value", function () {
            test(";he", function () {
                // Given
                const input = document.createElement("input")
                input.value = ";he"

                const event = new KeyboardEvent("keydown")
                Object.defineProperty(event, "target", { value: input })

                // When
                handleKeyDown(event)

                // Then
                expect(log).toBeCalledTimes(1)

                expect(log).nthCalledWith(1, input, input.value)
            })

            test(";hello", function () {
                // Given
                const input = document.createElement("input")
                input.value = ";hello"

                const event = new KeyboardEvent("keydown")
                Object.defineProperty(event, "target", { value: input })

                // When
                handleKeyDown(event)

                // Then
                expect(log).toBeCalledTimes(1)

                expect(log).nthCalledWith(1, input, input.value)
            })

            test(";hello_world", function () {
                // Given
                const input = document.createElement("input")
                input.value = ";hello_world"

                const event = new KeyboardEvent("keydown")
                Object.defineProperty(event, "target", { value: input })

                // When
                handleKeyDown(event)

                // Then
                expect(log).toBeCalledTimes(1)

                expect(log).nthCalledWith(1, input, input.value)
            })

            test(";hello_world_hello_world", function () {
                // Given
                const input = document.createElement("input")
                input.value = ";hello_world_hello_world"

                const event = new KeyboardEvent("keydown")
                Object.defineProperty(event, "target", { value: input })

                // When
                handleKeyDown(event)

                // Then
                expect(log).toBeCalledTimes(1)

                expect(log).nthCalledWith(1, input, input.value)
            })
        })

        describe("with the contenteditable value", function () {
            test(";he", function () {
                // Given
                const div = document.createElement("div")
                Object.defineProperty(div, "isContentEditable", { value: true })
                div.innerHTML = ";he"

                const event = new KeyboardEvent("keydown")
                Object.defineProperty(event, "target", { value: div })

                // When
                handleKeyDown(event)

                // Then
                expect(log).toBeCalledTimes(1)

                expect(log).nthCalledWith(1, div, div.innerHTML)
            })

            test(";hello", function () {
                // Given
                const div = document.createElement("div")
                Object.defineProperty(div, "isContentEditable", { value: true })
                div.innerHTML = ";hello"

                const event = new KeyboardEvent("keydown")
                Object.defineProperty(event, "target", { value: div })

                // When
                handleKeyDown(event)

                // Then
                expect(log).toBeCalledTimes(1)

                expect(log).nthCalledWith(1, div, div.innerHTML)
            })

            test(";hello_world", function () {
                // Given
                const div = document.createElement("div")
                Object.defineProperty(div, "isContentEditable", { value: true })
                div.innerHTML = ";hello_world"

                const event = new KeyboardEvent("keydown")
                Object.defineProperty(event, "target", { value: div })

                // When
                handleKeyDown(event)

                // Then
                expect(log).toBeCalledTimes(1)

                expect(log).nthCalledWith(1, div, div.innerHTML)
            })

            test(";hello_world_hello_world", function () {
                // Given
                const div = document.createElement("div")
                Object.defineProperty(div, "isContentEditable", { value: true })
                div.innerHTML = ";hello_world_hello_world"

                const event = new KeyboardEvent("keydown")
                Object.defineProperty(event, "target", { value: div })

                // When
                handleKeyDown(event)

                // Then
                expect(log).toBeCalledTimes(1)

                expect(log).nthCalledWith(1, div, div.innerHTML)
            })
        })
    })

    describe("does not handle a key press", function () {
        describe("with the value", function () {
            test(";h", function () {
                // Given
                const input = document.createElement("input")
                input.value = ";h"

                const event = new KeyboardEvent("keydown")
                Object.defineProperty(event, "target", { value: input })

                // When
                handleKeyDown(event)

                // Then
                expect(log).not.toBeCalled()
            })

            test(";hello-world", function () {
                // Given
                const input = document.createElement("input")
                input.value = ";hello-world"

                const event = new KeyboardEvent("keydown")
                Object.defineProperty(event, "target", { value: input })

                // When
                handleKeyDown(event)

                // Then
                expect(log).not.toBeCalled()
            })

            test("hello", function () {
                // Given
                const input = document.createElement("input")
                input.value = "hello"

                const event = new KeyboardEvent("keydown")
                Object.defineProperty(event, "target", { value: input })

                // When
                handleKeyDown(event)

                // Then
                expect(log).not.toBeCalled()
            })
        })

        describe("with the contenteditable value", function () {
            test(";h", function () {
                // Given
                const div = document.createElement("div")
                Object.defineProperty(div, "isContentEditable", { value: true })
                div.innerHTML = ";h"

                const event = new KeyboardEvent("keydown")
                Object.defineProperty(event, "target", { value: div })

                // When
                handleKeyDown(event)

                // Then
                expect(log).not.toBeCalled()
            })

            test(";hello-world", function () {
                // Given
                const div = document.createElement("div")
                Object.defineProperty(div, "isContentEditable", { value: true })
                div.innerHTML = ";hello-world"

                const event = new KeyboardEvent("keydown")
                Object.defineProperty(event, "target", { value: div })

                // When
                handleKeyDown(event)

                // Then
                expect(log).not.toBeCalled()
            })

            test("hello", function () {
                // Given
                const div = document.createElement("div")
                Object.defineProperty(div, "isContentEditable", { value: true })
                div.innerHTML = "hello"

                const event = new KeyboardEvent("keydown")
                Object.defineProperty(event, "target", { value: div })

                // When
                handleKeyDown(event)

                // Then
                expect(log).not.toBeCalled()
            })
        })

        describe("without", function () {
            test("a value or contenteditable value", function () {
                // Given
                const div = document.createElement("div")

                const event = new KeyboardEvent("keydown")
                Object.defineProperty(event, "target", { value: div })

                // When
                handleKeyDown(event)

                // Then
                expect(log).not.toBeCalled()
            })

            test("a target", function () {
                const event = new KeyboardEvent("keydown")

                // When
                handleKeyDown(event)

                // Then
                expect(log).not.toBeCalled()
            })
        })
    })
})
