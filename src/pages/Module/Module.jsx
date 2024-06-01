import Card from "../../components/Card";

const Module = () => {
  return (
    <>
      <div>
        <div className='flex m-5 w-["100%"]'>
          <Card
            title="Assign a new module admin"
            description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
            buttonText="Next"
            buttonLink="/addModules"
          />

          <Card
            title="View all module admin"
            description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
            buttonText="Next"
            buttonLink="/managedUser"
          />

          <Card
            title="Add new Users"
            description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
            buttonText="Next"
            buttonLink="/addUsers"
          />
        </div>
      </div>
    </>
  );
};

export default Module;
