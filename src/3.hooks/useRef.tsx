import { useExampleUseRef } from "./useExampleUseRef"

export default function ExampleUseRef() {
    const { handleSubmit, inputRef } = useExampleUseRef()

    return (
        <div>
            <input
                placeholder="isikan email kamu..."
                ref={inputRef}
            />

            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}