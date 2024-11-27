type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: any;
};

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  return (
    <div className="flex justify-center">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
        <button
          key={pageNumber}
          className={`px-4 py-2 rounded-md mx-1 ${
            currentPage === pageNumber
              ? "bg-primary text-white"
              : "bg-gray-200 hover:bg-gray-300 duration-300 ease-linear"
          }`}
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
