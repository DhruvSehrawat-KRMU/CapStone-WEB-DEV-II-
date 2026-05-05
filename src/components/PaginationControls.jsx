function PaginationControls({ page, totalPages, onPrevious, onNext }) {
  return (
    <div className="pagination">

      <button onClick={onPrevious} disabled={page === 1}>
        Previous
      </button>

      <p>
        Page {page} of {totalPages}
      </p>

      <button onClick={onNext} disabled={page === totalPages}>
        Next
      </button>

    </div>
  );
}

export default PaginationControls;