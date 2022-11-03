import React, { Fragment, Suspense } from 'react';
import './App.less';
import BlogRouter from '@/router';
import LoadingPage from './components/Loading';

function App() {

	return (
		<Fragment>
			<Suspense fallback={<LoadingPage />}>
				<BlogRouter />
			</Suspense>
		</Fragment>
	);
}

export default App;
