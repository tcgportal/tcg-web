'use client';

import { useCatQuery } from '@/queries/testQuery';
import React from 'react';

export const CatFact: React.FC<{}> = ({}) => {
	const { data, isLoading } = useCatQuery();
	//const { data, isLoading } = useCatQuery({ staleTime: 1000, refetchInterval: 1000 });
	return <div>{data.fact}</div>;
};

export default CatFact;
