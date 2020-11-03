import {resourceModule} from '@reststate/vuex';

export default function ({$axios, store}) {
  store.registerModule('drivers', resourceModule({name: 'drivers', httpClient: $axios}));
  store.registerModule('cars', resourceModule({name: 'cars', httpClient: $axios}));
  store.registerModule('cargos', resourceModule({name: 'cargos', httpClient: $axios}));
  store.registerModule('contacts', resourceModule({name: 'contacts', httpClient: $axios}));
  store.registerModule('contracts', resourceModule({name: 'contracts', httpClient: $axios}));
  store.registerModule('applications', resourceModule({name: 'applications', httpClient: $axios}));
}

