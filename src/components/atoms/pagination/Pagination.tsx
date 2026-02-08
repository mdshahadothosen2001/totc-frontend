import React from "react";
import ButtonUI from "../../ui/ButtonUI";

interface Props {
  currentPage: number;
  totalPages: number;
  rowsPerPage: number;
  onPageChange: (page: number) => void;
  onRowsPerPageChange?: (rowsPerPage: number) => void;
  showRowsPerPage?: boolean;
  className?: string;
}

const rowsPerPageOptions = [10, 20, 50, 100];

const Pagination: React.FC<Props> = ({
  currentPage,
  totalPages,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange,
  showRowsPerPage = true,
  className = "",
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const getVisiblePages = () => {
    const maxVisible = 3;
    const pages: number[] = [];

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 2) {
        pages.push(1, 2, 3);
      } else if (currentPage >= totalPages - 1) {
        pages.push(totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(currentPage - 1, currentPage, currentPage + 1);
      }
    }

    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
    <div className={`bg-white rounded-[16px] border border-[#EBECEF] p-3 md:p-4 ${className}`}>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Rows Per Page Section */}
        {showRowsPerPage && onRowsPerPageChange && (
          <div className="flex items-center gap-2 md:gap-3">
            <span className="text-[#404A60] font-inter text-xs md:text-sm font-medium">Row Per Page</span>
            <div className="w-20 md:w-24">
              <select
                value={rowsPerPage.toString()}
                onChange={(e) => onRowsPerPageChange(Number(e.target.value))}
                className="w-full text-[#404A60] 
                  px-2 md:px-3 py-1 border border-[#49BBBD] 
                  rounded text-xs md:text-sm focus:outline-none 
                  focus:ring-1 focus:ring-[#49BBBD]
                "
              >
                {rowsPerPageOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <span className="text-[#404A60] font-inter text-xs md:text-sm">Entries</span>
          </div>
        )}

        {/* Pagination Controls */}
        <div className="flex items-center gap-1 md:gap-2">
          <ButtonUI
            variant="ghost"
            size="sm"
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className="px-2 md:px-3 py-1 text-xs md:text-sm
            text-[#404A60] hover:text-[#49BBBD]
              disabled:opacity-50 disabled:cursor-not-allowed
            "
          >
            <span className="hidden sm:inline">&lt; Previous</span>
            <span className="sm:hidden">&lt;</span>
          </ButtonUI>

          <div className="flex gap-1">
            {visiblePages.map((page) => (
              <ButtonUI
                key={page}
                variant={page === currentPage ? "default" : "ghost"}
                size="sm"
                onClick={() => onPageChange(page)}
                className={`px-2 md:px-3 py-1 text-xs md:text-sm rounded transition-colors ${
                  page === currentPage ? "bg-[#49BBBD] text-white" : "text-[#404A60] hover:text-[#49BBBD] hover:bg-gray-50"
                }`}
              >
                {page}
              </ButtonUI>
            ))}
          </div>

          <ButtonUI
            variant="ghost"
            size="sm"
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-2 md:px-3 py-1 text-xs md:text-sm text-[#404A60] hover:text-[#49BBBD] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="hidden sm:inline">Next &gt;</span>
            <span className="sm:hidden">&gt;</span>
          </ButtonUI>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
