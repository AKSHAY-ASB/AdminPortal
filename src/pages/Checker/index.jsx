import Card from "../../components/Card";

const Checker = () => {
  return (
    <>
      <div className='flex m-5 w-["100%"]'>
        <Card
          title="Request Awaiting Approval"
          description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
          buttonText="Next"
          buttonLink="/raisedRequest"
        />
      </div>
    </>
  );
};

export default Checker;
