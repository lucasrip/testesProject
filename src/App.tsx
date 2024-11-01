import Routes from './../router';
import GlobalStyle from './styles/global';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorHandller from './components/ErrorHandller';
import { useState } from 'react';

function logErrorToService(error: Error, info: React.ErrorInfo) {
  console.error('Caught an error:', error, info);
}

function App() {
  // const [someKey, setSomeKey] = useState(null);
  return (
    <ErrorBoundary
      FallbackComponent={ErrorHandller}
      onError={logErrorToService}
      // onReset={() => setSomeKey(null)}
      // resetKeys={[someKey]}
    >
      <Routes />
      <GlobalStyle />
    </ErrorBoundary>
  );
}


export default App;
