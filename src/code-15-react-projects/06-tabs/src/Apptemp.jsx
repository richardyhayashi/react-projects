import { useEffect, useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

//const apiUrl = 'https://course-api.com/react-tabs-project';
const apiUrl = 'http://localhost/3001/posts';

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    try {
      const respose = await fetch(apiUrl);
      const newJobs = await respose.json();
      setJobs(newJobs);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className="section loading">
        <h1>loading...</h1>
      </section>
    );
  }

  if (!jobs[value]) {
    return <div>Not Loaded!</div>;
  }

  const { company, dates, duties, title } = jobs[value];

  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
      </div>
    </section>
  );
}

export default App;
