
import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useDebounce } from "@/hooks/useDebounce";
import { generateMockUsers } from "@/utils/mockData";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const USERS_PER_PAGE = 12;

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const currentPage = parseInt(searchParams.get("page") || "1");
  
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  
  const debouncedQuery = useDebounce(query, 300);

  const handleSearch = async (searchQuery: string, page: number) => {
    setLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Generate mock results based on query
    const allResults = [];
    let pageCount = 0;
    
    // Generate enough data to demonstrate pagination
    while (allResults.length < 1000 && pageCount < 100) {
      const batch = generateMockUsers(pageCount, 20, searchQuery);
      allResults.push(...batch);
      pageCount++;
      if (batch.length === 0) break;
    }
    
    const startIndex = (page - 1) * USERS_PER_PAGE;
    const endIndex = startIndex + USERS_PER_PAGE;
    const paginatedResults = allResults.slice(startIndex, endIndex);
    
    setSearchResults(paginatedResults);
    setTotalResults(allResults.length);
    setTotalPages(Math.ceil(allResults.length / USERS_PER_PAGE));
    setLoading(false);
  };

  useEffect(() => {
    if (debouncedQuery) {
      handleSearch(debouncedQuery, currentPage);
    } else {
      setSearchResults([]);
      setTotalResults(0);
      setTotalPages(0);
    }
  }, [debouncedQuery, currentPage]);

  const handlePageChange = (page: number) => {
    setSearchParams({
      q: query,
      page: page.toString()
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const SearchSkeleton = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: USERS_PER_PAGE }).map((_, index) => (
        <Card key={index} className="overflow-hidden border-0 shadow-lg bg-white/70 backdrop-blur-sm">
          <div className="relative">
            <Skeleton className="h-32 w-full" />
            <Skeleton className="absolute -bottom-8 left-4 h-16 w-16 rounded-full" />
          </div>
          <div className="pt-12 p-4 space-y-3">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-full" />
            <div className="flex gap-2">
              <Skeleton className="h-6 w-16" />
              <Skeleton className="h-6 w-20" />
              <Skeleton className="h-6 w-14" />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Search Results</h1>
            {query && !loading && (
              <p className="text-gray-600 mt-2">
                {totalResults} results for "{query}" - Page {currentPage} of {totalPages}
              </p>
            )}
            {loading && query && (
              <p className="text-gray-600 mt-2">Searching...</p>
            )}
          </div>
          
          {loading ? (
            <SearchSkeleton />
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchResults.map((person) => (
                  <Link key={person.id} to={`/profile/${person.id}`}>
                    <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm cursor-pointer">
                      <div className="relative">
                        <div className="h-32 gradient-sunset"></div>
                        <Avatar className="absolute -bottom-8 left-4 h-16 w-16 ring-4 ring-white">
                          <AvatarImage src={person.avatar} alt={person.name} />
                          <AvatarFallback className="gradient-pink text-white font-bold">
                            {person.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      
                      <div className="pt-12 p-4">
                        <h3 className="text-xl font-bold mb-1">{person.name}, {person.age}</h3>
                        <div className="flex items-center text-muted-foreground mb-3">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span className="text-sm">{person.location}</span>
                        </div>
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">{person.bio}</p>
                        
                        <div className="flex flex-wrap gap-2">
                          {person.interests.slice(0, 3).map((interest: string, index: number) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              className="bg-pink-100 text-pink-700 text-xs"
                            >
                              {interest}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
              
              {searchResults.length === 0 && query && !loading && (
                <Card className="p-8 text-center border-0 shadow-lg bg-white/70 backdrop-blur-sm">
                  <p className="text-gray-500">No people found matching "{query}"</p>
                </Card>
              )}
              
              {totalPages > 1 && (
                <div className="mt-8 flex justify-center">
                  <Pagination>
                    <PaginationContent>
                      {currentPage > 1 && (
                        <PaginationItem>
                          <PaginationPrevious
                            onClick={() => handlePageChange(currentPage - 1)}
                            className="cursor-pointer"
                          />
                        </PaginationItem>
                      )}
                      
                      {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                        let pageNum;
                        if (totalPages <= 5) {
                          pageNum = i + 1;
                        } else if (currentPage <= 3) {
                          pageNum = i + 1;
                        } else if (currentPage >= totalPages - 2) {
                          pageNum = totalPages - 4 + i;
                        } else {
                          pageNum = currentPage - 2 + i;
                        }
                        
                        return (
                          <PaginationItem key={pageNum}>
                            <PaginationLink
                              onClick={() => handlePageChange(pageNum)}
                              isActive={currentPage === pageNum}
                              className="cursor-pointer"
                            >
                              {pageNum}
                            </PaginationLink>
                          </PaginationItem>
                        );
                      })}
                      
                      {currentPage < totalPages && (
                        <PaginationItem>
                          <PaginationNext
                            onClick={() => handlePageChange(currentPage + 1)}
                            className="cursor-pointer"
                          />
                        </PaginationItem>
                      )}
                    </PaginationContent>
                  </Pagination>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
