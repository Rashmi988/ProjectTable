import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Table from './index';

vi.mock('../../utils', () => ({
  getCurrencySymbol: vi.fn((currencies, currency) => '$')
}));

describe('Table Component', () => {
  const projects = [
    {
      id: 1,
      'percentage.funded': 186,
      'amt.pledged': 15823,
      currency: 'usd'
    },
    {
      id: 2,
      'percentage.funded': 8,
      'amt.pledged': 6859,
      currency: 'usd'
    }
  ];

  const currencies = {
    usd: '$'
  };

  it('renders the table with correct headers', () => {
    render(<Table projects={projects} currencies={currencies} />);
    expect(screen.getByText('S.No.')).toBeInTheDocument();
    expect(screen.getByText('Percentage Funded')).toBeInTheDocument();
    expect(screen.getByText('Amount Pledged')).toBeInTheDocument();
  });

  it('renders the correct number of rows based on the projects data', () => {
    render(<Table projects={projects} currencies={currencies} />);
    const rows = screen.getAllByRole('row');
    // 1 header row + 2 project rows
    expect(rows).toHaveLength(3);
  });

  it('renders the correct data for each project', () => {
    render(<Table projects={projects} currencies={currencies} />);
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('186')).toBeInTheDocument();
    expect(screen.getByText('$15823')).toBeInTheDocument();

    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('8')).toBeInTheDocument();
    expect(screen.getByText('$6859')).toBeInTheDocument();
  });
});