import anisImg from "../../assets/images/anis.png"

const teamMembers = [
  {
    name: "MD ANISUL ISLAM",
    role: "CSE 029 07727",
    description: "Alice is responsible for overseeing the project's progress and ensuring all tasks are completed on time.",
    image: anisImg 
  },
  {
    name: "WAHIDUR",
    role: "CSE 029 25486",
    description: "Bob leads the development team and is focused on coding and implementing key features.",
    image: "https://via.placeholder.com/150" 
  },
  {
    name: "SAJJAD",
    role: "CSE 029 25486",
    description: "Charlie designs the user interface and ensures a great user experience throughout the project.",
    image: "https://via.placeholder.com/150" 
  },
  {
    name: "RIFAT",
    role: "CSE 029 25486",
    description: "Dana is responsible for testing the application and ensuring its quality and performance.",
    image: "https://via.placeholder.com/150" 
  },
  {
    name: "TURZA",
    role: "CSE 029 25486",
    description: "Eve manages deployment processes, continuous integration, and cloud infrastructure.",
    image: "https://via.placeholder.com/150" 
  },
];

const Team = () => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
              style={{ maxWidth: "300px" }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <h4 className="text-lg text-gray-600 mb-2">{member.role}</h4>
              <p className="text-gray-700">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
