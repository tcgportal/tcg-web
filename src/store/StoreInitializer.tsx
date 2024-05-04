'use client';

import React from 'react';
import { useStore } from './useStore';

export const StoreInitializer: React.FC<{ user: any; children: React.ReactNode }> = ({ user, children }) => {
	useStore.setState({
		user,
	});
	return children;
};

export default StoreInitializer;
