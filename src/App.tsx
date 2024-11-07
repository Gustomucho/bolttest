import React, { useState } from 'react';
import {
  TrendingUp,
  Calendar,
  BrainCircuit,
  Lightbulb,
  ArrowRight,
} from 'lucide-react';
import TrendChart from './components/TrendChart';
import RecommendationCard from './components/RecommendationCard';
import SearchBar from './components/SearchBar';
import TrendAnalysis from './components/TrendAnalysis';
import FeatureCard from './components/FeatureCard';

function App() {
  const [keywords, setKeywords] = useState<string[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleSearch = (searchTerms: string[]) => {
    setKeywords(searchTerms);
    setIsAnalyzing(true);
    setTimeout(() => setIsAnalyzing(false), 1500);
  };

  const features = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: '5-Year Trend Analysis',
      description:
        'Uncover long-term patterns and seasonal trends in keyword popularity',
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: 'Smart Timing Recommendations',
      description:
        'Get data-driven suggestions for the best times to boost your online presence',
    },
    {
      icon: <BrainCircuit className="h-6 w-6" />,
      title: 'Intelligent Insights',
      description:
        'Compare keywords and receive actionable insights based on historical data',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <TrendingUp className="h-8 w-8 text-indigo-600" />
            <h1 className="text-4xl font-bold text-gray-900">
              Keyword Trends Analyzer
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Discover and compare keyword trends to optimize your marketing
            campaigns
          </p>
        </div>

        {/* Search Section */}
        <SearchBar onSearch={handleSearch} isAnalyzing={isAnalyzing} />

        {/* Feature Cards - Moved Here */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {keywords.length === 0 && !isAnalyzing && (
          <div className="mt-12 text-center">
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
              <Lightbulb className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold mb-4">Get Started</h2>
              <p className="text-gray-600 mb-6">
                Enter keywords to analyze their popularity trends and receive
                personalized recommendations for your marketing strategy.
              </p>
              <div className="flex items-center justify-center gap-2 text-indigo-600">
                <ArrowRight className="h-5 w-5" />
                <span className="font-medium">
                  Try comparing related keywords like "digital marketing" and
                  "content marketing"
                </span>
              </div>
            </div>
          </div>
        )}

        {keywords.length > 0 && !isAnalyzing && (
          <div className="mt-12 space-y-8">
            {/* Main Analysis Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="h-5 w-5 text-indigo-600" />
                  <h2 className="text-xl font-semibold">Trend Analysis</h2>
                </div>
                <TrendChart keywords={keywords} />
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <BrainCircuit className="h-5 w-5 text-indigo-600" />
                  <h2 className="text-xl font-semibold">Insights</h2>
                </div>
                <TrendAnalysis keywords={keywords} />
              </div>
            </div>

            {/* Recommendations Section */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-6">
                <Calendar className="h-5 w-5 text-indigo-600" />
                <h2 className="text-xl font-semibold">
                  Strategic Recommendations
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <RecommendationCard
                  month="January"
                  trend="↗️ High Interest"
                  recommendation="Increase ad spend by 20% to capitalize on post-holiday momentum"
                />
                <RecommendationCard
                  month="June"
                  trend="↗️ Peak Season"
                  recommendation="Launch major campaigns and content initiatives"
                />
                <RecommendationCard
                  month="November"
                  trend="➡️ Steady Growth"
                  recommendation="Prepare holiday season campaigns and promotions"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
