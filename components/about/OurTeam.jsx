const TeamSection = () => {
    const team = [
        { name: 'John Doe', role: 'Project Manager', image: 'https://i.ibb.co/RgJ26WV/avt1.webp' },
        { name: 'Jane Doe', role: 'Programmer', image: 'https://i.ibb.co/Gp6bzfz/avt2.webp' },
        { name: 'John Doe', role: 'UX/UI Designer', image: 'https://i.ibb.co/rG5j3H8/avt3.webp' },
        { name: 'John Doe', role: 'Graphic Manager', image: 'https://i.ibb.co/80r8Svr/avt4.webp' },
        { name: 'Jane Doe', role: 'IT Support', image: 'https://i.ibb.co/FDXFwbr/avt5.webp' },
        { name: 'John Doe', role: 'IT Support', image: 'https://i.ibb.co/pzKhSQp/avt6.webp' },
        { name: 'John Doe', role: 'Finance / Admin', image: 'https://i.ibb.co/Kr3c8XB/avt7.webp' },
        { name: 'Jane Doe', role: 'CEO', image: 'https://i.ibb.co/YDY6Zpw/avt8.webp' },
    ]

    return (
        <section className="py-16 px-4 max-w-7xl mx-auto">
            <div className="text-start mb-12">
                <p className="text-sm text-gray-600 mb-4 text-start">Our team</p>
                <h3 className="text-3xl font-serif mb-6 leading-snug">
                    Our expert team is ready to create digital solutions tailored to your needs.
                </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {team.map((member, index) => (
                    <div key={index} className="text-start">
                        <div className="aspect-square rounded-lg overflow-hidden mb-4">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="font-medium text-lg">{member.name}</h3>
                        <p className="text-gray-600">{member.role}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TeamSection