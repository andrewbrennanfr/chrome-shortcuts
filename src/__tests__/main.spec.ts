import * as events from "@/events"
import { main } from "@/main"

describe("main", function () {
    const handleKeyDown = jest.spyOn(events, "handleKeyDown")

    afterEach(function () {
        jest.clearAllMocks()

        document.documentElement.innerHTML = "<head></head><body></body>"
    })

    describe("binds a keydown listener to a", function () {
        test("text input", function () {
            // Given
            const input = document.createElement("input")
            input.type = "text"

            const event = new KeyboardEvent("keydown")
            Object.defineProperty(event, "target", { value: input })

            // When
            main()

            document.body.dispatchEvent(event)

            // Then
            expect(handleKeyDown).toBeCalledTimes(1)

            expect(handleKeyDown).nthCalledWith(1, event)
        })

        test("textarea", function () {
            // Given
            const textarea = document.createElement("textarea")

            const event = new KeyboardEvent("keydown")
            Object.defineProperty(event, "target", { value: textarea })

            // When
            main()

            document.body.dispatchEvent(event)

            // Then
            expect(handleKeyDown).toBeCalledTimes(1)

            expect(handleKeyDown).nthCalledWith(1, event)
        })

        test("contenteditable element", function () {
            // Given
            const div = document.createElement("div")
            Object.defineProperty(div, "isContentEditable", { value: true })

            const event = new KeyboardEvent("keydown")
            Object.defineProperty(event, "target", { value: div })

            // When
            main()

            document.body.dispatchEvent(event)

            // Then
            expect(handleKeyDown).toBeCalledTimes(1)

            expect(handleKeyDown).nthCalledWith(1, event)
        })
    })

    describe("does not bind a keydown listener to a", function () {
        it("non-text input", function () {
            // Given
            const input = document.createElement("input")
            input.type = "search"

            const event = new KeyboardEvent("keydown")
            Object.defineProperty(event, "target", { value: input })

            // When
            main()

            document.body.dispatchEvent(event)

            // Then
            expect(handleKeyDown).not.toBeCalled()
        })

        it("non-contenteditable element", function () {
            // Given
            const div = document.createElement("div")
            Object.defineProperty(div, "isContentEditable", { value: false })

            const event = new KeyboardEvent("keydown")
            Object.defineProperty(event, "target", { value: div })

            // When
            main()

            document.body.dispatchEvent(event)

            // Then
            expect(handleKeyDown).not.toBeCalled()
        })
    })
})
