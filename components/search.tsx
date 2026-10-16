'use client';

import { useStaticSearch } from 'fumadocs-core/search/client';
import {
  SearchDialog, SearchDialogClose, SearchDialogContent,
  SearchDialogHeader, SearchDialogIcon, SearchDialogInput,
  SearchDialogList, SearchDialogOverlay, type SharedProps,
} from 'fumadocs-ui/components/dialog/search';

export default function DocsSearch(props: SharedProps) {
  const search = useStaticSearch({ from: '/api/search' });
  return (
    <SearchDialog {...search} {...props}>
      <SearchDialogOverlay />
      <SearchDialogContent>
        <SearchDialogHeader>
          <SearchDialogIcon />
          <SearchDialogInput placeholder="Search guides and API reference…" />
          <SearchDialogClose />
        </SearchDialogHeader>
        <SearchDialogList />
      </SearchDialogContent>
    </SearchDialog>
  );
}
