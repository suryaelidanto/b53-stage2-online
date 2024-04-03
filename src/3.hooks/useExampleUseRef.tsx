import { useRef } from "react"

const useExampleUseRef = () => {
    const inputRef = useRef<HTMLInputElement>(null)

    const handleSubmit = () => {
        if (inputRef.current?.value) alert(`Email kamu adalah : ${inputRef.current.value}`)
    }

    return {
        inputRef,
        handleSubmit
    }
}

export { useExampleUseRef }