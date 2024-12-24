import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Pagination from './index';

describe('Pagination Component', () => {
  const paginate = vi.fn();

  const renderPagination = (currentPage, totalPages) => {
    render(
      <Pagination
        projectsPerPage={1}
        totalProjects={totalPages}
        paginate={paginate}
        currentPage={currentPage}
      />
    );
  };


  it('renders the correct page numbers when currentPage is 1', () => {
    renderPagination(1, 5);
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('renders the correct page numbers when currentPage is the last page', () => {
    renderPagination(5, 5);
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('renders the correct page numbers when currentPage is in the middle', () => {
    renderPagination(3, 5);
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
  });

  it('renders the "First Page" button when currentPage is greater than 3', () => {
    renderPagination(4, 5);
    expect(screen.getByLabelText('First Page')).toBeInTheDocument();
  });

  it('does not render the "First Page" button when currentPage is 3 or less', () => {
    renderPagination(3, 5);
    expect(screen.queryByLabelText('First Page')).not.toBeInTheDocument();
  });

  it('handles the "First Page" button click correctly', () => {
    renderPagination(4, 5);
    const firstPageButton = screen.getByLabelText('First Page');
    fireEvent.click(firstPageButton);
    expect(paginate).toHaveBeenCalledWith(1);
  });
});