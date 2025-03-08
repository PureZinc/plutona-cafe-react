import { useState } from "react";

type ContactItem = {
    emoji: string;
    details: string;
};

type FormField = {
    label: string;
    type: "text" | "email" | "textarea";
    id: string;
    name: string;
};

type FormData = {
    name: string;
    email: string;
    message: string;
}


const contactItems: ContactItem[] = [
    { emoji: "📍", details: "42 Cosmic Rd, Kissimmee, Florida" },
    { emoji: "📡", details: "contact@plutonacafe.com" },
    { emoji: "📶", details: "+1-555-PLUTONA-42" },
    { emoji: "⏱️", details: "Open Daily: 07:00 - 23:00 Earth Standard Time" }
];

const formFields: FormField[] = [
    { label: "Name", type: "text", id: "name", name: "name" },
    { label: "Communication Frequency (Email)", type: "email", id: "email", name: "email" },
    { label: "Message Content", type: "textarea", id: "message", name: "message" }
];

const ContactInfo: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });

    const updateFormData = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value })
    }

    const postForm = () => {
        console.log(formData);
    }

    return (
        <section className="contact-info">
            <h2 className="uppercase">Contact Details</h2>
            <p>We're always ready to receive your communications.</p>
            <div>
                {contactItems.map((item, index) => (
                    <div key={index} className="contact-item">
                        <i>{item.emoji}</i>
                        <span>{item.details}</span>
                    </div>
                ))}
            </div>
            <div>
                <form onSubmit={postForm} method="POST">
                    {formFields.map((field, index) => (
                        <div key={index} className="form-group">
                            <label htmlFor={field.id} className="uppercase">{field.label}</label>
                            {field.type === "textarea" ? (
                                <textarea id={field.id} name={field.name} onChange={updateFormData} />
                            ) : (
                                <input id={field.id} name={field.name} type={field.type} onChange={updateFormData} />
                            )}
                        </div>
                    ))}
                </form>
            </div>
        </section>
    );
};

export default ContactInfo;