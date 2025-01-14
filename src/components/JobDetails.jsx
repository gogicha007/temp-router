import { useLoaderData } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

const JobDetails = () => {
  const jobDetails = useLoaderData();
  // const { id } = useParams();
  return (
    <div className='job-details'>
      {/* /* <h1>Id is: {id}</h1> */}
      <p>
        <b>Job Title: </b>
        {jobDetails.title}
      </p>
      <p>
        <b>Salary: </b>
        {jobDetails.salary}
      </p>
      <p>
        <b>Job Location: </b>
        {jobDetails.location}
      </p>
      <p>
        <b>Description: </b>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste soluta
        voluptates, pariatur eaque officia doloremque, laboriosam recusandae
        nulla praesentium vero aliquam sed labore voluptatem inventore nam
        adipisci repellendus, ut corporis.
      </p>
      <button>Appy Now</button>
    </div>
  );
};

export default JobDetails;

export const jobDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`http://localhost:5000/jobs/${id}`);
  if(!res.ok) {
    throw Error('Could not found job details')
  }
  return res.json();
};
