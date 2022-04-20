import GraphiQL from 'graphiql';
import { createGraphiQLFetcher } from '@graphiql/toolkit';

const fetcher = createGraphiQLFetcher({
  url: 'https://api-ap-northeast-1.graphcms.com/v2/cl2882fjo2sma01z12w2a1yxr/master'
})

export default function Index() {
  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <GraphiQL fetcher={fetcher} editorTheme={'dracula'} />
    </main>
  );
}
