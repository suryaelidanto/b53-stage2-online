import { useState } from "react"

export default function Form() {
    const [form, setForm] = useState<{ email: string, password: string }>({
        email: "",
        password: ""
    })


    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        alert(`Email ${form.email}\nPassword : ${form.password}`)
    }

    return (
        <form onSubmit={handleSubmit} method="POST">
            <input
                type="email"
                name="email"
                placeholder="Masukkan email..."
                onChange={handleChange}
                style={{ border: "2px solid black" }}
            />
            <input
                type="password"
                name="password"
                placeholder="Masukkan password..."
                onChange={handleChange}
                style={{ border: "2px solid black" }}
            />

            <button type="submit">Submit</button>
        </form>
    )
}