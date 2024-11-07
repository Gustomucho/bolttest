import React, { useState } from 'react';
import { Search, Plus, X } from 'lucide-react';

interface SearchBarProps {
  onSearch: (keywords: string[]) => void;
  isAnalyzing: boolean;
}

function SearchBar({ onSearch, isAnalyzing }: SearchBarProps) {
  const [inputs, setInputs] = useState(['']);
  const [showComparison, setShowComparison] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validKeywords = inputs.filter(input => input.trim());
    if (validKeywords.length > 0) {
      onSearch(validKeywords);
    }
  };

  const addKeyword = () => {
    if (inputs.length < 2) {
      setInputs([...inputs, '']);
      setShowComparison(true);
    }
  };

  const removeKeyword = (index: number) => {
    const newInputs = inputs.filter((_, i) => i !== index);
    setInputs(newInputs);
    setShowComparison(false);
  };

  const updateInput = (index: number, value: string) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        {inputs.map((input, index) => (
          <div key={index} className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => updateInput(index, e.target.value)}
              placeholder={`Enter keyword ${index + 1}...`}
              className="w-full px-6 py-4 text-lg rounded-full border-2 border-indigo-100 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
              disabled={isAnalyzing}
            />
            {index === 1 && (
              <button
                type="button"
                onClick={() => removeKeyword(index)}
                className="absolute right-16 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        ))}
        
        <div className="flex justify-between items-center">
          {!showComparison && (
            <button
              type="button"
              onClick={addKeyword}
              className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              <Plus className="w-4 h-4" />
              Add keyword for comparison
            </button>
          )}
          
          <button
            type="submit"
            disabled={isAnalyzing}
            className="ml-auto bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors disabled:bg-indigo-400 flex items-center gap-2"
          >
            {isAnalyzing ? (
              <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin" />
            ) : (
              <>
                <Search className="w-5 h-5" />
                Analyze
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;