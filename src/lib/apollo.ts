import {ApolloClient, InMemoryCache} from '@apollo/client';

export const client = new ApolloClient({
	uri: 'https://api-sa-east-1.graphcms.com/v2/cl4r2gzz60h5y01yyg2wg1z19/master',
	cache: new InMemoryCache(),
});
