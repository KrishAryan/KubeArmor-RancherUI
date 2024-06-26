// ./product.ts
import { IPlugin } from '@shell/core/types';
import Dashboard from 'components/Install.vue';

export function init($plugin: IPlugin, store: any) {
  const YOUR_PRODUCT_NAME = 'kubearmor';
  const YOUR_K8S_RESOURCE_NAME = 'provisioning.cattle.io.cluster';
  const CUSTOM_PAGE_NAME = 'page1';

  const {
    product,
    configureType,
    virtualType,
    basicType
  } = $plugin.DSL(store, YOUR_PRODUCT_NAME);

  // registering a cluster-level product
  product({
    icon:    'gear',
    inStore: 'cluster', // this is what defines the extension as a cluster-level product
    weight:  100,
    to:      {
      name:   `c-cluster-${ YOUR_PRODUCT_NAME }-${ CUSTOM_PAGE_NAME }`,
      params: { product: YOUR_PRODUCT_NAME }
    }
  });

  // defining a k8s resource as page
  /*configureType(YOUR_K8S_RESOURCE_NAME, {
    displayName: 'some-custom-name-you-wish-to-assign-to-this-resource',
    isCreatable: true,
    isEditable:  true,
    isRemovable: true,
    showAge:     true,
    showState:   true,
    canYaml:     true,
    customRoute: {
      name:   `c-cluster-${ YOUR_PRODUCT_NAME }-resource`,
      params: {
        product:  YOUR_PRODUCT_NAME,
        resource: YOUR_K8S_RESOURCE_NAME
      }
    }
  });*/

  // creating a custom page
  virtualType({
    labelKey: 'kubearmor',
    overview: true,
    name:     "page1",
    route:    {
      name:   `c-cluster-${ YOUR_PRODUCT_NAME }-${ CUSTOM_PAGE_NAME }`,
      params: { product: YOUR_PRODUCT_NAME }
    }
  });

  // registering the defined pages as side-menu entries
  basicType([ CUSTOM_PAGE_NAME]);
}
