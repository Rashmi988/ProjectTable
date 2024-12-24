import { getCurrencySymbol } from '../../utils';
import './index.css'

const Table = ({ projects, currencies }) => {

  return (
    <table aria-label="List of Projects" className="table" data-testid="table">
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Percentage Funded</th>
          <th>Amount Pledged</th>
        </tr>
      </thead>
      <tbody>
        {projects?.map((project, index) => (
          <tr key={project.id}>
            <td>{index + 1}</td>
            <td>{project['percentage.funded']}</td>
            <td>{getCurrencySymbol(currencies, project.currency)}{project['amt.pledged']}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
