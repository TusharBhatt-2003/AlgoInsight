import { conceptsData } from '../data/conceptsData';
import DSAProject from '../components/DSAProject';

const IntermediateDSA = () => {
  // Filter out intermediate DSA concepts from the data
  const intermediateConcepts = conceptsData.filter(concept => concept.category === 'intermediate');

  return (
    <div className="h-fit py-10  bg-black text-white">
        <h2 className="text-3xl font-bold text-center mb-8">Intermediate DSA Concepts</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {intermediateConcepts.map(concept => (
            <DSAProject
              key={concept.id}
              title={concept.title}
              description={concept.description}
              id={concept.id}
            />
          ))}
        </div>
    </div>
  );
};

export default IntermediateDSA;
