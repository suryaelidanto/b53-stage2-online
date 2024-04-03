export default function MyForm({ ref }: { ref: React.RefObject<HTMLInputElement> }) {
    const handleSubmit = () => {
        if (ref.current?.value) alert(`Email kamu adalah : ${ref.current.value}`)
    }

    return (
        <div>
            <input
                placeholder="isikan email kamu..."
                ref={ref}
            />

            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}