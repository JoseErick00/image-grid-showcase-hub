import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CategoryGrid from "@/components/CategoryGrid";
import { searchProducts, Product } from "@/data/allProducts";
import { Search } from "lucide-react";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const searchResults = searchProducts(query);
    setResults(searchResults);
    setIsLoading(false);
  }, [query]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Search className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
          <p className="text-muted-foreground">Searching...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Search Results Header */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Search className="mx-auto h-12 w-12 text-primary mb-4" />
            <h1 className="font-omne-medium text-4xl md:text-5xl text-foreground mb-4">
              Search Results
            </h1>
            {query && (
              <p className="font-omne-regular text-lg text-muted-foreground">
                Showing results for: <span className="text-foreground font-medium">"{query}"</span>
              </p>
            )}
            <p className="font-omne-regular text-sm text-muted-foreground mt-2">
              {results.length} product{results.length !== 1 ? 's' : ''} found
            </p>
          </div>
        </div>
      </div>

      {/* Search Results Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {results.length > 0 ? (
          <CategoryGrid 
            items={results.map(product => ({
              id: product.id,
              title: product.title,
              image: product.image,
              link: product.link
            }))}
            columns={2}
            aspectRatio="portrait"
            buttonColor="#575757"
          />
        ) : (
          <div className="text-center py-16">
            <Search className="mx-auto h-16 w-16 text-muted-foreground mb-6" />
            <h2 className="font-omne-medium text-2xl text-foreground mb-4">
              No products found
            </h2>
            <p className="font-omne-regular text-muted-foreground mb-8 max-w-md mx-auto">
              We couldn't find any products matching "{query}". Try searching with different keywords.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground">
                Try: "tech gadgets"
              </span>
              <span className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground">
                Try: "home products"
              </span>
              <span className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground">
                Try: "sports equipment"
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;