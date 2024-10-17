import Card from '../components/Card';

const Home = () => {
  return (
    <div className="h-fit flex flex-col items-center justify-center bg-black">
      {/* Overview Section */}
      <section className="text-center py-10 px-5">
        <h1 className="text-4xl font-bold text-amber-300  mb-4">Welcome to DSA Showcase</h1>
        <p className="text-lg text-gray-300 max-w-lg mx-auto">
          This site showcases DSA concepts in JavaScript with code examples and interactive demos.
        </p>
      </section>

      {/* Cards Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-5 my-10 w-full max-w-5xl">
        <Card 
          title="Basic DSA Concepts"
          description="Explore fundamental algorithms like sorting and searching."
          route="/basic"
        />
        <Card 
          title="Intermediate DSA Concepts"
          description="Dive deeper into more complex data structures and algorithms."
          route="/intermediate"
        />
        <Card 
          title="Advanced DSA Concepts"
          description="Master advanced concepts like dynamic programming and graph algorithms."
          route="/advanced"
        />
      </section>
    </div>
  );
};

export default Home;
