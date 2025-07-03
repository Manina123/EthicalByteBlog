import React from 'react';
    import { Button } from '@/components/ui/button';
    import { ChevronLeft, ChevronRight } from 'lucide-react';

    const Pagination = ({ currentPage, totalPages, onPageChange }) => {
      const handlePrevious = () => {
        if (currentPage > 1) {
          onPageChange(currentPage - 1);
        }
      };

      const handleNext = () => {
        if (currentPage < totalPages) {
          onPageChange(currentPage + 1);
        }
      };

      if (totalPages <= 1) {
        return null;
      }

      const pageNumbers = [];
      const maxPageButtons = 5; 
      let startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
      let endPage = Math.min(totalPages, startPage + maxPageButtons - 1);

      if (endPage - startPage + 1 < maxPageButtons) {
        startPage = Math.max(1, endPage - maxPageButtons + 1);
      }
      
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      return (
        <div className="flex items-center justify-center space-x-2 mt-12">
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrevious}
            disabled={currentPage === 1}
            aria-label="Go to previous page"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          {startPage > 1 && (
            <>
              <Button variant="outline" onClick={() => onPageChange(1)}>1</Button>
              {startPage > 2 && <span className="text-muted-foreground">...</span>}
            </>
          )}

          {pageNumbers.map((number) => (
            <Button
              key={number}
              variant={currentPage === number ? 'default' : 'outline'}
              onClick={() => onPageChange(number)}
              aria-current={currentPage === number ? 'page' : undefined}
            >
              {number}
            </Button>
          ))}

          {endPage < totalPages && (
            <>
              {endPage < totalPages -1 && <span className="text-muted-foreground">...</span>}
              <Button variant="outline" onClick={() => onPageChange(totalPages)}>{totalPages}</Button>
            </>
          )}

          <Button
            variant="outline"
            size="icon"
            onClick={handleNext}
            disabled={currentPage === totalPages}
            aria-label="Go to next page"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      );
    };

    export default Pagination;