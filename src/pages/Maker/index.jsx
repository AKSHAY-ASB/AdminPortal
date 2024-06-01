import Card from "../../components/Card";

const Maker = () => {
  return (
    <div className='flex m-5 w-["100%"]'>
      <Card
        title="Create a new request for assigned modules"
        description="Here are the biggest enterprise technology acquisitions of 2021 so far."
        buttonText="Next"
        buttonLink="/requestModule"
      />
      <Card
        title="Raised Request"
        description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
        buttonText="Next"
        buttonLink="/raisedRequest"
      />
    </div>
  );
};

export default Maker;
