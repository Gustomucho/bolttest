import React from 'react';
import { ArrowUpRight, ArrowDownRight, ArrowRight } from 'lucide-react';

interface TrendAnalysisProps {
  keywords: string[];
}

function TrendAnalysis({ keywords }: TrendAnalysisProps) {
  // Sample analysis - in a real app, this would be calculated from actual data
  const analyses = keywords.map(keyword => ({
    keyword,
    trendPercentage: Math.floor(Math.random() * 60) - 20,
    sentiment: Math.random() > 0.5 ? 'positive' : 'negative'
  }));

  const getTrendIcon = (percentage: number) => {
    if (percentage > 0) return <ArrowUpRight className="w-5 h-5 text-green-500" />;
    if (percentage < 0) return <ArrowDownRight className="w-5 h-5 text-red-500" />;
    return <ArrowRight className="w-5 h-5 text-yellow-500" />;
  };

  const getTrendColor = (percentage: number) => {
    if (percentage > 0) return 'text-green-600';
    if (percentage < 0) return 'text-red-600';
    return 'text-yellow-600';
  };

  return (
    <div className="space-y-6">
      {analyses.map((analysis, index) => (
        <div key={analysis.keyword} className={index > 0 ? 'pt-6 border-t' : ''}>
          <h3 className="font-semibold text-gray-900 mb-4">{analysis.keyword}</h3>
          
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <div className="flex items-center gap-2 mb-2">
              {getTrendIcon(analysis.trendPercentage)}
              <span className={`text-2xl font-bold ${getTrendColor(analysis.trendPercentage)}`}>
                {analysis.trendPercentage > 0 ? '+' : ''}{analysis.trendPercentage}%
              </span>
            </div>
            <p className="text-gray-600">5-year growth trend</p>
          </div>

          <div className="space-y-3">
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 mt-2 rounded-full bg-indigo-600"></span>
                <p className="text-gray-600">
                  Consistent {analysis.sentiment} growth pattern
                </p>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 mt-2 rounded-full bg-indigo-600"></span>
                <p className="text-gray-600">
                  Peak interest during Q4
                </p>
              </li>
            </ul>
          </div>
        </div>
      ))}
      
      {keywords.length > 1 && (
        <div className="pt-6 border-t">
          <h3 className="font-semibold text-gray-900 mb-4">Comparison Insights</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 mt-2 rounded-full bg-indigo-600"></span>
              <p className="text-gray-600">
                {keywords[0]} shows {analyses[0].trendPercentage > analyses[1].trendPercentage ? 'stronger' : 'weaker'} growth compared to {keywords[1]}
              </p>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 mt-2 rounded-full bg-indigo-600"></span>
              <p className="text-gray-600">
                Consider combining these keywords in your content strategy
              </p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default TrendAnalysis;