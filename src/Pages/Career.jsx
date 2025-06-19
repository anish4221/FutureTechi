import React from 'react'
import './Career.css'
import bgvideo from '../assets/futurevideo.mp4'
const Career = () => {
    return (
        <div>
            <video autoPlay muted loop className="bg-video">
                <source src={bgvideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="career-overlay">
                <form className="career-form"
                    onSubmit={async (e) => {
                        e.preventDefault();
                        const form = e.target;

                        const data = {
                            name: form.name.value.trim(),
                            email: form.email.value.trim(),
                            phone: form.phone.value.trim(),
                            about: form.about.value.trim(),
                            skills: form.skills.value.trim(),
                        };

                        // Client-side validation
                        if (Object.values(data).some(field => field === '')) {
                            alert("❗ Please fill in all fields before submitting.");
                            return;
                        }

                        try {
                            const response = await fetch("http://https://emailbackend-p7sd.onrender.com:5000/api/form/submit", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify(data),
                            });

                            const result = await response.json();

                            if (result.success) {
                                alert("✅ Application submitted successfully!");
                                form.reset(); // clear form
                            } else {
                                alert("❌ Something went wrong. Please try again.");
                            }
                        } catch (error) {
                            console.error("Form Submit Error:", error);
                            alert("🚫 Server error. Please try again later.");
                        }
                    }}
                >
                    <h2>Join FutureTechi 🚀</h2>

                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your full name" required />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="you@example.com" required />

                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" placeholder="+91-XXXXXXXXXX" required />

                    <label htmlFor="about">Tell me about yourself</label>
                    <textarea id="about" name="about" rows="4" placeholder="Describe your experience or interest..." required />

                    <label htmlFor="skills">Skills</label>
                    <input type="text" id="skills" name="skills" placeholder="e.g. React, Node.js, Firebase" required />

                    <button type="submit">Submit Application</button>
                </form>


            </div>


        </div>
    )
}

export default Career
