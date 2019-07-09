import { refinementList, panel } from 'instantsearch.js/es/widgets';
import { isWindowMediumSize } from '../utils';

const locationsList = panel({
  templates: {
    header: 'Locations',
  },
})(refinementList);

export const locations = locationsList({
  container: '[data-widget="locations"]',
  attribute: 'locations',
  limit: isWindowMediumSize ? 5 : 10,
  searchable: true,
  searchablePlaceholder: isWindowMediumSize
    ? 'Cities or countries'
    : 'Search for cities or countries',
  templates: {
    searchableSubmit: `
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 17 17"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.69 15.189l-3.341-3.34c2.174-2.908 1.967-7.032-.675-9.674a7.424 7.424 0 1 0-10.5 10.5c2.643 2.642 6.767 2.848 9.675.674l3.34 3.34a1.063 1.063 0 0 0 1.5 0 1.063 1.063 0 0 0 0-1.5zm-5.288-3.787A5.37 5.37 0 0 1 3.81 3.81a5.368 5.368 0 1 1 7.592 7.592z"
  />
</svg>
`,
  },
});
