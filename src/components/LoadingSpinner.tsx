import { memo } from 'react';

const LoadingSpinner = memo(() => (
  <div className="h-screen flex items-center justify-center bg-background">
    <div className="relative">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary/20"></div>
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent absolute top-0 left-0"></div>
    </div>
  </div>
));

LoadingSpinner.displayName = 'LoadingSpinner';

export default LoadingSpinner;