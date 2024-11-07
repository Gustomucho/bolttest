import React from 'react';

interface RecommendationCardProps {
  month: string;
  trend: string;
  recommendation: string;
}

function RecommendationCard({ month, trend, recommendation }: RecommendationCardProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{month}</h3>
      <div className="text-sm text-gray-500 mb-3">{trend}</div>
      <p className="text-gray-700">{recommendation}</p>
    </div>
  );
}

export default RecommendationCard;