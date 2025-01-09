const TeamSection = () => {
    const team = [
        { name: 'John Doe', role: 'Project Manager', image: '/assets/img/team/avt1.jpg' },
        { name: 'Jane Doe', role: 'Programmer', image: '/assets/img/team/avt2.jpg' },
        { name: 'John Doe', role: 'UX/UI Designer', image: '/assets/img/team/avt3.jpg' },
        { name: 'John Doe', role: 'Graphic Manager', image: '/assets/img/team/avt4.jpg' },
        { name: 'Jane Doe', role: 'IT Support', image: '/assets/img/team/avt5.jpg' },
        { name: 'John Doe', role: 'IT Support', image: '/assets/img/team/avt6.jpg' },
        { name: 'John Doe', role: 'Finance / Admin', image: '/assets/img/team/avt7.jpg' },
        { name: 'Jane Doe', role: 'CEO', image: '/assets/img/team/avt8.jpg' }
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