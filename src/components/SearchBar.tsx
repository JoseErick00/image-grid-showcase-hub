import { useState } from "react";
import { Search, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

interface SearchBarProps {
  onSearch?: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (searchQuery: string) => {
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setOpen(false);
      setQuery("");
      onSearch?.(searchQuery.trim());
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch(query);
    }
  };

  return (
    <>
      <div className="relative flex-1 max-w-md mx-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="text"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            onFocus={() => setOpen(true)}
            className="pl-10 pr-12 h-10 w-full bg-background border-border"
          />
          {query && (
            <button
              onClick={() => {
                setQuery("");
                setOpen(false);
              }}
              className="absolute right-8 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          <Button
            size="sm"
            onClick={() => handleSearch(query)}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 px-2"
          >
            <Search className="h-3 w-3" />
          </Button>
        </div>
      </div>

      <CommandDialog open={open && query.length > 0} onOpenChange={setOpen}>
        <CommandInput 
          placeholder="Search products..." 
          value={query}
          onValueChange={setQuery}
        />
        <CommandList>
          <CommandEmpty>No products found.</CommandEmpty>
          <CommandGroup heading="Search suggestions">
            <CommandItem onSelect={() => handleSearch("tech gadgets")}>
              <Search className="mr-2 h-4 w-4" />
              <span>Tech gadgets</span>
            </CommandItem>
            <CommandItem onSelect={() => handleSearch("sports equipment")}>
              <Search className="mr-2 h-4 w-4" />
              <span>Sports equipment</span>
            </CommandItem>
            <CommandItem onSelect={() => handleSearch("home products")}>
              <Search className="mr-2 h-4 w-4" />
              <span>Home products</span>
            </CommandItem>
            <CommandItem onSelect={() => handleSearch("kids toys")}>
              <Search className="mr-2 h-4 w-4" />
              <span>Kids toys</span>
            </CommandItem>
            <CommandItem onSelect={() => handleSearch("health products")}>
              <Search className="mr-2 h-4 w-4" />
              <span>Health products</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default SearchBar;