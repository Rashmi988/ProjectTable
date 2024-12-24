import { useState, useEffect } from 'react'
import Table from './components/Table';
import Pagination from './components/Pagination';
import './App.css'
import { getUniqueCurrencies } from './utils';

function App() {
  const [projects, setProjects] = useState([]);
  const [uniqueCurrencies, setUniqueCurrencies] = useState(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(5);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json');
        const data = await response.json();

        setProjects(data);
        const currenciesSet = getUniqueCurrencies(data)
        setUniqueCurrencies(currenciesSet)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchProjects();
  }, []);

  // Calculate the index of the first and last project on the current page
  const indexOfLastProject = currentPage * recordsPerPage;
  const indexOfFirstProject = indexOfLastProject - recordsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
      <div className="container">
      <h1 className="title">Project Listing</h1>
      <Table projects={currentProjects} currencies={uniqueCurrencies} />
      <Pagination
        projectsPerPage={recordsPerPage}
        totalProjects={projects.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  )
}

export default App
